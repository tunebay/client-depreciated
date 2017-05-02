import { SHOW_ERROR_BANNER, CLOSE_BANNER } from './types';

export const showErrorBanner = (message) => {
  return { type: SHOW_ERROR_BANNER, payload: message };
};

export const closeBanner = () => {
  return { type: CLOSE_BANNER };
};
