export default (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_TITLE':
      if (state.title === action.title_one) return { title: action.title_two }
      return { title: action.title_one }
    default:
      return state
  }
}
