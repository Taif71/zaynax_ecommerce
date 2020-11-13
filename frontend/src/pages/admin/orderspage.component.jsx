import React from 'react';

import {connect } from 'react-redux';


import { MDBCol, MDBRow, MDBContainer, MDBNav,MDBNavItem,MDBNavLink,MDBTabContent,MDBTabPane} from 'mdbreact';
import Sidebar from '../../components/sidebarnav/sidebar.component';
 import PillsJustified from '../../components/pills-nav-orders/pills-nav.component';

 import AllTable from '../../components/Order-table/ordertable.component';
 import ConfirmTable from '../../components/Order-table/confirm-table.component';
 import CancelTable from '../../components/Order-table/cancel-table.component';
 import PendingTable from '../../components/Order-table/pending-table.component';

 class OrdersPage extends React.Component{

    renderTable = () => {
        if(this.props.allSelected === true){
            <AllTable />
        } else if(this.props.pendingSelected === true){
            <PendingTable /> 
        } else if(this.props.confirmSelected === true){
            <ConfirmTable />
        } else if(this.props.cancelSelected === true){
            <CancelTable />
        }
    }

    render() {

    
    return (
        <div>
            
                <MDBRow style={{ background: "#EFEFEF"}}>

                    <MDBCol sm="3">
                        <Sidebar />
                    </MDBCol>

                    <MDBCol sm="9" className="mt-5">
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol>
                                    <PillsJustified />
                                </MDBCol>
                            </MDBRow>

                            <MDBRow>
                                <MDBCol className="mt-4">
                                    {/* {this.renderTable}
                                    <CancelTable /> */}
                                    {
                                    this.props.allSelected ? <AllTable /> : 
                                        this.props.pendingSelected ? <pendingSelected /> :
                                            this.props.confirmSelected ? <ConfirmTable /> :
                                                this.props.cancelSelected ? <cancelSelected /> : " "
                                    }
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBCol>
                </MDBRow>


            

        </div>
    );
}

}

const mapStateToProps = state => ({
    allSelected: state.admin.allSelected,
    pendingSelected: state.admin.pendingSelected,
    confirmSelected: state.admin.confirmSelected,
    cancelSelected: state.admin.cancelSelected
    
  });

export default connect(mapStateToProps)(OrdersPage);
// class OrdersPage extends React.Component{

//     state = {
//         items: {
//           default: "1",
//         }
//       };
    
//       togglePills = (type, tab) => e => {
//         e.preventDefault();
//         if (this.state.items[type] !== tab) {
//           let items = { ...this.state.items };
//           items[type] = tab;
//           this.setState({
//             items
//           });
//         }
//       };
//     render() {

    
//     return (
//         <div>
            
//                 <MDBRow style={{ background: "#EFEFEF"}}>

//                     <MDBCol sm="3">
//                         <Sidebar />
//                     </MDBCol>

//                     <MDBCol sm="9">
//                     <MDBContainer>
//                     <MDBNav pills color="secondary">
//                     <MDBNavItem>
//                         <MDBNavLink
//                         link
//                         to="#"
//                         active={this.state.items["default"] === "1"}
//                         onClick={this.togglePills("default", "1")}
//                         >
//                         Active
//                         </MDBNavLink>
//                     </MDBNavItem>
//                     <MDBNavItem>
//                         <MDBNavLink
//                         link
//                         to="#"
//                         active={this.state.items["default"] === "2"}
//                         onClick={this.togglePills("default", "2")}
//                         >
//                         Link
//                         </MDBNavLink>
//                     </MDBNavItem>
//                     <MDBNavItem>
//                         <MDBNavLink
//                         link
//                         to="#"
//                         active={this.state.items["default"] === "3"}
//                         onClick={this.togglePills("default", "3")}
//                         >
//                         Link
//                         </MDBNavLink>
//                     </MDBNavItem>
//                     <MDBNavItem>
//                         <MDBNavLink
//                         link
//                         to="#"
//                         active={this.state.items["default"] === "4"}
//                         onClick={this.togglePills("default", "4")}
//                         >
//                         Help
//                         </MDBNavLink>
//                     </MDBNavItem>
//                     </MDBNav>
//                     <MDBTabContent activeItem={this.state.items["default"]}>
//                     <MDBTabPane tabId="1">
//                         <p>
//                         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                         Nihil odit magnam minima, soluta doloribus reiciendis
//                         molestiae placeat unde eos molestias. Quisquam aperiam,
//                         pariatur. Tempora, placeat ratione porro voluptate odit
//                         minima.
//                         </p>
//                     </MDBTabPane>
//                     <MDBTabPane tabId="2">
//                         <p>
//                         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                         Nihil odit magnam minima, soluta doloribus reiciendis
//                         molestiae placeat unde eos molestias. Quisquam aperiam,
//                         pariatur. Tempora, placeat ratione porro voluptate odit
//                         minima.
//                         </p>
//                     </MDBTabPane>
//                     <MDBTabPane tabId="3">
//                         <p>
//                         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                         Nihil odit magnam minima, soluta doloribus reiciendis
//                         molestiae placeat unde eos molestias. Quisquam aperiam,
//                         pariatur. Tempora, placeat ratione porro voluptate odit
//                         minima.
//                         </p>
//                         <p>
//                         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                         Nihil odit magnam minima, soluta doloribus reiciendis
//                         molestiae placeat unde eos molestias. Quisquam aperiam,
//                         pariatur. Tempora, placeat ratione porro voluptate odit
//                         minima.
//                         </p>
//                     </MDBTabPane>
//                     <MDBTabPane tabId="4">
//                         <p>
//                         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                         Nihil odit magnam minima, soluta doloribus reiciendis
//                         molestiae placeat unde eos molestias. Quisquam aperiam,
//                         pariatur. Tempora, placeat ratione porro voluptate odit
//                         minima.
//                         </p>
//                     </MDBTabPane>
//                     </MDBTabContent>
//                 </MDBContainer>
//                     </MDBCol>
//                 </MDBRow>


            

//         </div>
//     );
// }

// }

// export default OrdersPage;