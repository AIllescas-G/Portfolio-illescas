import React from "react";
import LayoutLeft from "../componets/Layout/LayoutLeft";
import LayoutRight from "../componets/Layout/LayoutRight";


export default function Home() {
  return (
    <div className="container">
      <div className="home-layout">
        <LayoutLeft />
        <LayoutRight />
      </div>
    </div>
  );
}
