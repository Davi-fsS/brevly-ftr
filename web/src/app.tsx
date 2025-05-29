import logo from "./assets/Logo.svg";
import { NewLinkCard } from "./components/new-link-card";
import { LinksCreatedCard } from "./components/links-created-card";
import { useEffect, useState } from "react";

export function App(){
  const [linksList, setLinksList] = useState([]);

  useEffect(() => {
    setLinksList([]);
  }, []);

  return (
    <div className="w-100 mx-auto">

      <div className="w-100 py-7">
        <img src={logo} className="w-25 mx-auto"/>   
      </div>

      <div className="flex flex-col gap-3">
        <NewLinkCard/>

        <LinksCreatedCard linksList={linksList}/>
      </div>
    </div>
  )
}
