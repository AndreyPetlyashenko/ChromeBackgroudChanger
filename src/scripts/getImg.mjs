import checkStatus from "./utils/checkStatus.mjs";
import photoBuilder from "./utils/photoBuilder.mjs";

export const getImgs = async (token) => {
  const searchResponse = await fetch(
    "https://photoslibrary.googleapis.com/v1/mediaItems:search",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ pageSize: 100 }),
    }
  );
  const result = await checkStatus(searchResponse);

  photoBuilder(result.mediaItems);

  console.log({
    result,
  });

  return result;
};
