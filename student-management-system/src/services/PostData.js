import axios from "axios";

export function PostData(type, userData) {
  let BaseUrl = "http://127.0.0.1:8000/api/";

  return new Promise((resolve, reject) => {
     
    return axios
      .post(BaseUrl + type, {
        email: userData.email,
        password: userData.password
      })
      .then(response => {
          resolve(response);
      })
      .catch(error => {
        console.log(error);
      });
  });
}
