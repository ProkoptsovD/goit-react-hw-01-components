import styled from 'styled-components';

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

