import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminPaths } from "./Admin.routes";
import { routeGenerator } from "../Utilities/routesGenerator";
import { facultyPaths } from "./Faculty.routes";
import { studentPaths } from "./Student.routes";
import Login from "../Pages/Login/Login";
import ProtectedRoute from "../Components/ProtectedRoute";
import ChangePassword from "../Pages/ChangePassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <App />
      </ProtectedRoute>
    ),
    children: routeGenerator(adminPaths),
  },
  {
    path: "/faculty",
    element: (
      <ProtectedRoute role="faculty">
        <App />
      </ProtectedRoute>
    ),
    children: routeGenerator(facultyPaths),
  },
  {
    path: "/student",
    element: (
      <ProtectedRoute role="student">
        <App />
      </ProtectedRoute>
    ),
    children: routeGenerator(studentPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/change-password",
    element: <ChangePassword />,
  },
]);

export default router;
