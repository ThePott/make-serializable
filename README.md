# Serialize everything so you can `res.json(result)`

- Convert every `bigint` to `string` inside of anything
- Install inside your project, customize as your taste
- supports both JavsScript and TypeScript projects

## Installation

- The files will be written in `src/lib/utils` by default.
- output path can be customized in CLI

```zsh
npx make-serializable@latest
```

## Usage

```ts
// NOTE: import from where you have installed
// NOTE: default installation path is `src/lib/utils` in your project
import { makeSerializable } from "@/lib/utils/make-serializable"

router.get("/", (res, req) => {
    const unserializable = { bigNumber: BigInt(1) } // cannot pass into `res.json()`
    const serializable = makeSerializable(unserializable) // can pass into `res.json()`
    res.json(serializable)
})
```
