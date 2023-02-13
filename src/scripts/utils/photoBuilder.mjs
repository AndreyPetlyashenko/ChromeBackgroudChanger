export default function (photos) {
  const images = photos.map((photo) => {
    const img = document.createElement("img");
    const li = document.createElement("li");
    li.classList.add('photo_card_item')
    img.src = photo.baseUrl;
    img.alt = photo.filename;
    li.appendChild(img);
    return li;
  });
  document.querySelector("#photo_list").append(...images);
}
