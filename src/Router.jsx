import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const App = lazy( () => import("./App") );
const MainPage = lazy( () => import("./pages/MainPage") );
const ProfilePage = lazy( () => import("./pages/ProfilePage") );
const SearchPage = lazy( () => import("./pages/SearchPage") );
const ReelsPage = lazy( () => import("./pages/ReelsPage") );
const ShopPage = lazy( () => import("./pages/ShopPage") );


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
