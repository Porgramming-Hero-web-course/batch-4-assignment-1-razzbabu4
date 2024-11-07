

const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]): boolean => {

    return keys.reduce((acc, key)=> acc && (key in obj), true)

}

const person = { name: "Alice", age: 25, email: "alice@example.com" };
validateKeys(person, ["name", "age"]);
