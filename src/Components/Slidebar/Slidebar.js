import AddFund from "../AddFund/AddFund"
import Affiliate from "../Affiliate/Affiliate"
import Api from "../Api/Api"
import CashFlow from "../CashFlow/CashFlow"
import Childpanel from "../Childpanel/Childpanel"
import MassOrder from "../MassOrder/MassOrder"
import MyOrders from "../MyOrders/MyOrders"
import Neworder from "../NewOrder/Neworder"
import Services from "../Services/Services"
import Setting from "../Setting/Setting"
import Support from "../Support/Support"
import ViewTicket from "../ViewTicket/ViewTicket"
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
    {
        path: "/addfunds",
        file:<AddFund/>,
        tilte:"Add funds"
    },
    {
        path: "/cashflow",
        file:<CashFlow/>,
        tilte:"Cash Flow"
    },
    {
        path: "/affiliate",
        file:<Affiliate/>,
        tilte:"Affiliate"
    },
    {
        path: "/childpanel",
        file:<Childpanel/>,
        tilte:"Child Panel"
    },
    {
        path: "/settings",
        file:<Setting/>,
        tilte:"Setting"
    },
    {
        path: "/tickets/:id",
        file:<ViewTicket/>,
    },
]