const parameteriseString = (string) => {
  if (string) {
    return string
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  }
};

export default parameteriseString;
