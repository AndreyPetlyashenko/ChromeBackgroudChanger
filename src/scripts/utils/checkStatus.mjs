export default async function checkStatus(response) {
  if (!response.ok) {
    let message = "";
    try {
      message = await response.json();
    } catch (err) {
      console.log({err})
    }
    throw new StatusError(response.status, response.statusText, message);
  }
  return await response.json();
}
