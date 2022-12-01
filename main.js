setInterval(() => {
  let color = Math.floor(Math.random() * 900000) + 100;
  document.body.style.backgroundColor = `#${color}`;
}, 1000);
setInterval(() => {
  let imageElement = document.querySelector("img");
  let src = imageElement.getAttribute("src");
  if (src === "./ONbulb.jpg") {
    imageElement.setAttribute("src", "./OFFbulb.jpg");
  } else {
    imageElement.setAttribute("src", "./ONbulb.jpg");
  }
}, 1000);

