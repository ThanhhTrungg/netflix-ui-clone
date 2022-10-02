// Routes config
import config from "~/config/config";

// Pages
import Home from "~/pages/Home/Home";
import Login from "~/pages/Login/Login";
import SignUp from "~/pages/SignUp/SignUp";
import Search from "~/pages/Search/Search";
import Profile from "~/pages/Profile/Profile";
// Public routes
export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.login, component: Login },
    { path: config.routes.signup, component: SignUp },
    { path: config.routes.search, component: Search },
    { path: config.routes.profile, component: Profile },
];

// Private routes
export const privateRoutes = [];
