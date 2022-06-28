import styled from "styled-components";

export const AppSection = styled.section`
    width: 100%;
    padding: ${({ theme }) => theme.spacing(10, 0)};
    text-align: center;
`;
export const SectionHeading = styled.h2`
    margin-bottom: ${({ theme }) => theme.spacing(10)};
    color: var(--clr-font-secondary);
    text-transform: uppercase;
`