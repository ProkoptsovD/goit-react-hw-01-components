import styled, { css } from 'styled-components';
import Avatar from 'components/Profile/Avatar';

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    min-width: 400px;
    padding: ${({ theme }) => theme.spacing(3, 0, 3, 3)};
    border-radius: 5px;
    background-color: var(--clr-light);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    &:not(:last-child) {
        margin-bottom: ${({ theme }) => theme.spacing(2)};
    }
`;
export const FriendStatus = styled.span`
    display: block;
    width: 10px;
    height: 10px;
    margin-right: ${({ theme }) => theme.spacing(3)};
    border-radius: 50%;
    background-color: ${({ isOnline }) => isOnline ? 'green' : 'red'};
`;
export const FriendAvatar = styled(Avatar)`
    ${({ className }) => className === 'friendList' && css`
        width: 48px;
        height: 48px;
        margin-bottom: 0;
        border-radius: 10px;
    `}
`;
export const FriendName = styled.p`
    margin-left: ${({ theme }) => theme.spacing(3)};
    font-weight: 700;
    font-size: 22px;
    color: var(--clr-heading);
`;