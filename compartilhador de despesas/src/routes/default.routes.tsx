import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppDefaultRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<><h1>Default</h1></>} />
                <Route path="*" element={<><h1>404</h1></>} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppDefaultRoutes;