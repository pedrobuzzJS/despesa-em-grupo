import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashBoard } from "../pages/Dashboard/Dashboard";
import { PageA } from "../pages/PageA/PagaA";
import { RoleProvider } from "../context/RoleContext";
import { SideBarLayout } from "../components/Menu/SideBar/SideBar";

const AuthRoutes = () => {
    return (
        <BrowserRouter>
            <SideBarLayout children={
                <>
                    <Routes>
                        <Route path="/" element={<h1>Home</h1>} />
                        <Route path="*" element={<h1>404</h1>} />
                        <Route path="dash" element={<RoleProvider children={<DashBoard />} funcao={["1", "2"]}/>}/>
                        <Route path="pagea" element={<RoleProvider children={<PageA />} funcao={["Tem que estar dentro da main"]}/>}/>
                    </Routes>
                </>
            } />
        </BrowserRouter>
    );
};

export default AuthRoutes;