import React, { useState } from "react";
import Icons from "../assets/svgs";

function PriorityDisplay() {
  const { FireIcon } = Icons;
  return (
    <div className="flex gap-1">
      <FireIcon />
      <FireIcon />
      <FireIcon />
      <FireIcon />
      <FireIcon />
    </div>
  );
}

export default PriorityDisplay;
