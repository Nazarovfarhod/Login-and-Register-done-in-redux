import { useSelector } from "react-redux";

import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfige";
import toast from "react-hot-toast";

const style = {
  img: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
  },
  container: {
    width: "100%",
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0",
  },
  btn: {
    backgroundColor: "red",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

function Home() {
  const { user } = useSelector((state) => state.user);

  const signOutProfile = async () => {
    await signOut(auth);
    toast.success("See you soon!");
  };

  return (
    <div style={style.container}>
      <img style={style.img} src={user.photoURL} alt="" />
      <h1>Name: {user.displayName}</h1>
      <p>Email: {user.email}</p>
      <button onClick={signOutProfile} style={style.btn} type="button">
        Log Out
      </button>
    </div>
  );
}

export default Home;
