import PropTypes from 'prop-types';
import { FriendStatus, FriendAvatar, FriendName, ListItem } from './FriendListItem.styled';

const defaultProps = {
    avatar: 'http://placehold.jp/150x150.png',
    name: 'User',
    isOnline: false,
}

const FriendListItem = ({ avatar, name, isOnline } = defaultProps) => {
    return (
        <ListItem>
            <FriendStatus
                isOnline={isOnline}
            />
            <FriendAvatar
                avatarUrl={avatar}
                className='friendList'
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