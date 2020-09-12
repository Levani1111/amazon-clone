import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-clone-34dd8.cloudfunctions.net/api"
});

export default instance;



// "http://localhost:5001/clone-34dd8/us-central1/api";
