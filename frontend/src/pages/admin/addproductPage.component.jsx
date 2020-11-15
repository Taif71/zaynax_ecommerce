import React from 'react';
import { MDBCol, MDBRow, MDBCard, MDBCardBody, MDBInput, MDBBtn} from 'mdbreact';
import ImageUploader from 'react-images-upload';

// import {Link} from 'react-router-dom';

// import ProductCard from '../../components/product-card/product-card.component';
import Sidebar from '../../components/sidebarnav/sidebar.component';

class AddProducts extends React.Component {

    constructor(props) {
        super(props);
         this.state = { 
             pictures: [],
             productName: '',
             productPrice: null,
             discountRate: null,
             shippingCharge: null,
             size: '',
             color: '',
             switch1: true,

        };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    nameChange(e){
        // const inputId = e.target.name;
        const value = e.target.value;
       // this.setState({ [inputId]: value })
       this.setState({
           productName: value
       })
    }

    priceChange(e){
        // const inputId = e.target.name;
        const value = e.target.value;
       // this.setState({ [inputId]: value })
       this.setState({
           productPrice: value
       })
    }

    shippingCharge(e){
       
        const value = e.target.value;
      
       this.setState({
            shippingCharge: value
       })
    }


    rateChange(e){
       
        const value = e.target.value;
      
       this.setState({
            discountRate: value
       })
    }

    chargeChange(e) {
        const value = e.target.value;
        this.setState({
            shippingCharge: value
        });
    }

    colorChange(e) {
        const value = e.target.value;
        this.setState({
            color: value
        });
    }
    
    sizeChange(e) {
        const value = e.target.value;
        this.setState({
            size: value
        });
    }

    activeChange = nr => () => {
            let switchNumber = `switch${nr}`;
            this.setState({
              [switchNumber]: !this.state[switchNumber]
            });
    }

    formSubmit(event) {
        event.preventDefault();
        fetch('https://localhost:8000/admin/add-product', {
            method: 'post',
            body: {
            //  "first_name": this.refs.first_name.value
             "image": this.state.pictures,
             "productName": this.state.productName,
             "price": this.state.price,
             "discountRate": this.state.discountRate,
             "shippingCharge" : this.state.shippingCharge,
             "color": this.state.color,
             "size": this.state.size,
             "active": this.state.switch1             

            }
           });
          };
    

 
    render() {
    return (
        <div>
            <MDBRow style={{ background: "#EFEFEF"}}>
                <MDBCol sm="3">    
                    <Sidebar />
                </MDBCol>

                <MDBCol sm="9"> 

                   
                    <div style={{ marginLeft: "30px"}}>
                    <MDBRow>
                    <MDBCard>
                        <MDBCardBody>
                        <form onSubmit={this.formSubmit}>
                            <MDBRow className="mb-4">
                            <MDBCol >
                                {/* <img src="https://mdbootstrap.com/img/Others/documentation/1.jpg" className="img-fluid img-thumbnail" alt="" /> */}

                                <ImageUploader
                                    withIcon={true}
                                    buttonText='Choose images'
                                    onChange={this.onDrop}
                                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                    maxFileSize={5242880}
                                />
                            </MDBCol>
                            </MDBRow>
                                <div className="grey-text">
                                <MDBInput
                                    label="Product Name"
                                    icon="user"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                    value={this.state.productName}
                                    onChange={this.nameChange}

                                />
                                <MDBInput
                                    label="Product price (before discount)"
                                    icon="envelope"
                                    group
                                    type="Number"
                                    validate
                                    error="wrong"
                                    success="right"

                                    value={this.state.productPrice}
                                    onChange={this.priceChange}
                                />
                                <MDBInput
                                    label="Discount Rate"
                                    icon="exclamation-triangle"
                                    group
                                    type="Number"
                                    validate
                                    error="wrong"
                                    success="right"

                                    value={this.state.discountRate}
                                    onChange={this.rateChange}
                                />
                                <MDBInput
                                    label="Shipping Charge"
                                    icon="lock"
                                    group
                                    type="Number"
                                    validate

                                    value={this.state.shippingCharge}
                                    onChange={this.chargeChange}
                                />
                                <MDBInput
                                    label="Color"
                                    icon="lock"
                                    group
                                    type="text"
                                    validate

                                    value={this.state.color}
                                    onChange={this.colorChange}
                                />
                                <MDBInput
                                    label="Size"
                                    icon="lock"
                                    group
                                    type="text"
                                    validate

                                    value={this.state.size}
                                    onChange={this.sizeChange}
                                />
                                <MDBInput
                                    type='checkbox'
                                    className='custom-control-input'
                                    id='customSwitches'
                                    checked={this.state.switch1}
                                    onChange={this.activeChange(1)}
                                    readOnly
                                />
                                </div>
                                <div className="text-center py-4 mt-3">
                                <MDBBtn color="yellow" type="submit">
                                    Add Product
                                </MDBBtn>
                                </div>
                        </form>
                        </MDBCardBody>
                    </MDBCard>
                    </MDBRow>
                    </div>
                </MDBCol>
            </MDBRow>
            
        </div>
    );
}
}


export default AddProducts;