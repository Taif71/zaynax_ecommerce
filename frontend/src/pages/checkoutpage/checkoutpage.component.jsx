import React from 'react';

import {Button, Container, Card, Row, Col} from 'reactstrap';

const CheckoutPage = () => {

    return (
        <div>
            <Container>
               <Button className="button" color="success">success</Button>

               <Row>
                   <Col sm="8">
                       <Card>
                           
                       </Card>
                   </Col>
                   <Col sm="4">
                   
                   </Col>

                   
               </Row>

            </Container>
        </div>
    );
}

export default CheckoutPage;