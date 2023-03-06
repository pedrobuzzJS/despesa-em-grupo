import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RoleProvider } from "../context/RoleContext";
import { SideBarLayout } from "../components/Menu/SideBar/SideBar";
import { MenuProvider } from "../context/menuContext";
import { HomePage } from "../pages/Home/Home";
import { SnackBarProvider } from "../context/snackBarContext";
import { FormProvider } from "../context/formContext";
import { TipoDespesaConsulta } from "../pages/Consulta_Cadastros/TipoDespesa/TipoDespesaConsulta/TipoDespesaConsulta";

const AuthRoutes = () => {
    return (
        <BrowserRouter>
            <SnackBarProvider>
                <MenuProvider>
                    <SideBarLayout>
                        <FormProvider>
                            <Routes>
                                <Route path="/" element={<RoleProvider children={<HomePage />} funcao={["Ser"]}/>}/>
                                <Route path="tipo-despesa" element={<RoleProvider children={<TipoDespesaConsulta />} funcao={["Ser"]}/>}/>
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