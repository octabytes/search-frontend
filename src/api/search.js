import axios from "axios";

let apiURL;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  apiURL = "http://localhost:5000";
} else {
  apiURL = "https://search-api-dot-islamicnet.appspot.com/v1";
}

const API = axios.create({ baseURL: apiURL });

const SearchAPI = async (query) => {
  try {
    const response = await API.get(`/search/${query}`);
    return response.data;
  } catch (err) {
    console.error(err);
    return err.response.data;
  }
};

export default SearchAPI;
