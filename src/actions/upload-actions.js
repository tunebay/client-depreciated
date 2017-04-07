export const processAudio = (files) => {
  return files.length === 1 ?
    handleSingleUpload(files[0]) :
    handleMultiUpload(files);
};

// private

const handleSingleUpload = (file) => {
  console.log(file);
  return { type: 'SINGLE_UPLOAD_STARTED' };
};

const handleMultiUpload = (files) => {
  console.log(files);
  return { type: 'MULTI_UPLOAD_STARTED' };
};
