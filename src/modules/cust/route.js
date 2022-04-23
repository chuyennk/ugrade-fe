const Module = () => import("./Module.vue")
const Home = () => import("./views/CustSearch.vue")
const CustInfo = () => import("./views/CustInfo.vue")

const route = {
  path: "/cust",
  component: Module,
  children: [
    {
      path: "",
      component: Home,
      name: "Search"
    },
    {
      path: "info",
      name: "CustInfo",
      component: CustInfo
    }
  ]
};

export default route

