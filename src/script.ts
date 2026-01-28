import fs from "fs"

const source = fs.readFileSync("./src/index.ts", "utf-8")

const templateContent = `
export const template = \`
// NOTE: edit as your taste

/**
 * @see https://www.npmjs.com/package/make-serializable
 */
${source}
\`
`

fs.writeFileSync("./src/template.ts", templateContent, "utf-8")
