const { Client } = require("@gradio/client");

// Connect to the client
async function connectClient() {
    return await Client.connect("KingNish/OpenGPT-4o");
}

// Call /lambda endpoint
async function callLambda(client) {
    const result = await client.predict("/lambda", {
        selection: "Greedy",
    });

    console.log("Lambda Result:", result.data);
}

// Call /lambda_1 endpoint
async function callLambda1(client) {
    const result = await client.predict("/lambda_1", {
        selection: "Greedy",
    });

    console.log("Lambda_1 Result:", result.data);
}

// Call /chat endpoint
async function chat(client, userPrompt) {
    const result = await client.predict("/chat", {
        user_prompt: { text: userPrompt, files: [] },
        model_selector: "idefics2-8b-chatty",
        decoding_strategy: "Greedy",
        temperature: 0,
        max_new_tokens: 2048,
        repetition_penalty: 0.01,
        top_p: 0.01,
        web_search: true,
    });

    console.log("Chat Result:", result.data);
}

// Call /predict endpoint
async function predict(client) {
    const response = await fetch("https://github.com/gradio-app/gradio/raw/main/test/test_files/audio_sample.wav");
    const exampleAudio = await response.blob();

    const result = await client.predict("/predict", {
        audio: exampleAudio,
        web_search: true,
    });

    console.log("Predict Result:", result.data);
}

// Call /predict_1 endpoint
async function predict1(client) {
    const response = await fetch("https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png");
    const exampleImage = await response.blob();

    const result = await client.predict("/predict_1", {
        image3: exampleImage,
        prompt3: "Hello!!",
    });

    console.log("Predict_1 Result:", result.data);
}

// Main function to execute all API calls
async function main() {
    const client = await connectClient();
    
    // Uncomment the function you want to call
    // await callLambda(client);
    // await callLambda1(client);
    
    // For chat endpoint, provide a user prompt
    const prompt = require('prompt-sync')();
    const userInput = prompt("Input your prompt for chat: ");
    await chat(client, userInput);

    // await predict(client);
    // await predict1(client);
}

main();
