import axios from "axios";
import { error } from "console";
const fetcher = (url: string) =>
  axios
    .get(url)
    .then((res) => res.data)
    .catch((error) => console.log(error));
export default fetcher;
