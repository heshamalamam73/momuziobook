import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMessages ,removeMessage} from "../store/actions/messages";
import MessageItem from "../component/MessageItem";
import currentUser from "../store/reducers/currentUser";

class MessageList extends Component {
  componentDidMount() {
    this.props.fetchMessages();
  }
  render() {
    const { messages,removeMessage,currentUser } = this.props;
    let messageList = messages.map(m => (
      <MessageItem
        key={m._id}
        id={m._id}
        date={m.createAt}
        text={m.text}
        username={m.user.username}
        profileImg={m.user.profileImg}
        removeMessage={removeMessage.bind(this, m.user._id, m._id)}
        isCorrectUser={currentUser ===m.user._id}
      />
    ));
    return (
     
          <ul className="list-group" id="messages">
            {messageList}
          </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    currentUser: state.currentUser.user.id
  };
}

export default connect(mapStateToProps, { fetchMessages ,removeMessage})(MessageList);
