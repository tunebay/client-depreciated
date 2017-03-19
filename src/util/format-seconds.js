import moment from 'moment';

const formatSeconds = (seconds) => {
  return moment('1993-05-01').startOf('day')
  .seconds(seconds)
  .format('HH:mm:ss')
  .replace(/^(?:00:)?0?/, '');
};

export default formatSeconds;
