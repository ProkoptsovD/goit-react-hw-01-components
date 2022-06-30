import PropTypes from 'prop-types';
import {
    Transactions, TableBody, TransactionInfo,
    TransactionData, TransactionHeader, HeaderTitle
} from './TransactionHistory.styled';

const headers = [
    'Type',
    'Amount',
    'Currency',
]

const TransactionHistory = ({ items }) => {
    return (
        <Transactions>
            <TransactionHeader>
                <tr>
                    {
                        headers.map(header => (
                            <HeaderTitle key={header}>
                                {header}
                            </HeaderTitle>
                        ))
                    }
                </tr>
            </TransactionHeader>

            <TableBody>
                {
                    items.map(({ id, type, amount, currency }) => (
                        <TransactionInfo key={id}>
                            <TransactionData>{type}</TransactionData>
                            <TransactionData>{amount}</TransactionData>
                            <TransactionData>{currency}</TransactionData>
                        </TransactionInfo>
                    ))
                }
            </TableBody>
        </Transactions>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}

export default TransactionHistory;