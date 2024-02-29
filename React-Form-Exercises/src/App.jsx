import { useEffect, useState } from 'react';
import './App.css'
import FormComponent from './FrontEndFile/Form'
import storage from './DataFile/Data';
import TableComponent from './FrontEndFile/table'

function App() {
  const [customerList, setCustomerList] = useState([]);
  const [customerToUpdate, setCustomerToUpdate] = useState(null);

  useEffect(() => {
    updateCustomerList();
  }, []);

  const updateCustomerList = () => {
    let cust_list = storage.readAllItems();
    setCustomerList(cust_list);
  };

  return (
    <div className="App">
      <FormComponent
        updateCustomerList={updateCustomerList}
        customerToUpdate={customerToUpdate}
        setCustomerToUpdate={setCustomerToUpdate}
      />
      <TableComponent customerList={customerList} setCustomerToUpdate={setCustomerToUpdate} />
    </div>
  );
}

export default App;
