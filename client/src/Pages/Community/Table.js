import React from 'react';

const Table = () => {
  return (
    <div className="table-container" style={{ backgroundColor: '#40058A' }}>
    <div className='table-title'>
    <h1>SOBAT BERMAIN</h1>
    </div>
      <table>
        <thead>
          <tr>
            <th>Lorem</th>
            <th>Ipsum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <i className="far fa-gem mr-2 white-text" aria-hidden="true"></i>
              Cell1
            </td>
            <td>
              <i className="fa fa-download mr-2 white-text" aria-hidden="true"></i>
              Cell2
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
