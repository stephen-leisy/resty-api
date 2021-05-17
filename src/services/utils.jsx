export const fetchUrl = async (url, method, body) => {
  if (method === 'GET') {
    const res = await fetch(url, {});
    const json = await res.json();
    return json;
  }
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });
  const json = await response.json();
  return json;
};
