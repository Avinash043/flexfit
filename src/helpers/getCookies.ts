import Cookies from "js-cookie";

export function getTokenFromCookies () {
    const token = Cookies.get('token');
    console.log(token);
    if(token)
        return token;

    return null;
}