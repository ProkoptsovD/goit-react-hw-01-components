import PropTypes from 'prop-types';
import { TransactionHeader, HeaderTitle } from './TransactionHeaders.styled';

const defaultProps = {
    headerList: [
        'header1',
        'header2',
        'header3'
    ]
}

const TransactionHeaders = ({ headerList } = defaultProps) => {
    
    const renderHeaders = (data) => data.map(heading => (
        <HeaderTitle key={heading}>
            {heading}
        </HeaderTitle>
    ));
    
    return (
        <TransactionHeader>
            <tr>
                {renderHeaders(headerList)}
            </tr>
        </TransactionHeader>
    )
}

TransactionHeaders.propTypes = {
    headerList: PropTypes.arrayOf(
        PropTypes.string
    ).isRequired
}

export default TransactionHeaders;