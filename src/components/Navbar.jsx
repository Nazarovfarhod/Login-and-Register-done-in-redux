import { useSelector } from "react-redux";
import { Flex, Menu, Typography } from "antd";
import { Link } from "react-router-dom";
const { Title } = Typography;




const items = [
  {
    key: "grp",
    type: "group",
    children: [
      {
        key: "1",
        label: <Link to="/">Home</Link>,
      },
      {
        key: "2",
        label: <Link to="/about">About</Link>,
      },
      {
        key: "3",
        label: (
          <Link to="/contact">
            Orders 
          </Link>
        ),
      },
    ],
  },
];

import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfige";
import toast from "react-hot-toast";

const style = {
  img: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  },
  btn: {
    backgroundColor: "#e0a69d",
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    padding: "10px 20px",
    fontSize: "12px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    color: "black",
    fontWeight: "bold",
  },
};

const Navbar = () => {
  const { user, TotalProduct } = useSelector((state) => state.user);

  const signOutProfile = async () => {
    await signOut(auth);
    toast.success("See you soon!");
  };

  return (
    <Flex
      vertical
      style={{
        backgroundColor: "#c3e2f1",
        height: "100vh",
        paddingTop: "10px",
        position: "sticky",
        top: 0,
        zIndex: 100,
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%", textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            justifyContent: "center",
          }}
        >
          <span>
            <img style={style.img} src={user.photoURL} alt="" />
          </span>
          <span>
            <button onClick={signOutProfile} style={style.btn} type="button">
              Log Out
            </button>
          </span>
        </div>
        <br />
        <p
          style={{
            width: "100%",
            textAlign: "center",
            textTransform: "capitalize",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          {user.displayName}
        </p>
        <p style={{ width: "100%", textAlign: "center", fontSize: "10px" }}>
          {user.email}
        </p>
        <br />
        <Typography>
          <Title
            level={4}
            style={{
              textAlign: "center",
              fontWeight: "bold",
              letterSpacing: "3px",
            }}
          >
            My Store
          </Title>
        </Typography>
      </div>
      <Menu
        style={{
          width: "100%",
          backgroundColor: "#c3e2f1",
          letterSpacing: "2px",
          textAlign: "center",
        }}
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
      />
    </Flex>
  );
};

export default Navbar;
