import PropTypes from 'prop-types';
import { FriendStatus, FriendAvatar, FriendName, ListItem } from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline } = {}) => {
    return (
        <ListItem>
            <FriendStatus
                isOnline={isOnline}
            />
            <FriendAvatar
                src={avatar}
                alt="User avatar"
            />
            <FriendName>
                {name}
            </FriendName>
        </ListItem>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;