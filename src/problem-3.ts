{

    const countWordOccurrences = (sentence: string, word: string): number => {
        const words = sentence.toLocaleLowerCase().split(/\W+/);
        const findWord = word.toLocaleLowerCase();
        const findWordCount = words.filter(word => word === findWord)
        return findWordCount.length
    }

    countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");


}