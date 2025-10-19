import React from "react";
import moment from "moment";

const TimeAndData = () => {
  const today = moment().format("dddd, MMMM D, YYYY");
  return <h2 className="font-semibold">{today}</h2>;
};

export default TimeAndData;