import React from "react";
import reactDom from "react-dom";

export const CustomerForm = ({ firstName }) => <form id="customer">

<input type="text" name="firstName" value={firstName} readOnly/>

</form>
