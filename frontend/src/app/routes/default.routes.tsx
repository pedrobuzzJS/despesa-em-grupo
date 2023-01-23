import { BrowserRouter, Routes, Route } from "react-router-dom";

const DefualtRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<></>} />
                <Route path="*" element={<></>} />
            </Routes>
        </BrowserRouter>
    );
};

export default DefualtRoutes;