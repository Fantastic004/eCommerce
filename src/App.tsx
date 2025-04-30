import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGoogle,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Products from "./components/Products";


library.add(faGoogle, faFacebook, faInstagram);

function App() {
  return (
    <>   
    <Products/>  
    </>
  );
}

export default App;
