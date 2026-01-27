export const mutateToSerializable = (obj) => {
    Object.entries(obj).forEach(([key, value]) => {
        if (typeof value !== "bigint") {
            return;
        }
        obj[key] = value.toString();
    });
};
export const makeSerializable = (obj) => {
    if (obj instanceof Promise)
        throw new Error("You must await promise");
    if (typeof obj === "bigint")
        return obj.toString();
    if (Array.isArray(obj)) {
        return obj.map((el) => makeSerializable(el));
    }
    const isNormalObject = obj !== null && typeof obj === "object" && !(obj instanceof Date);
    if (isNormalObject) {
        const entryArray = Object.entries(obj);
        const newEntryArray = entryArray.map(([key, value]) => [key, makeSerializable(value)]);
        const newObj = Object.fromEntries(newEntryArray);
        return newObj;
    }
    return obj;
};
//# sourceMappingURL=index.js.map