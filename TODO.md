- [ ] `npx make-serializable` command not found. why?

```zsh
npx make-serializable
sh: make-serializable: command not found
```

```json
{
  scripts: {
    generate: npx tsx scripts/generate-template.ts,
    build: npm run generate && tsc,
    prepublishOnly: npm run build
  }
}
```

```ts
// Option 2: Build-time Template Generation (Single Source of Truth)
// Create a build script that reads src/index.ts and generates src/template.ts before tsc runs.
// File structure:
// src/
// ├── index.ts           # Source of truth
// ├── template.ts        # Generated (gitignored)
// ├── cli.ts
// scripts/
// ├── generate-template.ts   # Build script
// Build script (scripts/generate-template.ts):
import fs from "fs"
const source = fs.readFileSync("./src/index.ts", "utf8")
const template = `// AUTO-GENERATED - DO NOT EDIT
export const template = \`\\
/**
 * @see https://www.npmjs.com/package/make-serializable
 */
${source}\`
export const FILE_NAME = "make-serializable.ts"
`
fs.writeFileSync("./src/template.ts", template)
```

- [ ] tsconfig 없으면 js 버전으로 만드는 것 해야
