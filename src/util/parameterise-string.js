const parameteriseString = string => (
  string
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '')
);

export default parameteriseString;
