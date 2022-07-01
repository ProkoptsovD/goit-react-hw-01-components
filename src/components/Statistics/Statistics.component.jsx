import PropTypes from 'prop-types';
import {
    StatisticList, ListItem,
    StatLabel, StatPercantage,
    Section, SectionHeading
} from './Statistics.styled';
import { getRandomHexColor } from 'helpers/getRandomHexColor';

const Statistics = ({ title, stats }) => {
    return (
        <Section>
            {
                title && <SectionHeading>
                            {title}
                        </SectionHeading>
            }
            <StatisticList>
                    {
                        stats.map(({ id, label, percentage }) => (
                            <ListItem
                                key={id}
                                bg={getRandomHexColor()}
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