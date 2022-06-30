import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem.component';
import { ListOfFriends } from './FriendList.styled';

const FriendList = ({ friends }) => {
    return (
        <ListOfFriends>
            {
                friends.map(({ id, ...restProps }) => (
                    <FriendListItem
                        key={id}
                        {...restProps}
                    />
                ))
            }
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
