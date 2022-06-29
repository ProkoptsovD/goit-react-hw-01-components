import styled from 'styled-components';

export const TransactionHeader = styled.thead`
    text-transform: uppercase;
    color: var(--clr-light);
    background-color: var(--clr-table-header);
`;

export const HeaderTitle = styled.th`
    padding: ${({ theme }) => theme.spacing(3, 0)};
    text-align: center;
`;