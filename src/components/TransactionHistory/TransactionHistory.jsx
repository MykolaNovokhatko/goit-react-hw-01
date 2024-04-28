import css from '../TransactionHistory/TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
    return (
      <table className={css.tableTransactions}>
        <thead className={css.tableHead}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr className={css.tableTr} key={item.id}>
              <td className={css.tableTd}> {item.type} </td>
              <td className={css.tableTd}>{item.amount}</td>
              <td className={css.tableTd}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }





