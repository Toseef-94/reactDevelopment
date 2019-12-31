
const authApi = {
    login
}

async function login(email, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  };
  const url = 'http://127.0.0.1:8000/api/login/';
  const response = await fetch(url, requestOptions);
  const user = await handleResponse(response);
  return user;
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      // const error = (data && data.message) || response.statusText;
      return Promise.reject(data);
    }
    return data;
  });
}

export default authApi;
