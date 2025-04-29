import Login from "./components/Login";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGoogle,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import OrderConfirmation from "./components/Ordersucefull";

library.add(faGoogle, faFacebook, faInstagram);

function App() {
  return (
    <>
      {/* <Login /> */}
      <OrderConfirmation />
    </>
  );
}

export default App;
