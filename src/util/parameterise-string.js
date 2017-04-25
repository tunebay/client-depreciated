const parameteriseString = string => (
  string
  .toLowerCase()
  .replace(/[^a-z0-9\-_]+/g, '-')
  .replace(/-{2,}/, '-')
  .replace(/^-|-$/, '')
);

export default parameteriseString;
