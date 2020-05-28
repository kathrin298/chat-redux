
export default function(state = null, action) {
  switch (action.type) {
    case 'FETCH_MESSAGES': {
      return action.payload.messages;
    }

    case 'SEND_MESSAGE': {
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    }
    default:
      return state;
  }
}
