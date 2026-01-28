import fs from "fs"
import { BASE_DIR } from "./constants.js"

const stringifiedFileContent = fs.readFileSync(`${BASE_DIR}/index.js`, "utf8")

export const template = `
/**
 * @see https://www.npmjs.com/package/make-serializable
 */

${stringifiedFileContent}
`

export const FILE_NAME = "make-serializable.ts"
