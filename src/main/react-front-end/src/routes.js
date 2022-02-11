import LeasingManagerToProcess from "./pages/LeasingManagerToProcess";
import LeasingManagerInProgress from "./pages/LeasingManagerInProgress";
import OMToprocess from "./pages/OMToprocess";
import OMInProgress from "./pages/OMInProgress";
import SignatoryToProcess from "./pages/SignatoryToProcess";
import SignatoryInProgress from "./pages/SignatoryInProgress";

export const leasingManagerRoutes = [
    {path:'/leaseit/leasingmanager/toprocess', name:'toProcess', component: <LeasingManagerToProcess />},
    {path:'/leaseit/leasingmanager/inprogress', name:'inProgress', component: <LeasingManagerInProgress />},
];

export const OMRoutes = [
    {path:'/leaseit/om/toprocess', name:'toProcess', component: <OMToprocess />},
    {path:'/leaseit/om/inprogress', name:'inProgress', component: <OMInProgress />},
];

export const SignatoryRoutes = [
    {path:'/leaseit/signatory/toprocess', name:'toProcess', component: <SignatoryToProcess />},
    {path:'/leaseit/signatory/inprogress', name:'inProgress', component: <SignatoryInProgress />},
];

export const routes = [
    ...leasingManagerRoutes,
    ...OMRoutes,
    ...SignatoryRoutes
];