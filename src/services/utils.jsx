export const fetchUrl = async (url, method, body) => {
  if (method === 'GET') {
    const res = await fetch(url, {
      // mode: 'no-cors',
      // headers: {
      //   'Content-Type': 'application/json; charset=UTF-8',
      // },
    });
    const json = await res.json();
    return json
  }
  try {
    const response = await fetch(url, {
      method,
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });
    const json = await response.json();
    return JSON.stringify(json);
  } catch (err) {
    console.log(error);
  }
};
