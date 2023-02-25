import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashBoard } from "../pages/Dashboard/Dashboard";
import { PageA } from "../pages/PageA/PagaA";
import { RoleProvider } from "../context/RoleContext";
import { SideBarLayout } from "../components/Menu/SideBar/SideBar";
import { MenuProvider } from "../context/menuContext";
import { HomePage } from "../pages/Home/Home";
import { SnackBarProvider } from "../context/snackBarContext";
import { FormProvider } from "../context/formContext";

const AuthRoutes = () => {
    return (
        <BrowserRouter>
            <SnackBarProvider>
                <MenuProvider>
                    <SideBarLayout>
                        <FormProvider>
                            <Routes>
                                <Route path="/" element={<RoleProvider children={<HomePage />} funcao={["Ser"]}/>}/>
                                <Route path="dash" element={<RoleProvider children={<DashBoard />} funcao={["Ser"]}/>}/>
                                <Route path="pagea" element={<RoleProvider children={<PageA />} funcao={["Rota Liberada"]}/>}/>
                                <Route path="*" element={<h1>404</h1>} />
                            </Routes>
                        </FormProvider>
                    </SideBarLayout>
                </MenuProvider>
            </SnackBarProvider>
        </BrowserRouter>
    );
};

export default AuthRoutes;