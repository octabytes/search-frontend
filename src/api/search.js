import axios from "axios";

let apiURL;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  apiURL = "http://localhost:5000";
}

const API = axios.create({ baseURL: apiURL });

const SearchAPI = async (query) => {
  try {
    const response = await API.get(`/query/${query}`);
    return response.data;
  } catch (err) {
    console.error(err);
    return err.response.data;
  }
};

export default SearchAPI;
