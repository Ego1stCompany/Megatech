import RemoteAssistance from "../RemoteAssistance/RemoteAssistance";
import Contacts from "../Contacts/Contacts";
import Reviews from "../Reviews/Reviews";
import Organizations from "../Organizations/Organizations";
import TypesOfServices from "../TypesOfServices/TypesOfServices";
import Repair from "../Repair/Repair";
import FormAuthorization from "../FormAuthorization/FormAuthorization";
import DashBoardOrders from "../DashBoardOrders/DashBoardOrders";

import FormRegistration from "../FormRegistration/FormRegistration";
import Home from "../Home/Home";

export const authRoutes = [
    {
        path: "/admin/orders",
        Component: <DashBoardOrders/>,
    }
]

export const userRoutes = [
    {
        path: "/",
        Component: <Home/>
    },
    {
        path: "/remote-assistance",
        Component: <RemoteAssistance/>
    },
    {
        path: "/contacts",
        Component: <Contacts/>
    },
    {
        path: "/reviews",
        Component: <Reviews/>
    },
    {
        path: "/organizations",
        Component: <Organizations/>
    },
    {
        path: "/services",
        Component: <TypesOfServices/>
    },
    {
        path: "/repair",
        Component: <Repair/>
    },
    {
        path: "/user/registration",
        Component: <FormRegistration/>
    },
    {
        path:'/admin/authorization',
        Component: <FormAuthorization/>
    },
]


