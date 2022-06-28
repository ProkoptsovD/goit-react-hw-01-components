import PropTypes from 'prop-types';
import { AppContainer } from './Container.styled';

const Container = ({ children, className }) => {
    return (
        <AppContainer
            className={`container ${className || ''}`}
        >
            {children}
        </AppContainer>
    )
}

Container.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

export default Container;