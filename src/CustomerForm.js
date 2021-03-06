import React, {useState} from "react";
import reactDom from "react-dom";


export const CustomerForm = ({ firstName, onSubmit }) => {

const [customer, setCustomer] = useState({firstName});

const handleChangeFirstName = ({ target }) => setCustomer(customer => ({
    ...customer,
    firstName : target.value
}));

return <form id="customer" onSubmit={() => onSubmit(customer)}>
    <label htmlFor="firstName">First Name</label>

<input type="text" name="firstName" value={firstName} id="firstName" onChange={handleChangeFirstName} readOnly/>

</form>


}

