import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Vote from "./pages/vote/Vote";
import Register from "./pages/register/Register";
import Manage from "./pages/manage/Manage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Vote />,
  },
  {
    path: "/admin",
    element: <Register />,
  },
  {
    path: "/manage",
    element: <Manage />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
