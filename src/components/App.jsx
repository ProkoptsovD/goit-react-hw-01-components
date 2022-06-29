import { ThemeProvider } from 'styled-components';
import { theme } from "../theme";

//=================== components ======================//
import Container from './common/Container';
import Profile from "./Profile";
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';

//========================= data ==================//
import { user, data, friends, transactions } from '../dataFromServer';

export const App = () => {
  return (
      <ThemeProvider theme={theme}>
        <Container>
          <Profile
            username={user?.username}
            tag={user?.tag}
            location={user?.location}
            avatar={user?.avatar}
            stats={user?.stats}
          />
          <Statistics
            title='Upload stats'
            stats={data}
          />
          <FriendList
            friends={friends}
          />
          <TransactionHistory
            items={transactions}
          />
        </Container>
      </ThemeProvider>
  );
};
