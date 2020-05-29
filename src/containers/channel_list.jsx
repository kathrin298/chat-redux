import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectChannel, fetchMessages } from '../actions/index';

class ChannelList extends Component {
  componentWillReceiveNextProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(nextProps.selectedChannel);
    }
  }

  handleClick = (channel) => {
    this.props.selectChannel(channel);
  }

  render() {
    return (
      <ul>
        {this.props.channels.map((channel) => {
          return <li key={channel} onClick={() => this.handleClick(channel)} >{channel}</li>;
        })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectChannel, fetchMessages },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
