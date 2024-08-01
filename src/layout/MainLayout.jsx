//rrd imports
import { Outlet } from "react-router-dom";
//components
import Navbar from "../components/Navbar";
import { Flex } from "antd";

const style = {
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

function MainLayout() {
  return (
    <Flex gap={30}>
      <header>
        <Navbar />
      </header>
      <main style={style.container}>
        <Outlet />
      </main>
      <footer></footer>
    </Flex>
  );
}

export default MainLayout;
