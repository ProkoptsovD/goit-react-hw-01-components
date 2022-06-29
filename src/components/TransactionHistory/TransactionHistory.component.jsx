import PropTypes from 'prop-types';
import TransactionHeaders from './TransactionHeaders/TransactionHeaders.component';
import { Transactions, TableBody, TransactionInfo, TransactionData } from './TransactionHistory.styled';

const defaultProps = {
        id: 'test',
        type: 'invoice',
        amount: '0',
        currency: 'USD',
}
const headers = [
    'type',
    'Amount',
    'Currency',
]

const TransactionHistory = ({ items } = defaultProps) => {

    const renderTransactionHistory = (data) => data.map(({ id, type, amount, currency }) => (
        <TransactionInfo key={id}>
            <TransactionData>{type}</TransactionData>
            <TransactionData>{amount}</TransactionData>
            <TransactionData>{currency}</TransactionData>
        </TransactionInfo>
    ));

    return (
        <Transactions>
            <TransactionHeaders
                headerList={headers}
            />

            <TableBody>
                {renderTransactionHistory(items)}
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