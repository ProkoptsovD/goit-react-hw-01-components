import PropTypes from 'prop-types';
import { UserAvatar } from './Avatar.styled';

const defaultProps = {
    className: '',
    avatarUrl: 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
}

const Avatar = ({ avatarUrl, className } = defaultProps) => { 
    return (
        <UserAvatar
            src={avatarUrl || defaultProps.avatarUrl}
            alt="User avatar"
            className={className || ''}
        />
    )
}

Avatar.propTypes = {
    className: PropTypes.string,
    avatarUrl: PropTypes.string,
}

export default Avatar;