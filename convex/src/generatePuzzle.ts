//import { fileURLToPath } from "url";
import dotenv from 'dotenv';
dotenv.config();


import {
    BedrockRuntimeClient,
    InvokeModelCommand
    //ListFoundationModelsCommand,
} from "@aws-sdk/client-bedrock-runtime";


const REGION = "us-west-2";
const client = new BedrockRuntimeClient({
    region: REGION,
    credentials: {
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? "",
        accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? "",
        sessionToken: process.env.AWS_SESSION_TOKEN ?? ""
    }
});


// const scenario_prompt = `
// Generate a text adventure game prompt in JSON format, where the user starts by waking up to an unusual situation. The user should be presented with only two choices. The game should be solvable in 4 steps, with up to two possible winning paths. Each step should lead to a new scenario based on the user's choice. If the user makes a choice that leads to an unsolvable path, indicate that the game is over.

// The JSON response should have the following structure:
// {
//   "step": 1,
//   "description": "Initial scenario description",
//   "choices": [
//     {"id": "choice1", "description": "Choice 1 description"},
//     {"id": "choice2", "description": "Choice 2 description"}
//   ]
// }

// Each subsequent step should be represented in a similar JSON structure, with the "step" number incrementing accordingly. If a user reaches a dead end, the response should be:
// {
//   "game_over": true,
//   "description": "Game over message"
// }

// Return the entire game tree in a single JSON response, with each step nested inside the "next_step" property of the previous step.
// `;

const scenario_prompt = `generate a text adventure with a scenario where the dev is at a hackathon and 
something unexpected happens, like killer robots attacking the venue. The dev has to make choices to survive 
and escape the situation.`

const input = {
    modelId: "meta.llama3-70b-instruct-v1:0",
    contentType: "application/json",
    accept: "application/json",
    body: JSON.stringify({
        prompt: scenario_prompt,
        max_gen_len: 512,
        temperature: 0.5,
        top_p: 0.9
    })
};

const command = new InvokeModelCommand(input);
const resp = await client.send(command);
//console.log(resp);

const decodedResponseBody = JSON.parse(new TextDecoder().decode(resp.body));
console.log(decodedResponseBody);
console.log('-'.repeat(80));
console.log(decodedResponseBody.results[0].outputText);