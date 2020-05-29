import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createMessage } from '../actions';


class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formValue: ''
    };
  }

  componentDidMount() {
    this.messageBox.focus();
  }

  handleChange = (event) => {
    this.setState({
      formValue: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.formValue);
    this.setState({
      formValue: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input
          ref={(input) => { this.messageBox = input; }}
          type="text"
          className="form-control"
          value={this.state.formValue}
          onChange={this.handleChange}
        />
        <button type="submit" >Send</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    selectedChannel: state.selectedChannel,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
