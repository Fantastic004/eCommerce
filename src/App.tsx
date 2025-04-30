import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGoogle,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Login from "./components/Login";

library.add(faGoogle, faFacebook, faInstagram);

function App() {
  return (
    <>
      <Login />
    </>
  );
}

export default App;
