import styled, { css } from 'styled-components';

const commonCSSForUserTagAndLocation = css`
    color: var(--clr-font-main);
`

export const UserName = styled.p`
    font-weight: 700;
    font-size: 24px;

    color: var(--clr-heading);
`
export const UserTag = styled.p`
    ${commonCSSForUserTagAndLocation}
`
export const UserLocation = styled.p`
    ${commonCSSForUserTagAndLocation}
`