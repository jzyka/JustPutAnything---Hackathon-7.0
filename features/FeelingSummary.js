// ini api dua duanya buat akses api dari model yang ada di hugging face,
const API_TOKEN = "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";
const API_URL =
  "https://api-inference.huggingface.co/models/borisn70/bert-28-feelings";

async function recognizeFeeling(prompt) {
  // ya sepanjang ini promptnya sih
  const headers = {
    // ini cuman method gausah dipikirin
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  };

  const payload = JSON.stringify({
    inputs: prompt,
  });

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: headers,
      body: payload,
    });

    if (response.ok) {
      const jsonResponse = await response.json();
      console.log("Response:", jsonResponse);
      module.exports = { jsonResponse };
    } else {
      console.error("Error:", response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

const prompt = require("prompt-sync")();
const userInput = prompt("Input your prompt: ");
recognizeFeeling(userInput);
