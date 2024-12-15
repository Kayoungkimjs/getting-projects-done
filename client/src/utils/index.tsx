export const toUpperCase = (words: string | null | undefined) => {
  if (!words) return "";
  return words?.toUpperCase();
};
