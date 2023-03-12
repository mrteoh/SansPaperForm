export const capitalize = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const limitText = (text: string, limit: number | null = null) => {
  if (limit && text.length < limit) {
    return text;
  }

  return text.substring(0, limit || 15) + '...';
};
