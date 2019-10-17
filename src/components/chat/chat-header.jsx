import React from 'react';
import { FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ChatHeader = ({ teamName }) => (
    <div className="chat-header">
        <div className="chat-header-left" style={{ float: 'left' }}>
            <div className="chat-header-team-name">{teamName}</div>
            <div>
                <span className="chat-header-info-item"><FontAwesomeIcon icon={['far', 'star']} size="sm" /> | </span>
                <span className="chat-header-info-item"><FontAwesomeIcon icon={['far', 'user']} size="sm" /> 26 | </span>
                <span className="chat-header-info-item"><FontAwesomeIcon icon={['fas', 'thumbtack']} size="sm" /> 37 | </span>
                <span className="chat-header-info-item"><FontAwesomeIcon icon={['fas', 'pencil-alt']} size="sm" /> Add a topic</span>
            </div>
        </div>
        <div className="chat-header-right" style={{ float: 'right', marginRight: '245px' }}>
            <span className="chat-header-right-item"><FontAwesomeIcon icon={['fas', 'phone']} /></span>
            <span className="chat-header-right-item"><FontAwesomeIcon icon={['fas', 'info-circle']} /></span>
            <span className="chat-header-right-item"><FontAwesomeIcon icon={['fas', 'cog']} /></span>
            <span className="chat-header-right-item">
                <span className="chat-header-search-icon"><FontAwesomeIcon icon={['fas', 'search']} /></span>
                <FormControl className="chat-header-search" placeholder="Search" />
            </span>
            <span className="chat-header-right-item"><FontAwesomeIcon icon={['fas', 'at']} /></span>
            <span className="chat-header-right-item"><FontAwesomeIcon icon={['far', 'star']} /></span>
            <span className="chat-header-right-item"><FontAwesomeIcon icon={['fas', 'ellipsis-v']} /></span>
        </div>
    </div>
);

export default ChatHeader;
