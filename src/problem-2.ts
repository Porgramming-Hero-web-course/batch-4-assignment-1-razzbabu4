{
    const removeDuplicates = (arr: number[]): number[] => {
        const newArray = new Set(arr);
        return [...newArray];
    }

    removeDuplicates([2, 3, 5, 5, 9, 4, 7, 9]);

}
