import { Col, Row } from 'react-bootstrap'
import items from './../data/items.json'
import { StoreItem } from '../Components/StoreItem'

const Store = () => {
    return (
        <div>
            <h1>Store</h1>
            <Row>
                {items.map((item)=>
                   (
                        <Col key={item.id}>
                            <StoreItem {...item} />
                        </Col>
                    )
                )}
            </Row>
        </div>
    )
}

export default Store