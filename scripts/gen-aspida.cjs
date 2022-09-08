// $ npx openapi2aspida -i=openApi/sample.yaml -o=lib/api/sample

const fetch = require("node-fetch");
const fs = require("fs").promises;
const { execSync } = require("child_process");
// const addApis = require("./add-apis.cjs");
require("dotenv").config({ path: ".env.local" });

const URL =
  "https://github.com/hey-intern-2022-coffee/hey-intern-serverside/blob/main/swagger.yml";
const SWAGGER_DIR = "scripts/bin";
const SWAGGER_PATH = SWAGGER_DIR + "/swagger.yaml";
const GENERATED_DIR = "src/lib";

const token = process.env.GITHUB_TOKEN;
const options = {
  headers: {
    "User-Agent": "STORES-front",
    Authorization: `token ${token}`,
  },
};

(async () => {
  // FIXME: 一旦手作業でコピペすることに。
  // create swagger.yaml
  // try {
  //   const res = await fetch(URL, options);
  //   const data = await res.json();

  //   try {
  //     await fs.mkdir(SWAGGER_DIR);
  //   } catch (e) {
  //     if (e.code !== "EEXIST") console.error(e);
  //   }

  //   await fs.writeFile(
  //     SWAGGER_PATH,
  //     Buffer.from(data.content, "base64").toString(), // decode
  //     "utf-8"
  //   );
  // } catch (e) {
  //   console.error(e);
  // }

  // generate api
  try {
    execSync(`rm -r ${GENERATED_DIR}`);
    execSync(`npx openapi2aspida -i=${SWAGGER_PATH} -o=${GENERATED_DIR}`);
  } catch (e) {
    console.error(e);
  }

  // generate Apis class
  //   await addApis(GENERATED_DIR);
})();
