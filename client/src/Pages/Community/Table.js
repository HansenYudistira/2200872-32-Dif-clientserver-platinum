import React,{useState} from 'react';
import ModalProfile from './modal';

const Table = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRowClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="table-container" style={{ backgroundColor: '#40058A' }}>
    <div className='table-title'>
    <h1>SOBAT BERMAIN</h1>
    </div>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Username</th>
            <th>Country</th>
            <th>Score</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={handleRowClick}>
          <td>
          
  <img
    src="https://lh5.googleusercontent.com/xo6zDzj4Mq8JTuh31DRdzWPkmeekU1ykdvy7gmdGNkBnVzHoULgCA_MpL1ybOV2GKEkbvmswUl0iQW0lvnNQe3gqOFi_-bbt3MBzOAla29FvVN753jPZS87Bn7HyXoQ-dwA-ioYg" style={{ height:'30px', width:'auto' }}
    alt="Cell1"
    className="mr-2"
  />
</td>

            <td>
            
              <i className="fa fa-download mr-2 white-text" aria-hidden="true"></i>
              Cell2
              
            </td>
            <td>
            
              <i className="fa fa-download mr-2 white-text" aria-hidden="true"></i>
              Cell2
              
            </td>
            <td>
            
              <i className="fa fa-download mr-2 white-text" aria-hidden="true"></i>
              Cell2
            
            </td>
            <td>
           
              <i className="fa fa-download mr-2 white-text" aria-hidden="true"></i>
              Cell2
              
            </td>
          </tr>
        </tbody>
        {isModalOpen && (
        <ModalProfile onClose={() => setIsModalOpen(false)}>
         <ModalProfile />
        </ModalProfile>)}
      </table>
    </div>
  );
};

export default Table;
