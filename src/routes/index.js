const Home = () => import("../views/Home");
const Blog = () => import("../views/Blog");
const BlogPost = () => import("../views/BlogPost");

export default [
  {
    path: "/",
    name: "home",
    component: Home,
    redirect: "/blog",
    children: [
      {
        path: "blog",
        name: "blog",
        component: Blog
      },
      {
        path: "blog/:slug",
        name: "blogPost",
        component: BlogPost
      }
    ]
  },
  {
    path: "*",
    redirect: "/"
  }
];
