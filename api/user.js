import {getAuthenticationOptions, getAuthenticationOptionsWithBody} from "./helper";
import { Backend } from "./helper";


export async function getUserDetails() {
    const options = await getAuthenticationOptions();
    const res = await fetch(`${Backend}/user/getUserDetails`, options);
    return await res.json();
  }

export async function setUserDetails() {
    const options = await getAuthenticationOptionsWithBody({body});
    const res = await fetch(`${Backend}/user/getUserDetails`, options);
    return await res.json();
  }