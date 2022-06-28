import styled, { css } from 'styled-components';

export const StatsList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    font-size: 14px;
    color: var(--clr-font-main);
    background-color: var(--clr-bg-secondary);
`;
export const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing(4, 0)};
    border-top: 1px solid var(--clr-border);

    &:not(:last-child) {
        border-right: 1px solid var(--clr-border);
    }
`;
const commonCSSLabelAndQuantaty = css`
    display: block;
`
export const StatsLabel = styled.span`
    ${commonCSSLabelAndQuantaty}
    text-transform: capitalize;
`
export const StatsQuantaty = styled.span`
    ${commonCSSLabelAndQuantaty}
    font-weight: 700;
    font-size: 16px;
    color: var(--clr-font-secondary);
`