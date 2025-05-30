import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import type { Link } from "../components/domain/link";
import { getAllLinks } from "../http/get-all-links";
import { removeLink } from "../http/remove-link";
import { toastSuccess } from "../toast/toast-success";
import { toastError } from "../toast/toast-error";
import { getLinkByShort } from "../http/get-link-by-short";
import { incrementAccessLink } from "../http/increment-access-link";
import { createLink } from "../http/create-link";
import { downloadCsvFile } from "../http/csv-file";

interface LinkContextType {
    links: Link[];
    handleDeleteLink: (id: string, shortLink: string) => {};
    handleGetLinkByShort: (shortLink: string) => {};
    linkToRedirect: Link | undefined;
    handleCreateLink: (originalLink: string, shortLink: string) => {};
    handleDownloadCsvFile: () => {};
    handleCopyLink: (link: string) => any;
    loading: boolean
};
  
export const LinkContext = createContext<LinkContextType | undefined>(undefined);
  
export function LinkProvider({ children }: React.PropsWithChildren) {
  const [loading, setLoading] = useState<boolean>(false);
  const [reload, setReload] = useState<boolean>(false);
  const [links, setLinks] = useState<Link[]>([]);
  const [linkToRedirect, setLinkToRedirect] = useState<Link>();

  useEffect(() => {
    const requestData = async() => {
      setLoading(true);

      const response = await getAllLinks();
      
      setLinks(response)
      setLoading(false);
    };

    requestData();
  }, [reload]);

  useEffect(() => {
    const requestData = async() => {
      if(linkToRedirect){
        await handleIncrementAccessLink(linkToRedirect.id);
      }
    };

    requestData();
  }, [linkToRedirect]);

  const handleCreateLink = async(originalLink: string, shortLink: string) => {
    const response = await createLink(originalLink, shortLink);

    if (response instanceof Error) {
      toastError(response.message);
      return;
    }

    if (response?.status === 201) {
      toastSuccess("Link adicionado com sucesso!");
      setReload(!reload);
    }
  };

  const handleCopyLink = (link: string) => {
    navigator.clipboard.writeText(link)
    .then(() => {
      toastSuccess("Link copiado com sucesso!")
    })
    .catch(err => {
      toastError("Erro ao copiar o link")
    });
  };

  const downloadFile = (url: string, filename: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  const handleDownloadCsvFile = async() => {
    const response = await downloadCsvFile();

    if (response instanceof Error) {
      toastError(response.message);
      return;
    }

    if (response?.status === 200) {
      const { url, name } = response.data;
  
      downloadFile(url, name);
    }

  };

  const handleDeleteLink = async (id: string, shortLink: string) => {
    const isConfirmed = confirm(`Você realmente quer apagar o link ${shortLink}?`);

    if(isConfirmed){
      const response = await removeLink(id);
  
      if(response.status === 204){
        toastSuccess("Link removido com sucesso!");
        setReload(!reload);
      }
      else{
        toastError("Não foi possível remover este link");
      }
    }
  }
  
  const handleGetLinkByShort = async (shortLink: string) => {
    const response = await getLinkByShort(shortLink);

    if(response.status === 200){
      setLinkToRedirect(response.data);
    }
    else{
      toastError("Não foi possível buscar este link");
    }
  }

  const handleIncrementAccessLink = async (id: string) => {
    const response = await incrementAccessLink(id);

    if(response.status !== 200){
      toastError("Não foi possível incrementar o acesso deste link")
    }
  }
  
  return (
    <LinkContext.Provider value={{ loading, links, handleCopyLink, handleDownloadCsvFile, handleDeleteLink, handleGetLinkByShort, handleCreateLink, linkToRedirect }}>
      {children}
    </LinkContext.Provider>
  );
}

export function useLinks(): LinkContextType {
    const context = useContext(LinkContext);
    if (!context) {
        throw new Error('useLinks deve ser usado dentro de um LinkProvider');
    }
    return context;
}