import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashBoard } from "../pages/Dashboard/Dashboard";
import { PageA } from "../pages/PageA/PagaA";
import { RoleProvider } from "../context/RoleContext";
import { SideBarLayout } from "../components/Menu/SideBar/SideBar";
import { MenuProvider } from "../context/menuContext";
import { HomePage } from "../pages/Home/Home";
import { SnackBarProvider } from "../context/snackBarContext";

const AuthRoutes = () => {
    return (
        <BrowserRouter>
            <SnackBarProvider>
                <MenuProvider>
                    <SideBarLayout>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="*" element={<h1>404</h1>} />
                            <Route path="dash" element={<RoleProvider children={<DashBoard />} funcao={["1", "2"]}/>}/>
                            <Route path="pagea" element={<RoleProvider children={<PageA />} funcao={["Rota Liberada"]}/>}/>
                        </Routes>
                    </SideBarLayout>
                </MenuProvider>
            </SnackBarProvider>
        </BrowserRouter>
    );
};

export default AuthRoutes;