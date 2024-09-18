export const setCookie = (name, value, days = 1) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);

  document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/; Secure; SameSite=Lax`;
};

export const getCookie = (name) => {
  const cookies = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));

  return cookies ? cookies.split("=")[1] : null;
};

export const deleteCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; Secure; SameSite=Lax`;
};
