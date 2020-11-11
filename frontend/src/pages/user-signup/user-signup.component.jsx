import React from 'react';


import {Form, FormGroup, Input, Label, Row, Col, Button} from 'reactstrap';
const UserSignup = () => {
    return (
        <div>
            <Row>    
                <Col>
                <Form style={{ width: "300px" }} className="form-bg">
                <FormGroup>
                    <Label for="exampleEmail" style={{ textAlign: "left" }}>Phone Number</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </FormGroup>
                <Button>Sign Up</Button>
                </Form>
                </Col>
            </Row>                
        </div>
    );
}

export default UserSignup;