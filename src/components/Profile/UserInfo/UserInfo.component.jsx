import PropTypes from 'prop-types';
import { UserName, UserTag, UserLocation } from './UserInfo.styled';

const defaultProps = {
    username: 'User',
    tag: '@user',
    location: 'Earth'
}

const UserInfo = ({ username, tag, location } = defaultProps) => {
    return (
        <>
            <UserName>
                {username}
            </UserName>
            <UserTag>
                {`@${tag}`}
            </UserTag>
            <UserLocation>
                {location}
            </UserLocation>
        </>
    )
}

UserInfo.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
}

export default UserInfo;