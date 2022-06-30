import styled from 'styled-components';

export const Transactions = styled.table`
    table-layout: fixed ;
    width: 100% ;
    margin-top: ${({ theme }) => theme.spacing(10)};
    color: var(--clr-font-main);
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const TableBody = styled.tbody`
    background-color: var(--clr-light);
`;
export const TransactionInfo = styled.tr`
    font-size: 14px;
    text-align: center;

    &:nth-of-type(2n) {
        background-color: var(--clr-bg-main);
    }
`;
export const TransactionData = styled.td`
    padding: ${({ theme }) => theme.spacing(2.5, 0)};

    &:first-child {
        text-align: left;
        text-indent: 42%;
        text-transform: capitalize;
    }
    &:not(:last-child) {
        border-right: 1px solid var(--clr-bg-secondary);
    }
`;
export const TransactionHeader = styled.thead`
    text-transform: uppercase;
    color: var(--clr-light);
    background-color: var(--clr-table-header);
`;

export const HeaderTitle = styled.th`
    padding: ${({ theme }) => theme.spacing(3, 0)};
    text-align: center;
`;
