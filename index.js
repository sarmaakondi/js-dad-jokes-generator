const jokeElement = document.getElementById("joke");
const jokeButtonElement = document.getElementById("joke-button");

async function generateJoke() {
  const config = { headers: { Accept: "application/json" } };
  try {
    const response = await fetch("https://icanhazdadjoke.com/", config);
    if (!response.ok) {
      alert(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    jokeElement.textContent = data.joke;
  } catch (error) {
    console.error("Error occurred during getting a joke:", error);
    jokeElement.textContent =
      "There was an error getting a joke. Please try again later.";
  }
}

generateJoke();
jokeButtonElement.addEventListener("click", generateJoke);
