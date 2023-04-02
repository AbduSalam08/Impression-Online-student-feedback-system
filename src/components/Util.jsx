import React, { useEffect, useState } from "react";
import FeedbackForm from "./Student/FeedbackForm";

/**
 * @author K. Abdul Salam
 * @param {DOM} password
 * @param {Input type} type
 * @description Its a util function to handle password on hide/show
 * @returns Input type
 */

const handlePwd = (password) => {
  //manual hide
  return password.type == "password" ? "text" : "password";

  //auto hide
  // password.setAttribute(type, "text");
  // setTimeout(() => {
  //   password.setAttribute(type, "password");
  // }, 2000);
};
export { handlePwd };
