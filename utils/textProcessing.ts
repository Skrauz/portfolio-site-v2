/**
 * Processes Polish text to prevent orphaned prepositions and conjunctions
 * by adding non-breaking spaces after short words
 * @param text - The text to process
 * @returns Processed text with non-breaking spaces
 */
export const processText = (text: string): string => {
  const prepositions = [
    "w",
    "z",
    "na",
    "do",
    "od",
    "za",
    "po",
    "dla",
    "przez",
    "bez",
    "pod",
    "nad",
    "przy",
    "między",
    "przed",
    "o",
    "ze",
    "a",
    "i",
    "lub",
    "oraz",
  ];

  let processedText = text;

  prepositions.forEach((prep) => {
    const regex = new RegExp(`\\s(${prep})\\s`, "gi");
    processedText = processedText.replace(regex, ` $1&nbsp;`);
  });

  return processedText;
};