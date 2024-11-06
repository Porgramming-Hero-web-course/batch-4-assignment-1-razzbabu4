{

    const getProperty = <T , R extends keyof T>(obj: T, propertyName: R) => {
        return obj[propertyName]
    }
    
    const person = { name: "Alice", age: 30 };

}