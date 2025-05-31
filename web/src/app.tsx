import logo from "./assets/Logo.svg";
import { NewLinkCard } from "./components/new-link-card";
import { LinksCreatedCard } from "./components/links-created-card";

export function App(){
  return (
    <div className="w-100 mx-auto md:w-[100vh] md:mt-5">

      <div className="w-100 py-7">
        <img src={logo} className="w-25 mx-auto md:mx-0"/>   
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-start">
        <NewLinkCard/>

        <LinksCreatedCard/>
      </div>
    </div>
  )
}
