import Cookies from "js-cookie";

const SetCookies = (cookieName, userIn) => {
  Cookies.set(cookieName, userIn, {
    expires: 7, // cookie will expire after 7 days
    secure: true,
    sameSite: 'strict',
    path: '/',

  });
};

export default SetCookies;