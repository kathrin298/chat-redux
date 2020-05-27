import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from '../components/message';

class MessageList extends Component {
  render() {
    return (
      <div>
        {this.props.messages.map((message) => {
          return <Message message={message} key={message.created_at} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps)(MessageList);
