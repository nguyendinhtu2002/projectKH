import Api from "../Api/Api"
import MassOrder from "../MassOrder/MassOrder"
import MyOrders from "../MyOrders/MyOrders"
import Neworder from "../NewOrder/Neworder"
import Services from "../Services/Services"
import Support from "../Support/Support"
export const SidebarData = [
    
    {
        path: "/services",
        file:<Services/>,
        tilte:"Services"
    },
    {
        path: "/tickets",
        file:<Support/>,
        tilte:"Support"
    },
    {
        path: "/api",
        file:<Api/>,
        tilte:"API Documentation"
    },
    {
        path: "/new",
        file:<Neworder/>,
        tilte:"New order"
    },
    {
        path: "/mass",
        file:<MassOrder/>,
        tilte:"Mass order"
    },
    {
        path: "/orders",
        file:<MyOrders/>,
        tilte:"My Orders"
    },
]