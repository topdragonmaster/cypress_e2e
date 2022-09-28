import ExchangeItem from '../ExchangeItem'
import './style.css'

import { IExchange } from '../../constants/types'

interface ITable {
  exchanges: IExchange[]
}

const Table: React.FC<ITable> = ({ exchanges }) => {
  const rows = ['Name', 'Country', 'URL', 'Logo', 'Rank']

  return (
    <div className="container">
      {
        exchanges.length == 0 ?
          <h1>loading...</h1> :
          <table data-cy="table">
            <thead>
              <tr>
                {rows.map(item => {
                  return <th key={`header-${item}`}>{item}</th>
                })}
              </tr>
            </thead>
            <tbody>
              {exchanges.map(item => (
                <ExchangeItem key={`${item.id}`} item={item} />
              ))}
            </tbody>
          </table>
      }
    </div>
  )
}

export default Table
