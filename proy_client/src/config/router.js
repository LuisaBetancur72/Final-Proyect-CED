import { LayoutGeneral } from "../Layouts/General/LayoutGeneral";
import { Admin } from "../pages/admin/AdminHome/Admin";
import { Usuarios } from "../pages/admin/Usuarios/Usuarios";
import { Singin } from "../pages/web/Singin/Singin";
import { Home } from "../pages/web/Home/Home";
import { Register }from "../pages/web/Register/register";
import { NotFound } from "../pages/web/NotFound/NotFound";
import { LayoutLogin } from "../Layouts/Login/LayoutLogin";
import { Redactar } from "../pages/admin/Mensajes/Write/redactar";
import { Sent } from "../pages/admin/Mensajes/Sent/Sent";
import { EditUser } from "../pages/admin/Usuarios/EditUser/EditUser";
import { CreateUser } from "../pages/admin/Usuarios/CreateUser/CreateUser";

/* Components > Layouts > Pages > routes */
const AdminRoutes = [
  { path: "/admin", component: Admin, layout: LayoutGeneral },
  { path: "/admin/users/all", component: Usuarios, layout: LayoutGeneral },
  { path: "/admin/users/update/:id", component: EditUser, layout: LayoutGeneral },
  { path: "/admin/users/create", component: CreateUser, layout: LayoutGeneral },
  { path: "/login", component: Singin , layout: LayoutLogin },
  { path: "/admin/mensajes/redactar", component:Redactar, layout: LayoutGeneral },
  { path: "/admin/user/messages/all", component: Sent, layout: LayoutGeneral },
];

const GeneralRoutes = [
    { path: "/register", component: Register, layout: LayoutLogin },    
    { path: "/", component: Home, layout: LayoutLogin },
    { path: "*", component: NotFound, layout: LayoutGeneral },
];

const allRoutesProject = [...AdminRoutes, ...GeneralRoutes];
export default allRoutesProject;