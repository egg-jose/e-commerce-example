import { Outlet } from "react-router";
import categories from "../../assets/categories";
import Directory from "../../components/Directory/Directory";

const Home = () => {
  return (
    <>
      <Directory categories={categories} />
      <Outlet />
    </>
  );
};

export default Home;
