export const inputStandard = (input) => {
  const whiteList = ['and', 'of'];
  const words = input.trim().split(' ');

  for (let i = 0; i < words.length; i++) {
    if (!whiteList.includes(words[i])) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
  }
  const result = words.join(' ');
  return result;
};
