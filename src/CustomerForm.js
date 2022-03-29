import React from "react";
import reactDom from "react-dom";

export const CustomerForm = ({ firstName }) => 

<form id="customer">
    <label htmlFor="firstName">First Name</label>

<input type="text" name="firstName" value={firstName} id="firstName" readOnly/>

</form>
