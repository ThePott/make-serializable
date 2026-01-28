import fs from "fs"

const stringifiedFileContent = fs.readFileSync("./index.js", "utf8")

export const template = `
/**
 * @see https://www.npmjs.com/package/make-serializable
 */

${stringifiedFileContent}
`

export const fileName = "make-serializable"
