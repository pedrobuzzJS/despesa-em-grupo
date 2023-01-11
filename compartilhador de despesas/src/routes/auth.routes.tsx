import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppAuthRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<><h1>Auth</h1></>} />
                <Route path="*" element={<><h1>404</h1></>} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppAuthRoutes;