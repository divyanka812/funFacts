import axios from "axios";

function GetApiHandler(url, method) {
  return axios({
    url: url,
    method: method,
    referrerPolicy: "unsafe_url" 
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
