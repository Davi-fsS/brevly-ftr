import { Card } from "./components/card";
import logo from "./assets/Logo.svg";
import { NewLinkCard } from "./components/new-link-card";

export function App(){
  return (
    <div className="w-100 mx-auto">

      <div className="w-100 py-7">
        <img src={logo} className="w-25 mx-auto"/>   
      </div>

      <div className="flex flex-col gap-3">
        <NewLinkCard/>

        <Card>
          <h1>Meus links</h1>
        </Card>
      </div>
    </div>
  )
}
