import Section from 'components/common/Section';
import PropTypes from 'prop-types';
import { StatisticList, ListItem, StatLabel, StatPercantage } from './Statistics.styled';

const defaultProps = {
    stats: [{
        id: 'tets',
        label: 'test',
        percentage: 0
    }]
}
const colorPallete = [
    '#628395',
    '#96897B',
    '#dfd5a5',
    '#dbad6a',
    '#cf995f'
]

const Statistics = ({ title, stats = defaultProps }) => {
    
    const renderStatistic = (data) => data.map(({id, label, percentage }, idx) => (
        <ListItem
            key={id}
            bg={colorPallete[idx]}
        >
            <StatLabel>
                {label}
            </StatLabel>
            <StatPercantage>
                {`${percentage}%`}
            </StatPercantage>
        </ListItem>
    ))
    
    return (
        <Section
            title={title}
        >
            <StatisticList>
                {renderStatistic(stats)}
            </StatisticList>
        </Section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }))
}

export default Statistics;