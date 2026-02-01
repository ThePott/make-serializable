import fs from "fs"

const tsSource = fs.readFileSync("./src/index.ts", "utf-8")
const jsSource = fs.readFileSync("./dist/index.js", "utf-8")

const templateContent = `export const tsTemplate = \`// NOTE: edit as your taste

/**
 * @see https://www.npmjs.com/package/make-serializable
 */
${tsSource}
\`

export const jsTemplate = \`/**
 * @see https://www.npmjs.com/package/make-serializable
 */
${jsSource}
\`
`

fs.writeFileSync("./src/template.ts", templateContent, "utf-8")
