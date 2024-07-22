let body = document.getElementById("body");

function my() {
  let color2 = document.getElementById("color2").value;
  let color1 = document.getElementById("color1").value;
  body.style.background = "linear-gradient(to right, "
  + color1
  + ", "
  + color2
  + ")";
  // console.log(color1);
  // console.log(color2);
}
color1.addEventListener("input", my);
color2.addEventListener("input", my);