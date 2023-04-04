import axios from "axios";
/// මේ service module එකෙන් default export කරන්නෙ පහල එක. මේ module එකට කොහෙදි හරි
/// කෝල් කලොත්(ඕන නමක් දීල) එන්නෙ පහල එක.
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c553282938bb48da8173fc7b87dcfa09",
  },
});
