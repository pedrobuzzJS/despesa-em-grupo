
import React, { useEffect, useState } from "react";
import { Navigate, Route, PathRouteProps } from "react-router-dom";
import { useAuth } from "../context/authContext";
import api from "../services/api";

interface RoutesPropsData extends PathRouteProps {
  role?: string;
}

const PrivateRoutes: React.FC<RoutesPropsData> = ({ role, ...rest }) => {
  const [permissions, setPermissions] = useState([] as string[]);

//   useEffect(() => {
//     async function loadRoles() {
//       const response = await api.get("/users/roles");
//       const findRole = response.data.some((r: string) =>
//         role?.split(",").includes(r)
//       );
//       setPermissions(findRole);
//     }

//     loadRoles();
//   }, []);

  const { signed } = useAuth();

//   if (!signed) {
//     return <Navigate to={"/"} />
//   }

//   if (!role && signed) {
//     return <Route {...rest} />;
//   }

  return permissions ? <Route {...rest} /> : <></>;
};

export default PrivateRoutes;