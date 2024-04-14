import {getAuthenticationOptions, getAuthenticationOptionsWithBody} from "./helper";
import { Backend } from "./helper";


export async function getUserDetails() {
    const options = await getAuthenticationOptions();
    const res = await fetch(`${Backend}/user/getUserDetails`, options);
    const data = await res.json(); // Parse the response to get the data
    return data;
  }

export async function setUserDetails(name, DoB, desc,gender) {
    const body = {
        name: name,
        dob: DoB,
        description: desc,
        gender: gender,
      };
    const options = await getAuthenticationOptionsWithBody(body);
    const res = await fetch(`${Backend}/user/addUserDetails`, options);
  }

  export async function setUserPreferences(City, MaxPeople, maxPrice,MinPrice,gender) {
    const body = {
        maxPrice: maxPrice,
        minPrice: MinPrice,
        maxHousemates: MaxPeople,
        gender: gender,
        city: City,
      };
    const options = await getAuthenticationOptionsWithBody(body);
    const res = await fetch(`${Backend}/Preferences/setPreferences`, options);
  }
  export async function getSimilarStudents() {
    const options = await getAuthenticationOptions();
    const res = await fetch(`${Backend}/Preferences/getSimilarStudents`, options);
    const data = await res.json(); // Parse the response to get the data
    return data;
  }

  export async function getHouses() {
    const options = await getAuthenticationOptions();
    const res = await fetch(`${Backend}/zoopla/getPropertiesDetailsJSON`, options);
    const data = await res.json(); // Parse the response to get the data
    return data;
  }

