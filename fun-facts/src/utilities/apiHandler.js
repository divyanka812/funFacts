import axios from "axios";

function GetApiHandler(url, method) {
  return axios({
    url: url,
    method: method,
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
