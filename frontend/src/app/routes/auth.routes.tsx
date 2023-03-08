import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RoleProvider } from "../context/RoleContext";
import { SideBarLayout } from "../components/Menu/SideBar/SideBar";
import { HomePage } from "../pages/Home/Home";
import { SnackBarProvider } from "../context/snackBarContext";
import { FormProvider } from "../context/formContext";
import { TipoDespesaConsulta } from "../pages/Consulta_Cadastros/TipoDespesa/TipoDespesaConsulta/TipoDespesaConsulta";
import { TipoDespesaCadastro } from "../pages/Consulta_Cadastros/TipoDespesa/TipoDespesaCadastro/TipoDespesaCadastro";
import { MenuConsulta } from "../pages/Consulta_Cadastros/Menus/MenuConsulta/MenuConsulta";
import { MenuCadastro } from "../pages/Consulta_Cadastros/Menus/MenuCadastro/MenuCadastro";

const AuthRoutes = () => {
    return (
        <BrowserRouter>
            <SnackBarProvider>
                <SideBarLayout>
                    <FormProvider>
                        <Routes>
                            <Route path="/" element={<RoleProvider children={<HomePage />} funcao={["Ser"]}/>}/>
                            <Route path="tipo-despesa" element={<RoleProvider children={<TipoDespesaConsulta />} funcao={["Ser"]}/>}/>
                            <Route path="tipo-despesa-manutencao/:op/:id" element={<RoleProvider children={<TipoDespesaCadastro />} funcao={["Ser"]}/>}/>
                            <Route path="tipo-despesa-manutencao/:op" element={<RoleProvider children={<TipoDespesaCadastro />} funcao={["Ser"]}/>}/>
                            <Route path="menu" element={<RoleProvider children={<MenuConsulta />} funcao={["Ser"]}/>}/>
                            <Route path="menu-manutencao/:op/:id" element={<RoleProvider children={<MenuCadastro />} funcao={["Ser"]}/>}/>
                            <Route path="menu-manutencao/:op" element={<RoleProvider children={<MenuCadastro />} funcao={["Ser"]}/>}/>
                            <Route path="*" element={<h1>404</h1>} />
                        </Routes>
                    </FormProvider>
                </SideBarLayout>
            </SnackBarProvider>
        </BrowserRouter>
    );
};

export default AuthRoutes;