import { Outlet } from "react-router-dom";
import { ModalCard } from "../../components/Modal/Modal";
import { Home } from "../../pages/Home/Home";
import { LayoutContainer } from "./DefaultLayoutstyles";


export function DefaultLayout(){
  return(
    <LayoutContainer>
      <Home/>
      <ModalCard/>
      <Outlet/>
    </LayoutContainer>

  )
}