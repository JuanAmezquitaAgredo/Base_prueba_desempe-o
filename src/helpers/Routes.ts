import { HomeView } from "../views/private/home_view/homeView";
import { LoginView } from "../views/public/login_view/loginView";
import { RegisterView } from "../views/public/register_view/registeView";

export const Routes = {
    public: [
        { path: "/Login", component: LoginView },
        { path: "/Register", component: RegisterView },
    ],
    private: [
        { path: "/home", component: HomeView},
    ]
  };