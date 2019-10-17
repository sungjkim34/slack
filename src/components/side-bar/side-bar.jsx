import React, { Component } from 'react';
import './side-bar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SideBarSection from './side-bar-section';
import { starredChat, associatedChannels, associatedDirectMessages } from '../../constants/temporary-constants';

class SideBar extends Component {
    render() {
        return (
            <div className="side-bar-container">
                <div className="side-bar-header">
                    <div className="side-bar-header-team-name">
                        <span className="side-bar-header-team-name-text"><strong>Intuit Teams </strong></span>
                        <FontAwesomeIcon icon="chevron-down" size="xs" />
                    </div>
                    <div>
                        <FontAwesomeIcon icon="circle" color="#89e459" size="xs" />
                        <span className="side-bar-header-user-full-name">Sungjae Kim</span>
                    </div>
                </div>
                <div className="side-bar-content">
                    <div className="side-bar-threads-row">
                        <FontAwesomeIcon icon="comment" size="sm" />
                        <span className="side-bar-threads-row-all-thread">All Threads</span>
                    </div>
                    <SideBarSection
                        sectionTitle="Starred"
                        sectionItems={starredChat}
                    />
                    <SideBarSection
                        sectionTitle="Channels"
                        sectionItems={associatedChannels}
                    />
                    <SideBarSection
                        sectionTitle="Direct Messages"
                        sectionItems={associatedDirectMessages}
                    />
                </div>
            </div>
        );
    }
}

export default SideBar;
