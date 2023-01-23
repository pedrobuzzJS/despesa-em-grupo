import { useState } from "react";
import AuthRoutes from "./auth.routes";
import DefualtRoutes from "./default.routes";

const AppRoutes = () => {
    const [ signed, setSigned ] = useState(false);

    return signed ? <AuthRoutes /> : <AuthRoutes />
};

export default AppRoutes;