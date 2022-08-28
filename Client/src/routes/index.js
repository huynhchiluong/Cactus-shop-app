import AboutUs from "pages/AboutUs";
import ContactUs from "pages/ContactUs";
import Home from "pages/Home";
import Products from "pages/Products";

// Public routes
const publicRoutes = [
  { path: "/", component: <Home /> },
  { path: "/products", component: <Products /> },
  { path: "/aboutus", component: <AboutUs /> },
  { path: "/contact", component: <ContactUs /> },
  { path: "/login", component: <ContactUs /> },
];

//Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
