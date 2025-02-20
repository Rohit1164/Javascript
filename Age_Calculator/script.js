document.querySelector("button").addEventListener("click", () => {
  const userInput = document.querySelector("input").value.trim();
  const text = document.querySelector("h2");

  if (!userInput) {
    text.innerHTML = "⚠️ Please enter a valid number";
    return;
  }

  const birthDate = new Date(userInput);
  const currDate = new Date();

  let year = currDate.getFullYear() - birthDate.getFullYear();
  const month = birthDate.getMonth() - currDate.getMonth();
  const day = currDate.getDate() - birthDate.getDate();

  if (month < 0 || (month === 0 && day < 0)) {
    year--;
  }

  text.innerHTML = `🎉 You are Year <strong>${year}</strong> , Month <strong>${month}</strong> and  Days <strong>${day}</strong> years old!`;
});
