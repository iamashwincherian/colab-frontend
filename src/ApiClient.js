import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://colab-pm-api.herokuapp.com/api"
    : "http://localhost:4000/api";

const ApiClient = axios.create({ baseURL });

export default ApiClient;
