import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cx from 'classnames';

const _sectionIcon = (sectionItem) => {
    if (sectionItem.type === 'Channel') {
        if (sectionItem.private) {
            return <FontAwesomeIcon icon={['fas', 'lock']} color="#858d95" size="xs" />;
        } else {
            return '#';
        }
    } else if (sectionItem.type === 'User') {
        if (sectionItem.online) {
            return <FontAwesomeIcon icon={['fas', 'circle']} color="#89e459" size="xs" />;
        } else {
            return <FontAwesomeIcon icon={['far', 'circle']} color="#858d95" size="xs" />;
        }
    } else if (sectionItem.type === 'Group') {
        return <span className="side-bar-section-group-number">{sectionItem.names.length}</span>
    }
}

const SideBarSection = ({ sectionTitle, sectionItems }) => (
    <div className="side-bar-section">
        <div className="side-bar-section-title">{sectionTitle}</div>
        {
            sectionItems.map((sectionItem, i) => (
                <div key={i} className={cx('side-bar-section-item', sectionItem.active && 'active')}>
                    <span className="side-bar-section-item-icon">
                        {_sectionIcon(sectionItem)}
                    </span>
                    {sectionItem.name}
                    {sectionItem.names && `${sectionItem.names.join(', ').substring(0, 25)}...`}
                </div>
            ))
        }
    </div>
);

export default SideBarSection;
