import { useState } from "react";
import AuthRoutes from "./auth.routes";

const AppRoutes = () => {
    const [ signed ] = useState(false);

    return signed ? <AuthRoutes /> : <AuthRoutes />
};

export default AppRoutes;