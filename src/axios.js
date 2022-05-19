import axios from "axios";

const instance = axios.create({
  baseURL: "https://hi-learn-299ac-default-rtdb.asia-southeast1.firebasedatabase.app/"
});

export default instance;
