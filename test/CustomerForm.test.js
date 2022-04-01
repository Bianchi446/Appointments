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

const expectToBeInputFieldOfTypeText = formElement => {
    expect(formElement).not.toBeNull();
    expect(formElement.tagName).toEqual('INPUT');
    expect(formElement.type).toEqual('text')
};

const firstNameField = () => form('customer').elements.firstName;

it('renders a form', () => {
    render(<CustomerForm />);
    expectToBeInputFieldOfTypeText(firstNameField())
})

    it('renders the first name field as a text box', () => {
        render(<CustomerForm />);
        const field = form('customer').elements.firstName;
        expect(field).not.toBeNull();
        expect(field.tagName).toEqual('INPUT');
        expect(field.type).toEqual('text');
})

    it('includes the existing value for the first name', () => {
        render(<CustomerForm firstName="Ashley"/>);
        expect(firstNameField().value).toEqual('Ashley');
    });

    it('renders a label for the first name field', () => {
        render();
        expect(labelFor('firstName').textContent).toEqual('First name')
    });
})
