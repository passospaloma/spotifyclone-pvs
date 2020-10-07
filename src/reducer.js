export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //REMOVE this token after finished developing and put null
   //token: "BQB7kGLktREIoaxXTQyxZGin_ShbmZEOINHwbSNESp75ba6WJa2COZO1V_qlcMVQGCyn989ZRCN1pmqryoITJxJAIsGvtyvpFmIbFSGsbSXDA2AC5LRI_GkZUzJ9fWXzf6dWUskT675z3mFj4yzhGF5h0XE",
};

const reducer = (state, action) => {
console.log(action);

//action -> type,[payload]

    switch(action.type) {
      case 'SET_USER':
        return {
          ...state, 
          user: action.user
          }; 
        
      case 'SET_TOKEN':
        return {
          ...state,
          token: action.token
            };

      case 'SET_PLAYLISTS':
        return{
          ...state,
          playlists: action.playlists,
         };

      case 'SET_DISCOVER_WEEKLY':
        return {
          ...state,
          discover_weekly: action.discover_weekly,
        }

      default:
        return state;

    }

}

export default reducer;