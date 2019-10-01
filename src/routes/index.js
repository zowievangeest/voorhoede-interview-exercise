const Home = () => import("../views/Home");
const About = () => import("../views/About");

export default [
  {
    path: "/",
    name: "home",
    component: Home,
    children: [
      {
        path: "about",
        name: "about",
        component: About
      }
    ]
  },
  {
    path: "*",
    redirect: "/"
  }
];
