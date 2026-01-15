onload = () =>{
        document.body.classList.remove("container");
};
const messages = [
  "Chúc cậu một ngày thật tuyệt vời 🌸",
  "Mong mọi điều tốt đẹp sẽ đến với cậu ✨",
  "Luôn mỉm cười và hạnh phúc nhé 💖"
];

let index = 0;
const textEl = document.querySelector(".wish-text");

// hiện chữ sau 3 giây
setTimeout(() => {
  textEl.style.opacity = "1";
  textEl.textContent = messages[index];
}, 3000);

// đổi câu chúc mỗi 4 giây
setInterval(() => {
  index = (index + 1) % messages.length;
  textEl.textContent = messages[index];
}, 4000);

