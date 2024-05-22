import { action } from "../_generated/server";
import { generateScenario } from "../../amazon-bedrock/generatePuzzle";

export const doSomething = action({
    args: {},
    handler: async () => {
        const data = await generateScenario;
        // do something with data
    },
});