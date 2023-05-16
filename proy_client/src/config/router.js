import { LayoutGeneral } from "../Layouts/LayoutGeneral";
import { Admin } from "../pages/admin/Admin";
import { Singin } from "../pages/admin/Singin";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { Register }from "../pages/Register/register";
import { NotFound } from "../pages/NotFound/NotFound";
import { LayoutLogin } from "../Layouts/Login/LayoutLogin";

/* Components > Layouts > Pages > routes */
const AdminRoutes = [
  { path: "/admin", component: Admin, layout: LayoutGeneral },
  { path: "/admin/login", component: Singin , layout: LayoutLogin },
];

const GeneralRoutes = [
    { path: "/register", component: Register, layout: LayoutLogin },
    { path: "/", component: Home, layout: LayoutLogin },
    { path: "/contact", component: Contact, layout: LayoutGeneral },
    { path: "*", component: NotFound, layout: LayoutGeneral },
];

const allRoutesProject = [...AdminRoutes, ...GeneralRoutes];
export default allRoutesProject;