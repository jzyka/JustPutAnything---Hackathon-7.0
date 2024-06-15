import OpenAI from "openai";

const openai = new OpenAI({
    "apiKey" : "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"
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo-1106",
  });

  console.log(completion.choices[0]);
}

main();


