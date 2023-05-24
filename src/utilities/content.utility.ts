const WORD_PER_MINUTE = 150;

export function getReadingTime(content: string) {
  const words = content.split(/\s+/).length;
  const time = Math.round(words / WORD_PER_MINUTE);
  return time;
}
