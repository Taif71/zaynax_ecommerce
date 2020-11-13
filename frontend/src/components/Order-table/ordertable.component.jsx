import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const AllTable = () => {
  return (
      
    <MDBTable hover style={{background: "white" }}>
      <MDBTableHead>
        <tr>
          <th>SL</th>
          <th>Order No</th>
          <th>Item Price</th>
          <th>Action</th>
          <th>Status</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
          <td>@mdo</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}

export default AllTable;