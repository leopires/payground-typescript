import {readFileSync} from "fs";

const jsonFilePath = "/Users/leonardo/Temp/data.json";

function loadJSONSync(filePath:string): string {
    return JSON.parse(readFileSync(filePath).toString());
}

console.log(loadJSONSync(jsonFilePath));

try {
    console.log(loadJSONSync('invalid.json'));
} catch (er) {
    console.error('read error', er.message);
}
