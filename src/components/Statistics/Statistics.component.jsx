import PropTypes from 'prop-types';
import {
    StatisticList, ListItem,
    StatLabel, StatPercantage,
    Section, SectionHeading
} from './Statistics.styled';

const colorPallete = [
    '#628395',
    '#96897B',
    '#dfd5a5',
    '#dbad6a',
    '#cf995f'
]

const Statistics = ({ title, stats }) => {
    return (
        <Section>
            <SectionHeading>
                {title}
            </SectionHeading>
            <StatisticList>
                    {
                        stats.map(({id, label, percentage }, idx) => (
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
                    }
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