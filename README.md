# Serialize everything so you can `res.json(result)`

- Convert every `bigint` to `string` inside of anything
- Install inside your project, customize as your taste

## Installation

- The files will be written in `src/lib/utils` by default.
- output path can be customized in CLI

```zsh
npx make-serializable
```

## Usage

```ts
// import from where you have installed
import { makeSerializable } from "@/make-serializable"

router.get("/", (res, req) => {
    const unserializable = { bigNumber: BigInt(1) } // cannot pass into `res.json()`
    const serializable = makeSerializable(unserializable) // can pass into `res.json()`
    res.json(serializable)
})
```
