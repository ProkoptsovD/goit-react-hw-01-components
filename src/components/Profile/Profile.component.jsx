import Avatar from "./Avatar";
import Stats from "./Stats";
import UserInfo from "./UserInfo";
import { ProfileCard, Wrapper } from './Profile.styled';

const Profile = ({username, tag, location, avatar, stats}) => {

    return (
        <ProfileCard>
            <Wrapper>
                <Avatar
                    avatarUrl={avatar}
                />
                <UserInfo
                    username={username}
                    tag={tag}
                    location={location}
                />
            </Wrapper>
            <Stats
                stats={stats}
            />
        </ProfileCard>

    )
}

export default Profile;