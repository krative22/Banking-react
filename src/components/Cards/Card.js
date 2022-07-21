import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import avtar from '../../assets/images/avatar18.gif'
import { Link } from 'react-router-dom'

const Cards = (props) => {
  return (
      <Card>
          <Image src={avtar} wrapped ui={false} />
    <Card.Content>
              <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
                  <span className='date'>{ props.description}</span>
      </Card.Meta>
      <Card.Description>
                  {props.summary}
          <Link to="/transaction">
          <button className="home-button" type="submit">Transactions</button>
          </Link>
      </Card.Description>
    </Card.Content>
  </Card>
)
}

export default Cards