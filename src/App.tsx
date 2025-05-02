import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGoogle,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Login from "./components/Login";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "./components/store/Store";
import { login } from "./components/store/AuthSlice";

library.add(faGoogle, faFacebook, faInstagram);

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const user = JSON.parse(storedUser);
      dispatch(login(user));
    }

    if (isLoggedIn) {
      navigate("/home");
    }
  }, [dispatch, isLoggedIn, navigate]);

  return (
    <>
      <Login />
    </>
  );
}

export default App;
