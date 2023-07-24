const initialState = {
    pass: '',
    name:'',
    checkpass: false,
  };
  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NAME':
        return {
          ...state,
          name: action.payload,
        };
      case 'SET_PASS':
        return {
          ...state,
          pass: action.payload,
        };
      case 'SET_CHECKPASS':
        return {
          ...state,
          checkpass: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default Reducer;