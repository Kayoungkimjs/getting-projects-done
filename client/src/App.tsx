import { Route, Routes } from "react-router-dom";
// import GpdBoard from "./pages/GpdBoard";
import {
  GpdBoard,
  Greeting,
  Login,
  Main,
  NameForm,
  SelectCategoryForm,
  // SelectProjectForm,
} from "./pages";

interface RouteConfig {
  path: string;
  element: React.ReactNode;
}

function App() {
  const routes: RouteConfig[] = [
    { path: "/", element: <Greeting /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <NameForm /> },
    { path: "/register/select", element: <SelectCategoryForm /> },
    // { path: "/register/project", element: <SelectProjectForm /> },
    { path: "/main/:id", element: <Main /> },
  ];

  return (
    <div className="app">
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
