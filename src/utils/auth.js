import Cookie from 'js-cookie';

const TokenKey = 'biancheng_admin_token';

export function getToken() {
  return Cookie.get(TokenKey);
}

export function setToken(data) {
  return Cookie.set(TokenKey, data);
}

export function removeToken() {
  return Cookie.remove(TokenKey);
}