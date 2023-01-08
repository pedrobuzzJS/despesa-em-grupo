import React from "react";
import AppRoutes from "./routes/index.routes";
import { AuthProvider } from "./context/authContext";

const App: React.FC = () => {
  return (
    <AuthProvider children={<AppRoutes />} />
  );
};

export default App;