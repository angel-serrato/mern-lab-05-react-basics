import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";
import { Toaster } from "react-hot-toast";

function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <UsersList />,
      },
      {
        path: "/users/new",
        element: <UsersForm />,
      },
      {
        path: "/users/:id/edit",
        element: <UsersForm />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
