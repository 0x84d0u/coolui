export function capitalize(str: string): string {
  // Return an empty string if the input is null, undefined, or empty
  if (!str) {
    return "";
  }
  
  const firstLetter = str.charAt(0).toUpperCase();
  const restOfString = str.slice(1).toLowerCase();

  return firstLetter + restOfString;
}