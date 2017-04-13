const MULTI = 'MULTI';
const SINGLE = 'SINGLE';

const UPLOAD_PAGE = 'UPLOAD_PAGE';
const BASIC_INFO_PAGE = 'BASIC_INFO_PAGE';
const PRICE_PAGE = 'PRICE_PAGE';
const SINGLE_SELECTION_PAGE = 'SINGLE_SELECTION_PAGE';

const INITIAL_STATE = {
  uploadZoneVisable: true,
  formType: '',
  formPage: BASIC_INFO_PAGE
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SINGLE_UPLOAD_STARTED':
      return { ...state, uploadZoneVisable: false, formType: SINGLE, formPage: BASIC_INFO_PAGE };
    case 'MULTI_UPLOAD_STARTED':
      return { ...state, uploadZoneVisable: false, formType: MULTI, formPage: BASIC_INFO_PAGE };
    default:
      return state;
  }
};
