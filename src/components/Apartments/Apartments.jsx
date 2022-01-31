import { v4 as uuidv4 } from 'uuid'

import Apartment from 'components/Apartment/Apartment'

const Apartments = ({ apartaments }) => {
  return (
    <ul>
      {apartaments.map((apartment) => (
        <Apartment {...apartment} key={uuidv4()} />
      ))}
    </ul>
  )
}

export default Apartments
