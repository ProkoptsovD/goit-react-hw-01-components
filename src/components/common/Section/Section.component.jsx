import PropTypes from 'prop-types';
import { AppSection, SectionHeading } from './Section.styled';

const Section = ({ children, title }) => {
    return (
        <AppSection>
            {
                title && <SectionHeading>
                            {title}
                        </SectionHeading>
            }
            {children}
        </AppSection>
    )
}

Section.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string
}

export default Section;