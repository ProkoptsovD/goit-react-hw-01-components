import styled, { css } from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 280px;
  height: auto;
  padding: ${({ theme }) => theme.spacing(10, 0, 0, 0)};
  margin-bottom: ${({ theme }) => theme.spacing(10)};
  border-radius: 5px;
  background-color: var(--clr-light);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: ${({ theme }) => theme.spacing(0, 0, 7, 0)};
  font-weight: 500;

  & > :not(:first-child) {
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }
  & > :last-child {
    margin-bottom: ${({ theme }) => theme.spacing(0)};
  }
`;
export const UserAvatar = styled.img`
    width: 100px;
    height: 100px;

    margin-bottom: ${({ theme }) => theme.spacing(7)};

    border-radius: 50%;
    overflow: hidden;
`;
const commonCSSForUserTagAndLocation = css`
    color: var(--clr-font-main);
`;

export const UserName = styled.p`
    font-weight: 700;
    font-size: 24px;

    color: var(--clr-heading);
`;
export const UserTag = styled.p`
    ${commonCSSForUserTagAndLocation}
`;
export const UserLocation = styled.p`
    ${commonCSSForUserTagAndLocation}
`;
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
`;
export const StatsLabel = styled.span`
    ${commonCSSLabelAndQuantaty}
    text-transform: capitalize;
`;
export const StatsQuantaty = styled.span`
    ${commonCSSLabelAndQuantaty}
    font-weight: 700;
    font-size: 16px;
    color: var(--clr-font-secondary);
`;
