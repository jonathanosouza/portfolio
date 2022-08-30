import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { HomeModal } from "./pages/Home/HomeModal";

export function Router() {
return (
    <Routes>
      <Route path="/" element={<HomeModal/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
)
}