import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import storage from '../DataFile/Data';

function TableComponent({ customerList, setCustomerToUpdate }) {
  const handleDelete = (email) => {
    storage.deleteItem(email);
  };

  const handleUpdate = (customer) => {
    setCustomerToUpdate(customer);
  };

  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>City</th>
          <th>Age</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {customerList.map((customer, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{customer.rol}</td>
            <td>{customer.city}</td>
            <td>{customer.age}</td>
            <td>
              <Button
                variant="primary"
                onClick={() => handleUpdate(customer)}
                style={{ padding: '5px 10px' }}
              >
                Update
              </Button>
            </td>
            <td>
              <Button
                variant="danger"
                onClick={() => handleDelete(customer.email)}
                style={{ padding: '5px 10px' }}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableComponent;
