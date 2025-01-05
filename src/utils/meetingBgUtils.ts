const getBackgroundColor = (date) => {
  if (date.startsWith('Today')) {
    return '#FFE3E3';
  } if (date.startsWith('Tomorrow')) {
    return '#FFEEDE';
  }
  return '#DEE3FF';
};

export default getBackgroundColor;
