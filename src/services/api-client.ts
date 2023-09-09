import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f2891b1c2ae541cc9666d8e4c7ac0a0b",
  },
});
