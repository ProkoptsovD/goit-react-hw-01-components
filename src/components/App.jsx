import { ThemeProvider } from 'styled-components';
import { theme } from "../theme";
import Profile from "./Profile";
import user from '../user.json';
import Container from './Container';

export const App = () => {
  return (
      <ThemeProvider theme={theme}>
        <Container>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </Container>
      </ThemeProvider>
  );
};
