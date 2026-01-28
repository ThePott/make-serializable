#!/usr/bin/env node

import { intro, outro, isCancel, cancel, text } from "@clack/prompts"
import { FILE_NAME, template } from "./template.js"
import { writeFileSync } from "fs"
import { mkdir } from "fs/promises"

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

    const fullPath = `./${path}`
    await mkdir(fullPath, { recursive: true })
    writeFileSync(`./${path}/${FILE_NAME}`, template)

    outro("You're all set!")
}

main().catch(console.error)
