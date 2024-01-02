import ReactDOM from "react-dom/client";
import { Route } from "react-router-dom";
import Aviation from "./pages/aviation";
import Contact from "./pages/contact";
import Home from "./pages/home";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement );

root.render(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/aviation" element={<Aviation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
);
