import PropTypes from 'prop-types';
import { ListOfFriends, ListItem, FriendStatus, FriendAvatar, FriendName } from './FriendList.styled';

const defaultProps = [
    {
        avatar: 'test',
        name: 'test',
        isOnline: false,
        id: 0
    }
]

const FriendList = ({ friends = defaultProps }) => {

    const renderFriends = (data) => data.map(({ avatar, name, isOnline, id }) => (
        <ListItem
            key={id}
        >
            <FriendStatus isOnline={isOnline} />
            <FriendAvatar
                avatarUrl={avatar}
                className='friendList'
            >
                {avatar}
            </FriendAvatar>
            <FriendName>
                {name}
            </FriendName>
        </ListItem>
    ))

    return (
        <ListOfFriends>
            {renderFriends(friends)}
        </ListOfFriends>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        })
    )
}

export default FriendList;
