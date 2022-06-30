import PropTypes from 'prop-types';
import {
    ProfileCard, Wrapper, UserAvatar,
    UserName, UserTag, UserLocation,
    StatsList, ListItem, StatsLabel, StatsQuantaty
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {

    return (
        <ProfileCard>
            <Wrapper>
                <UserAvatar
                    src={avatar}
                    alt="User avatar"
                />
                <UserName>
                    {username}
                </UserName>
                <UserTag>
                    {`@${tag}`}
                </UserTag>
                <UserLocation>
                    {location}
                </UserLocation>
            </Wrapper>

            <StatsList>
                {
                    Object.keys(stats).map(stat => (
                        <ListItem key={stat}>
                            <StatsLabel>
                                {stat}
                            </StatsLabel>
                            <StatsQuantaty>
                                {stats[stat]}
                            </StatsQuantaty> 
                        </ListItem>))
                }
            </StatsList>
        </ProfileCard>

    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.object.isRequired,
}

export default Profile;