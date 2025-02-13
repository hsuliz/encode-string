import * as core from "@actions/core";

const encode = (str: string): string =>
  Buffer.from(str, "binary").toString("base64");

try {
  const stringToEncode = core.getInput("string-to-encode");
  const encodedString = encode(stringToEncode);
  core.info(`Encoded string: ${encodedString}}`);
  core.setOutput("encoded-string", encodedString);
} catch (error) {
  core.setFailed((error as Error).message);
}
