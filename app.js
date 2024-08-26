const api = "https://api.adviceslip.com/advice";
const text = document.getElementById("text");
const button = document.getElementById("button");
const id = document.getElementById("id");

button.addEventListener("click", () => {
  const getData = async () => {
    try {
      const response = await fetch(api);
      const data = await response.json();
      console.log(data.slip.advice);
      text.textContent = data.slip.advice;
      id.textContent = data.slip.id;
    } catch (error) {
      console.log(error);
    }
  };

  getData();
});
