import axios from "axios";
import { API_KEY } from "../config/appConfig";

function GetApiHandler(url, method) {
  return axios({
    url: url,
    method: method,
    headers: { "X-Api-Key": API_KEY },
  })
    .then(function (res) {
      return res;
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
}

export { GetApiHandler };
