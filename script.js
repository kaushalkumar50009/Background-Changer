const changeColor = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  //   console.log(randomNumber);

  const randomCode = "#" + randomNumber.toString(16);
  //   console.log(randomCode);

  document.body.style.backgroundColor = randomCode;

  document.getElementById("colorCode").innerText = randomCode;

  navigator.clipboard.writeText(randomCode);
};

let btn = document.getElementById("btn");
btn.addEventListener("click", changeColor);

changeColor();
