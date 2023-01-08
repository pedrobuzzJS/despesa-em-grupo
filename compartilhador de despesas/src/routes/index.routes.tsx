import { useAuth } from "../context/authContext";
import AppAuthRoutes from "./auth.routes";
import AppDefaultRoutes from "./default.routes";

const AppRoutes = () => {
    const { signed, loginLoaging } = useAuth();

    if (loginLoaging === true) {
        return (
            <>
                <h1>Carregando</h1>
            </>
        );
    };

    return signed ? <AppAuthRoutes /> : <AppDefaultRoutes />;
};

export default AppRoutes;