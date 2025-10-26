

const truncateText = (str, len) => {
    const length = len || 130;
    const ending = ' . . .  '
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};
export default truncateText;