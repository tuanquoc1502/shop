import Home from "../containers/home";
import FormAdd from "../containers/formAdd";

export const Routes = [
  {
    path: "/",
    element: <Home />,
    exact: true,
  },
  {
    path: "/add",
    element: <FormAdd />,
    exact: true,
  },
  {
    path: "/edit/:id",
    element: <FormAdd />,
    exact: true,
  },
];
