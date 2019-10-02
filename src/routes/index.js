const Home = () => import("../views/Home");
const Blog = () => import("../views/Blog");

export default [
  {
    path: "/",
    name: "home",
    component: Home,
    children: [
      {
        path: "blog",
        name: "blog",
        component: Blog
      }
    ]
  },
  {
    path: "*",
    redirect: "/"
  }
];
