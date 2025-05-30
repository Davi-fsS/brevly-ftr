import {
    createContext,
    useContext,
    useState,
} from "react";
import type { Link } from "../components/domain/link";

interface LinkContextType {
    links: Link[];
    setLinks: React.Dispatch<React.SetStateAction<Link[]>>;
};
  
export const LinkContext = createContext<LinkContextType | undefined>(undefined);
  
export function LinkProvider({ children }: React.PropsWithChildren) {
  const mock = [
    {
      id: "0196fb02-2849-7fd1-9794-0c916c586d86",
      originalLink: "http://google.com",
      shortLink: "aabcddaaas",
      accessCount: 0
    },
    {
      id: "0196fb02-2849-7fd1-9794-0c916c586d86",
      originalLink: "http://google.com",
      shortLink: "aabcddaaas",
      accessCount: 1
    },
    {
      id: "0196fb02-2849-7fd1-9794-0c916c586d86",
      originalLink: "http://google.com",
      shortLink: "aabcddaaas",
      accessCount: 3
    },
  ]
  
  const [links, setLinks] = useState<Link[]>(mock);
  
  return (
    <LinkContext.Provider value={{ links, setLinks }}>
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