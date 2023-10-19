let randomCode;

const changeColor = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  randomCode = "#" + randomNumber.toString(16);
  document.body.style.backgroundColor = randomCode;
  document.getElementById("colorCode").innerText = randomCode;
};

function copyToClipboard() {
  if (randomCode) {
    navigator.clipboard
      .writeText(randomCode)
      .then(() => {
        document.getElementById("copy_btn").innerText = "copied";
        setTimeout(() => {
          document.getElementById("copy_btn").innerText = "copy";
        }, 2000);
      })
      .catch((error) => {
        console.error("Copy to clipboard failed:", error);
      });
  }
}

let btn = document.getElementById("btn");
let copy_btn = document.getElementById("copy_btn");
btn.addEventListener("click", changeColor); // Change background color
copy_btn.addEventListener("click", copyToClipboard); // Copy color code

changeColor();
