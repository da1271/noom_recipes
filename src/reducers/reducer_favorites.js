export default function FavoriteReducer(state = [], action) {
  switch (action.type){
    case 'ADD':
      return state.concat(action.payload) // used concat to not mutate the state in anyway
    case 'REMOVE':
      const firstMatchIndex = state.indexOf(action.payload)
      return state.filter((item, index) => index !== firstMatchIndex) //filter or return everything but the selected one
    default:
      return state;
  }
}
