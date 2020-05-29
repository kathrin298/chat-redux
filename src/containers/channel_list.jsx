import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectChannel, fetchMessages } from '../actions/index';

class ChannelList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(nextProps.selectedChannel);
    }
  }

  handleClick = (channel) => {
    this.props.selectChannel(channel);
  }

  render() {
    return (
      <div className="channels-container">
        <h2>Channels</h2>
        <ul>
          {this.props.channels.map((channel) => {
            return (
              <li
                key={channel}
                onClick={() => this.handleClick(channel)}
                role="presentation"
              >
              #{channel}
              </li>
            );
          })}
        </ul>
      </div>
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
