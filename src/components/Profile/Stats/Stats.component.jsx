import PropTypes from 'prop-types';
import { StatsList, ListItem, StatsLabel, StatsQuantaty } from './Stats.styled';

const defaultProps = {
    followers: 0,
    views: 0,
    likes: 0
}

const Stats = ({ stats = defaultProps }) => {

    const renderStats = (data) => {
        return Object.keys(data).map(key => (
                <ListItem key={key}>
                    <StatsLabel>
                        {key}
                    </StatsLabel>
                    <StatsQuantaty>
                        {data[key]}
                    </StatsQuantaty> 
                </ListItem>
        ))
    }

    return (
        <StatsList>
            {renderStats(stats)}
        </StatsList>
    )
}

Stats.propTypes = {
    stats: PropTypes.objectOf(PropTypes.number).isRequired
}

export default Stats;