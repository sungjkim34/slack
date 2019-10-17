import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ChatInput extends Component {
    render() {
        const { sendMessage, messageText, updateMessageText } = this.props;
        return (
            <div className="chat-input">
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text><FontAwesomeIcon icon="plus" color="#565556" /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        className="chat-input-form"
                        placeholder="Message #pcg_teamalexa"
                        onKeyPress={sendMessage}
                        onChange={updateMessageText}
                        value={messageText}
                    />
                    <span className="chat-input-icon-container">
                        <span className="chat-input-icon"><FontAwesomeIcon icon="at" size="lg" /></span>
                        <span className="chat-input-icon"><FontAwesomeIcon icon={['far', 'smile']} size="lg" /></span>
                    </span>
                </InputGroup>
            </div>
        );
    }
}

export default ChatInput;
