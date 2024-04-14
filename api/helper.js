import {auth} from '../config/firebase'

export const Backend = "http://172.26.95.183:5000";

export async function getAuthenticationOptions() {
  const user = auth.currentUser;
  let token = null;
  if (user) {
    token = await user.getIdToken();
  }
  return {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }
}

export async function getAuthenticationOptionsWithBody(body) {
    const user = auth.currentUser;
    let token = null;
    if (user) {
      token = await user.getIdToken();
    }
    return {
      method: "POST",
      headers: {
        accept: 'application/json',
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }