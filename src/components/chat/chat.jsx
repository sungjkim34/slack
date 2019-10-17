import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import openSocket from 'socket.io-client';
import './chat.scss';
import ChatHeader from './chat-header';
import ChatMessage from './chat-message';
import ChatInput from './chat-input';
import { chatMock } from '../../constants/temporary-constants';

class Chat extends Component {

    constructor(props) {
        super(props);
        this.socket = openSocket('http://localhost:3004');
        this.state = {
            chats: chatMock,
            messageText: ''
        };
        this.socket.on('sendMessage', message => {
            const transformedMessage = {
                messageAvatar: 'https://laurauinteriordesign.com/wp-content/uploads/2018/03/avatar-placeholder.png',
                messageAuthor: `${message.authorFirstName} ${message.authorLastName}`,
                messageTime: message.messageDate,
                // messageUser: 'skim10',
                message: message.messageText
            }
            this.setState({ chats: [...this.state.chats, transformedMessage] });
        });
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentWillUnmount() {
        this.socket.disconnect();
        // this.setState({});
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.chats.length > prevState.chats.length) {
            this.scrollToBottom();
        }
    }

    sendMessage = () => {
        const message = {
            // authorId: this.props.accountInfo.personId,
            // authorType: this.props.accountInfo.accountType,
            authorFirstName: 'Sungjae',
            authorLastName: 'Kim',
            messageText: this.state.messageText,
            messageDate: moment()
        }
        this.socket.emit('sendMessage', message);
    }

    scrollToBottom = () => {
        const { chatContent } = this;
        const scrollHeight = chatContent.scrollHeight;
        const height = chatContent.clientHeight;
        const maxScrollTop = scrollHeight - height;
        ReactDOM.findDOMNode(chatContent).scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }

    handleSendMessage = (e) => {
        const message = this.state.messageText;
        if (e.key === 'Enter' && message.replace(/\s/g, '')) {
            // this.setState({
            //     chats: [
            //         ...this.state.chats,
            //         {
            //             messageAvatar: 'https://laurauinteriordesign.com/wp-content/uploads/2018/03/avatar-placeholder.png',
            //             messageAuthor: 'Sungjae Kim',
            //             messageTime: moment().format('h:mm A'),
            //             messageUser: 'skim10',
            //             message
            //         }
            //     ],
            //     messageText: ''
            // });
            this.setState({ messageText: '' });
            this.sendMessage();
            this.scrollToBottom();
        }
    }

    handleUpdateMessageText = (e) => {
        const messageText = e.target.value;
        this.setState({ messageText });
    }

    render() {
        const { chats, messageText } = this.state;
        return (
            <div className="chat-container">
                <ChatHeader
                    teamName="#pcg_teamalexa"
                />
                <div className="chat-content" ref={(ref) => this.chatContent = ref}>
                    {
                        chats.map((chat, i) =>
                            <ChatMessage key={i} chatMessage={chat} />
                        )
                    }
                </div>
                <ChatInput
                    sendMessage={this.handleSendMessage}
                    updateMessageText={this.handleUpdateMessageText}
                    messageText={messageText}
                />
            </div>
        );
    }
}

export default Chat;
