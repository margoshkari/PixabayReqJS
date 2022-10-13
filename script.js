var carousel = document.getElementById("carouselinner");
var input = document.getElementById("keyword");
var url =
  "https://pixabay.com/api/?key=18092743-c6624b09a26fd86824b499689&q=&image_type=photo";

document.addEventListener("DOMContentLoaded", () => {
  fetch(url, {
    method: "GET",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      CreateElem(result.hits);
    });
});
function CreateElem(data) {
  for (let index = 0; index < data.length; index++) {
    var item = document.createElement("div");
    if (index == 0) {
      item.className = "carousel-item active";
    } else {
      item.className = "carousel-item";
    }

    var image = document.createElement("img");
    image.className = "d-block w-100";
    image.src = data[index].previewURL;

    item.appendChild(image);
    carousel.appendChild(item);
  }
}

function SearchImage(data) {
  var images = document.getElementsByClassName("d-block w-100");
  for (let index = 0; index < images.length; index++) {
    images[index].src = data[index].previewURL;
  }
}

function RequestImage() {
  url = `https://pixabay.com/api/?key=18092743-c6624b09a26fd86824b499689&q=${input.value}&image_type=photo`;
  fetch(url, {
    method: "GET",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      SearchImage(result.hits);
    });
}
