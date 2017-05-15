const basicInfoValidate = ({ title, playlistType, genres, permalink }) => {
  const errors = {};
  if (!title) {
    errors.title = 'Enter a title for your playlist';
  }
  if (!playlistType) {
    errors.playlistType = 'Choose the type of playlist';
  }
  if (!genres || genres.length <= 0) {
    errors.genres = 'Select atleast one genre';
  }
  if (reservedPermalinks.includes(permalink)) {
    errors.permalink = 'This is a reserved location';
  }
  return errors;
};

const reservedPermalinks = [
  'following',
  'followers',
  'playlists',
  'hub',
  'sets',
  'music',
  'collection',
  'videos',
  'merch',
  'merchandise',
  'shows',
  'gigs',
  'tickets',
  'tracks'
];

export default basicInfoValidate;
