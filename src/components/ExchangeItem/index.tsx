import { useNavigate } from 'react-router-dom'

import { IExchange } from '../../constants/types'

interface IItem {
  item: IExchange
}

const ExchangeItem: React.FC<IItem> = ({ item }) => {
  const navigate = useNavigate()
  const { name, trust_score_rank, country, url, image } = item

  return (
    <tr
      onClick={() => {
        navigate(`/${name}`, { state: { rank: trust_score_rank } })
      }}
    >
      <td>{name}</td>
      <td>{country}</td>
      <td>{url}</td>
      <td>
        <img src={image} alt="Logo" height={30} width={30} />
      </td>
      <td>{trust_score_rank}</td>
    </tr>
  )
}

export default ExchangeItem
