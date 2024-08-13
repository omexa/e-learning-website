"use client";
import React, { useState } from "react";
import Navbr from "./Navbr";
import MobileNav from "./MobileNav";

function ResponsiveNav() {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const hideNavHandler = () => setShowNav(false);
  return (
    <div>
      <Navbr openNav={showNavHandler} />

      <MobileNav showNav={showNav} closeNav={hideNavHandler} />
    </div>
  );
}

export default ResponsiveNav;
