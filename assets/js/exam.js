const answerTagWrap = document.querySelector(".answer-tag-wrap");
const numTags = 35; // Số lượng thẻ answer-tag cần in ra

for (let i = 1; i <= numTags; i++) {
  // Nếu i chia hết cho 3, thêm một div mới với class là answer-tag-row
  if (i % 3 === 1) {
    const answerTagRow = document.createElement("div");
    answerTagRow.className = "answer-tag-row";
    answerTagWrap.appendChild(answerTagRow);
  }

  // Thêm thẻ answer-tag vào div hiện tại (mới hoặc cũ)
  const answerTag = document.createElement("div");
  answerTag.className = "answer-tag";
  answerTag.innerHTML = `
    <div class="answer-tag-number"><span>${i}</span></div>
    <div class="answer-tag-content">
      <p>A</p>
      <p>B</p>
      <p>C</p>
      <p>D</p>
    </div>
    <div class="answer-tag-input">
      <input type="radio" name="answer-${i}" id="" />
      <input type="radio" name="answer-${i}" id="" />
      <input type="radio" name="answer-${i}" id="" />
      <input type="radio" name="answer-${i}" id="" />
    </div>
  `;
  const answerTagRow = answerTagWrap.lastElementChild;
  answerTagRow.appendChild(answerTag);
}

// // Đặt thời gian bắt đầu và thời gian kết thúc
// var startTime = new Date().getTime();
// var endTime = startTime + 18 * 60 * 1000; // 10 phút tính theo millisecond

// // Cập nhật thời gian đếm ngược sau mỗi giây
// var x = setInterval(function () {
//   // Lấy thời gian hiện tại
//   var now = new Date().getTime();

//   // Tính toán thời gian còn lại
//   var distance = endTime - now;

//   // Tính toán phút và giây còn lại
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Hiển thị thời gian còn lại trong thẻ span
//   document.getElementById("time").innerHTML =
//     minutes + " phút " + seconds + " giây ";

//   // Khi thời gian kết thúc, hiển thị thông báo và dừng đếm ngược
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("time").innerHTML = "Đã hết thời gian làm bài!";
//     alert("Đã hết thời gian làm bài!");
//   }
// }, 1000); // Cập nhật thời gian mỗi giây (tính theo millisecond)

// Đặt thời gian bắt đầu và thời gian kết thúc
// var startTime = new Date().getTime();
// var endTime = startTime + 1 * 60 * 1000; // 10 phút tính theo millisecond

// // Cập nhật thời gian đếm ngược sau mỗi giây
// var x = setInterval(function () {
//   // Lấy thời gian hiện tại
//   var now = new Date().getTime();

//   // Tính toán thời gian còn lại
//   var distance = endTime - now;

//   // Tính toán phần trăm đã qua
//   var percent = (1 - distance / (10 * 60 * 1000)) * 100;

//   // Hiển thị thời gian còn lại và phần trăm đã qua trong thẻ span
//   document.getElementById("time").innerHTML = formatTime(distance);
//   document.getElementById("percent").innerHTML = percent.toFixed(0) + "%";

//   // Khi thời gian kết thúc, hiển thị thông báo và dừng đếm ngược
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("time").innerHTML = "Đã hết thời gian làm bài!";
//     document.getElementById("percent").innerHTML = "100.00%";
//     alert("Đã hết thời gian làm bài!");
//   }
// }, 1000); // Cập nhật thời gian mỗi giây (tính theo millisecond)

// // Hàm chuyển đổi thời gian sang định dạng phút và giây
// function formatTime(time) {
//   var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((time % (1000 * 60)) / 1000);
//   return minutes + " phút " + seconds + " giây ";
// }
