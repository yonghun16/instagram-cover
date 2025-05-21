import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import ReelsPage from "./pages/ReelsPage";
import ShopPage from "./pages/ShopPage";


// 라우터 컴포넌트
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/:username",
        element: <ProfilePage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/reels",
        element: <ReelsPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
    ],
  },
]);

export default router;
