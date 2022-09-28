import { useNavigate } from 'react-router-dom'

import { IExchange } from '../../constants/types'

interface IItem {
  item: IExchange
}

const ExchangeItemCard: React.FC<IItem> = ({ item }) => {
  const navigate = useNavigate()
  const { name, trust_score_rank, country, url, image } = item

  return (
    <div className='mobile-card' onClick={() => {navigate(`/${name}`, { state: { rank: trust_score_rank }})
         }}>
      <p>Name: {name}</p>
      <p>Country: {country}</p>
      <p>Url: {url}</p>
      <div className='mobile-image'>
        <p>Logo:&nbsp;</p>
        <img src={image} alt="Logo" height={30} width={30} />
      </div>
      <p>Rank: {trust_score_rank}</p>
    </div>
  )
}

export default ExchangeItemCard