import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9d750ced22024cf7aaab5b5217132b0b",
  },
});
