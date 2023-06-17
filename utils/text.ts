export function toSentenceCase(s: string): string {
  if (!s) {
    return s;
  }
  const words = s.trim().split(" ");
  const firstWord = words[0].charAt(0).toUpperCase() + words[0].slice(1);
  return [firstWord, ...words.slice(1)].join(" ");
}
