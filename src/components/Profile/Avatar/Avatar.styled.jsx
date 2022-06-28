import styled from 'styled-components';

export const UserAvatar = styled.img`
    width: 100px;
    height: 100px;

    margin-bottom: ${({ theme }) => theme.spacing(7)};

    border-radius: 50%;
    overflow: hidden;
`;