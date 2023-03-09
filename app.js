window.addEventListener("click", (a) => {
  const myDiv = document.createElement("div");
  document.body.appendChild(myDiv);
  myDiv.style.position = "absolute";
  myDiv.style.left = `${a.clientX - 15}px`;
  myDiv.style.top = `${a.clientY - 15}px`;
});
