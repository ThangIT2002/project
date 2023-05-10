// Lấy tất cả các thẻ li trong menu
const navItems = document.querySelectorAll(".nav-item");

// Lặp qua từng thẻ li và thêm sự kiện click vào chúng
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Xóa class clicked trên tất cả các thẻ li
    navItems.forEach((item) => {
      item.classList.remove("clicked");
    });

    // Thêm class clicked vào thẻ li vừa được click
    item.classList.add("clicked");
  });
});

// Lấy các phần tử cần sử dụng
const hocvienLink = document.getElementById("hocvien");
const cauhoiLink = document.getElementById("cauhoi");
const bangdiemLink = document.getElementById("bangdiem");
const modal = document.querySelector(".modal");

// Bắt sự kiện click trên các thẻ a và thêm nội dung tương ứng vào phần tử div.modal
hocvienLink.addEventListener("click", function (e) {
  e.preventDefault(); // Ngăn chặn trình duyệt chuyển đến đường dẫn trong href
  modal.innerHTML = ""; // Xóa nội dung cũ của div.modal
  fetch("modal/hocvien.html") // Lấy nội dung từ tệp hocvien.html
    .then((response) => response.text())
    .then((data) => {
      modal.innerHTML = data; // Thêm nội dung vào div.modal
    });
});

cauhoiLink.addEventListener("click", function (e) {
  e.preventDefault();
  modal.innerHTML = "";
  fetch("modal/cauhoi.html")
    .then((response) => response.text())
    .then((data) => {
      modal.innerHTML = data;
    });
});

bangdiemLink.addEventListener("click", function (e) {
  e.preventDefault();
  modal.innerHTML = "";
  fetch("modal/bangdiem.html")
    .then((response) => response.text())
    .then((data) => {
      modal.innerHTML = data;
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener("click", function (event) {
    if (event.target && event.target.id === "btn-detail") {
      fetch("/assets/modal/detail.html")
        .then((response) => response.text())
        .then((html) => {
          var modal = document.getElementById("modal");
          modal.innerHTML = html;
          modal.style.display = "block";
        });
    }
  });
});
