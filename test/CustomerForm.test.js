import React from "react";
import { createContainer } from "./domManipulators";
import { CustomerForm } from '../src/CustomerForm'




describe('customerForm', () => {
    let render;
    let container;


beforeEach(() => {
    ({render, container} = createContainer())
})

const form = id => container.querySelector(`form[id="${id}"]`);



it('renders a form', () => {
    render(<CustomerForm />);
    expect(
        form('customer').not.toBeNull()
    ).not.toBeNull()
})


})
