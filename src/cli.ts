#!/usr/bin/env node

import { intro, outro, isCancel, cancel, text } from "@clack/prompts"
import { writeFileSync } from "fs"
import { mkdir } from "fs/promises"
import { FILE_NAME_JS, FILE_NAME_TS } from "./constants.js"
import { tsTemplate, jsTemplate } from "./template.js"
import fs from "fs"

const DEFAULT_PATH = "src/lib/utils"

async function main() {
    intro("add `make-serializable` in project")

    const path = await text({
        message: "Where do you want to place `make-serializable/`?",
        placeholder: DEFAULT_PATH,
        defaultValue: DEFAULT_PATH,
    })
    if (isCancel(path)) {
        cancel("Operation cancelled")
        return process.exit(0)
    }

    const currentDir = process.cwd()
    const isTsProject = fs.readdirSync(currentDir).some((file) => file === "tsconfig.json")

    const fullPath = `./${path}`
    await mkdir(fullPath, { recursive: true })

    const fileInfo = {
        name: isTsProject ? FILE_NAME_TS : FILE_NAME_JS,
        template: isTsProject ? tsTemplate : jsTemplate,
    }
    writeFileSync(`./${path}/${fileInfo.name}`, fileInfo.template)

    outro("You're all set!")
}

main().catch(console.error)
