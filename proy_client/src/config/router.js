import { LayoutGeneral } from "../Layouts/General/LayoutGeneral";
import { Admin } from "../pages/admin/AdminHome/Admin";
import { Usuarios } from "../pages/admin/Usuarios/Usuarios";
import { Singin } from "../pages/web/Singin/Singin";
import { Home } from "../pages/web/Home/Home";
import { Register }from "../pages/web/Register/register";
import { NotFound } from "../pages/web/NotFound/NotFound";
import { LayoutLogin } from "../Layouts/Login/LayoutLogin";
import { redactar } from "../pages/admin/Write/redactar";
import { Sent } from "../pages/admin/Sent/Sent";
import { EditUser } from "../pages/admin/Usuarios/EditUser/EditUser";

/* Components > Layouts > Pages > routes */
const AdminRoutes = [
  { path: "/admin", component: Admin, layout: LayoutGeneral },
  { path: "/admin/users", component: Usuarios, layout: LayoutGeneral },
  { path: "/admin/users/edit", component: EditUser, layout: LayoutGeneral },
  { path: "/login", component: Singin , layout: LayoutLogin },
  { path: "/admin/mensajes/redactar", component: redactar, layout: LayoutGeneral },
  { path: "/admin/mensajes/enviados", component: Sent, layout: LayoutGeneral },
];

const GeneralRoutes = [
    { path: "/users", component: Register, layout: LayoutLogin },    
    { path: "/", component: Home, layout: LayoutLogin },
    { path: "*", component: NotFound, layout: LayoutGeneral },
];

const allRoutesProject = [...AdminRoutes, ...GeneralRoutes];
export default allRoutesProject;