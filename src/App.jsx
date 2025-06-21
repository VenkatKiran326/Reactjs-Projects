import React from "react";
import "./App.css";
import Landingpage from "./stores/pages/Landingpage";
import { Routes, Route } from "react-router-dom";
import Kitchen from "./stores/components/Kitchen";
import { Men } from "./stores/components/Men";
import Mobilepage from "./stores/pages/Mobilepage";
import Watchespage from "./stores/pages/Watchespage";
import Bookspage from "./stores/pages/Bookspage";
import Computerpage from "./stores/pages/Computerpage";
import Womanpage from "./stores/pages/Womanpage";
import Airconditonerpage from "./stores/pages/Airconditonerpage";
import Fridgepage from "./stores/pages/Fridgepage";
import MobileSingle from "./stores/singles/MobileSingle";
import WatchesSingle from "./stores/singles/WatchesSingle";
import Usercart from "./stores/singles/Usercart";
import MenSingle from "./stores/singles/MenSingle";
import BooksSingle from "./stores/singles/BooksSingle";
import Menpage from "./stores/pages/Menpage";
import Kitchenpage from "./stores/pages/Kitchenpage";
import ComputerSingle from "./stores/singles/ComputerSingle";
import KitchenSingle from "./stores/singles/KitchenSingle";
import WomanSingle from "./stores/singles/WomanSingle";
//import FridgeSingle from "./stores/singles/FridgeSingle";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/mobiles" element={<Mobilepage />} />
        <Route path="/watches" element={<Watchespage />} />
        <Route path="/books" element={<Bookspage />} />
        <Route path="/computers" element={<Computerpage />} />
        <Route path="/kitchen" element={<Kitchenpage />} />
        <Route path="/men" element={<Menpage />} />
        <Route path="/woman" element={<Womanpage />} />
        <Route path="/fridge" element={<Fridgepage />} />
        <Route path="/ac" element={<Airconditonerpage />} />

        {/* dynamic routing  to open each product seperately*/}
        <Route path="/mobiles/:id" element={<MobileSingle />} />
        <Route path="/watch/:id" element={<WatchesSingle />} />
        <Route path="/men/:id" element={<MenSingle />} />
        <Route path="/books/:id" element={<BooksSingle />} />
        <Route path="/computers/:id" element={<ComputerSingle />} />
        <Route path="/kitchen/:id" element={<KitchenSingle />} />
        <Route path="/woman/:id" element={<WomanSingle />} />
        {/* <Route path="/fridge/:id" element={<FridgeSingle />} /> */}

        <Route path="/cart" element={<Usercart />} />
      </Routes>
    </div>
  );
}

export default App;
