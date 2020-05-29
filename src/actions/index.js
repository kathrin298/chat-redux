
const baseUrl = "https://wagon-chat.herokuapp.com/";

export function fetchMessages(channel) {
  const promise = fetch(`${baseUrl}${channel}/messages`)
    .then(response => response.json());

  return {
    type: 'FETCH_MESSAGES',
    payload: promise
  };
}

export function createMessage(channel, author, content) {
  const body = { author, content };
  const promise = fetch(`${baseUrl}${channel}/messages`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: 'SEND_MESSAGE',
    payload: promise
  };
}

export function selectChannel(channel) {
  return {
    type: 'SELECT_CHANNEL',
    payload: channel
  };
}
