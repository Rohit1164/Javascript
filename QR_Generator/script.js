document.querySelector("#generateBtn").addEventListener("click", () => {
  const userInput = document.querySelector("#userInput").value.trim();
  const img = document.querySelector("#qrImage");
  const errorMsg = document.querySelector("#errorMsg");

  if (userInput === "") {
    errorMsg.classList.remove("hidden");
  } else {
    errorMsg.classList.add("hidden");
    img.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      encodeURIComponent(userInput);
    img.alt = userInput;
  }
});
