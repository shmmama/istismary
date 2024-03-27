import React from "react";
import Rooms from "./Rooms";
import CommonRooms from "./CommonRooms";
import MyRooms from "./MyRooms";

function LayoutThirdSection() {
  return (
    <div>
      <Rooms />
      <div className="mt-5">
        <CommonRooms />
      </div>
      <div className="mt-5">
        <MyRooms />
      </div>
    </div>
  );
}

export default LayoutThirdSection;
