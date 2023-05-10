document.addEventListener("DOMContentLoaded", function () {
  var btnDetail = document.getElementById("btn-detail");
  btnDetail.addEventListener("click", function () {
    fetch("/assets/modal/detail.html")
      .then((response) => response.text())
      .then((html) => {
        var modal = document.getElementById("modal");
        modal.innerHTML = html;
        modal.style.display = "block";
      });
  });
});

function previewImg(event) {
  var selectedFile = event.target.files[0];
  var reader = new FileReader();
  var imgTag = document.getElementById("preview-img");

  reader.onload = function (event) {
    imgTag.src = event.target.result;
  };

  reader.readAsDataURL(selectedFile);
}
