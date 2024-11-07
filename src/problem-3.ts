
{
    const countWordOccurrences = (sentence: string, word: string): number => {
        const words = sentence.toLowerCase().split(" ");
        const findWord = word.toLowerCase();
        const findWordCount = words.filter(word => word === findWord)
        return findWordCount.length
    }

    countWordOccurrences("I love TypeScript", "typescript");


}