import PropTypes from 'prop-types';
import { ListOfFriends } from './FriendList.styled';
import FriendListItem from './FriendListItem';

const defaultProps = [
    {
        avatar: 'test',
        name: 'test',
        isOnline: false,
        id: 0
    }
]

const FriendList = ({ friends = defaultProps }) => {

    const renderFriends = (data) => data.map(({ id, ...restProps }) => (
        <FriendListItem
            key={id}
            {...restProps}
        />
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
