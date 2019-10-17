import React from 'react';

const ChatMessage = ({ chatMessage }) => (
    <div className="chat-message">
        <div className="chat-message-avatar">
            <img className="chat-message-avatar-image" src={chatMessage.messageAvatar} height="38" alt="" />

        </div>
        <div className="chat-message-content">
            <div>
                <span className="chat-message-author-name">{chatMessage.messageAuthor}</span>
                <span className="chat-message-message-time">{chatMessage.messageTime}</span>
            </div>
            <div>{chatMessage.message}</div>
        </div>
    </div>
);

export default ChatMessage;
