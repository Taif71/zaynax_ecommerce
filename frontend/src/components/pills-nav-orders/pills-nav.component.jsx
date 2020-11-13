import React, { Component } from "react"; import { MDBContainer, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import './pill-nav.styles.css';

// import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { setAll, setPending, setConfirm, setCancel } from "../../redux/admin/admin.actions";

// import BasicTable from '../Order-table/ordertable.component';
class PillsJustified extends Component {
state = {
  items: {
    justified: "1"
  }  
};

togglePills = (type, tab) => e => {
  e.preventDefault();
  if (this.state.items[type] !== tab) {
    let items = { ...this.state.items };
    items[type] = tab;
    this.setState({
      items
    });
  }

  if(tab === '1'){
    this.props.setAll({
      allSelected: true,
      pending:false,
      confirmSelected:false,
      cancelSelected: false
    })
  } else if(tab === '2'){
    this.props.setPending({
      allSelected: false,
      pendingSelected: true,
      confirmSelected: false,
      cancelSelected: false
    })
  } else if(tab === '3'){
    this.props.setConfirm({
      allSelected: false,
      pendingSelected: false,
      confirmSelected: true,
      cancelSelected: false
    })
  } else if(tab === '4') {
    this.props.setCancel({
      allSelected: false,
      pendingSelected: false,
      confirmSelected: false,
      cancelSelected: true
    })
  }
};


render() {
  return (
      <MDBContainer>
        <MDBNav pills color="" className="nav-justified" >
          <MDBNavItem
            >
            <MDBNavLink
              link
              to="#"
              active={this.state.items["justified"] === "1"}
              onClick={this.togglePills("justified", "1")}
              style={{ textAlign: "left"}}              
            >
              All
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem className="pill-styles">
          
            <MDBNavLink
              link
              to="/"
              active={this.state.items["justified"] === "2"}
              onClick={this.togglePills("justified", "2")}
              style={{ textAlign: "left"}}
              
            >
              Pending
            </MDBNavLink>
            
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              link
              to="#"
              active={this.state.items["justified"] === "3"}
              onClick={this.togglePills("justified", "3")}
              style={{ textAlign: "left"}}
            >
              Confirmed
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              link
              to="#"
              active={this.state.items["justified"] === "4"}
              onClick={this.togglePills("justified", "4")}
              style={{ textAlign: "left"}}
            >
              Cancelled
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
      </MDBContainer>
    );
  }
}



const mapStateToProps = state => ({
  setAll: state.admin.allSelected,
  setPending: state.admin.pendingSelected,
  setConfirm: state.admin.confirmSelected,
  setCancel: state.admin.cancelSelected
  
});
const mapDispatchToProps = dispatch => ({
  setAll: all => dispatch(setAll(all)),
  setPending: pending => dispatch(setPending(pending)),
  setConfirm: confirm => dispatch(setConfirm(confirm)) ,
  setCancel: cancel => dispatch(setCancel(cancel))
});

export default connect(mapStateToProps, mapDispatchToProps)(PillsJustified);