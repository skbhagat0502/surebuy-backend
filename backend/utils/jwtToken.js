// Create Token and saving in cookie
import { COOKIE_EXPIRE, NODE_ENV, ORIGIN } from "../constants.js";
const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();
  // options for cookie
  const options = {
    expires: new Date(Date.now() + COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: true,
    domain: ORIGIN,
    sameSite: NODE_ENV === "PRODUCTION",
    secure: NODE_ENV === "PRODUCTION",
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

export default sendToken;
