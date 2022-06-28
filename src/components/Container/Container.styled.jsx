import styled from 'styled-components';

export const AppContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing(20)};
`;