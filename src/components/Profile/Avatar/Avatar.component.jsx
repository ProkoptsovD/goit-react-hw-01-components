import PropTypes from 'prop-types';
import { UserAvatar } from './Avatar.styled';

const defaultProps = {
    avatarUrl: 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png'
}

const Avatar = ({ avatarUrl } = defaultProps) => { 
    return (
        <UserAvatar
            src={avatarUrl || defaultProps.avatarUrl}
            alt="User avatar"
            className="avatar"
        />
    )
}

Avatar.propTypes = {
    avatarUrl: PropTypes.string,
}

export default Avatar;