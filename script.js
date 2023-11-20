"use strict";

async function getData() {
  const url = "https://programming-memes-images.p.rapidapi.com/v1/memes";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2c86ee7316mshe58b4540065cec6p150bb6jsn8fa570e2a118",
      "X-RapidAPI-Host": "programming-memes-images.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);

    const result = await response.json();

    // making or selecting the button and its  function.
    let memeBtnEl = document.querySelector("#memeBtn");
    memeBtnEl.addEventListener("click", function () {
      let dayMemeEl = document.querySelector("#dayMeme");
      dayMemeEl.textContent = result[0].text;

      // Displays the <img> in the html.
      let memeImageEl = document.querySelector("#memeImage");
      memeImageEl.src = result[0].image;
      memeImageEl.alt = "Programming Meme";
    });
  } catch (error) {
    console.error(error);
  }
}

getData();
