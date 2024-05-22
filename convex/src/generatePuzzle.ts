//import { fileURLToPath } from "url";
import dotenv from 'dotenv';
dotenv.config();


import {
    BedrockRuntimeClient,
    InvokeModelCommand
    //ListFoundationModelsCommand,
} from "@aws-sdk/client-bedrock-runtime";

console.log(process.env.SECRET_ACCESS_KEY);

const REGION = "us-west-2";
const client = new BedrockRuntimeClient({
    region: REGION,
    credentials: {
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? "",
        accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? "",
        sessionToken: process.env.AWS_SESSION_TOKEN ?? ""
    }
});


const scenario_prompt = `
Define, in terms a young child would understand, what the meaning of life is. You should answer by using a short story as an example.
`;

const input = {
    modelId: "meta.llama3-70b-instruct-v1:0",
    contentType: "application/json",
    accept: "application/json",
    body: JSON.stringify({
        prompt: prompt,
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