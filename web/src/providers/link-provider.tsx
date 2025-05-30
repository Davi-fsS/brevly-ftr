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

interface LinkContextType {
    links: Link[];
    handleDeleteLink: (id: string, shortLink: string) => {};
    handleGetLinkByShort: (shortLink: string) => {};
    linkToRedirect: Link | undefined;
};
  
export const LinkContext = createContext<LinkContextType | undefined>(undefined);
  
export function LinkProvider({ children }: React.PropsWithChildren) {
  const [reload, setReload] = useState<boolean>(false);
  const [links, setLinks] = useState<Link[]>([]);
  const [linkToRedirect, setLinkToRedirect] = useState<Link>();

  useEffect(() => {
    const requestData = async() => {
      const response = await getAllLinks();
      
      setLinks(response)
    };

    requestData();
  }, [reload]);

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
  
  return (
    <LinkContext.Provider value={{ links, handleDeleteLink, handleGetLinkByShort, linkToRedirect }}>
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