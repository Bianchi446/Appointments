import React, {useState} from "react";
import { createContainer } from "./domManipulators";
import { CustomerForm } from "../src/CustomerForm";
import ReactTestUtils from 'react-dom/test-utils'

describe('CustomerForm', () => {
    let render, container

    beforeEach(() => {
        ({render , container} = createContainer())
    });

    const form = id => container.querySelector(`form[id="${id}"]`);

    const firstNameField = () => form('customer').elements.firstName;

    const labelFor = formElement => container.querySelector(`label[for="${formElement}"]`);


    const expectToBeInputOfTypeText = formElement => {
        expect(formElement).not.toBeNull();
        expect(formElement.tagName).toEqual('INPUT');
        expect(formElement.type).toEqual('text')
    }

    it('Renders as a text box', () => {
        render(<CustomerForm/>);
        expectToBeInputOfTypeText(firstNameField());
    })

    it('renders a form', () => {
        render(<CustomerForm />);
        expect(form('customer')).not.toBeNull();
        });

        // TESTS that define the first name field

        describe('first name field', () => {
            it('renders the first name field as a text box', () => {
                render(<CustomerForm />);
        
                const field = form('customer').elements.firstName;
        
                expect(field).not.toBeNull();
                expect(field.tagName).toEqual('INPUT');
                expect(field.type).toEqual('text')
            })    
        
            it('includes the existing value for the first name', () => {
                render(<CustomerForm firstName="Ashley"/>);
                const field = form('customer').elements.firstName;
                expect(firstNameField().value).toEqual('Ashley')
            })
        
            it('renders a label for the first name field', () => {
                render(<CustomerForm />);
                expect(labelFor('firstName')).not.toBeNull();
                expect(labelFor('firstName').textContent).toEqual('First Name');
            });
        
            it('assigns an id that matches the label id to the first name field', () => {
                render(<CustomerForm />);
                expect(firstNameField().id).toEqual('firstName')
            });
        
            it('saves existing first name when summited', async () => {
                expect.hasAssertions();
                render(                                                                  // Arrange phase
                    <CustomerForm 
                    firstName="Ashley"
                    onSubmit={({ firstName }) => expect(firstName).toEqual('Ashley')}     // Assert Phase
                    />
                );
                await ReactTestUtils.Simulate.change(firstNameField() ,  {
                    target : {value : "Ashley"}
                })
                await ReactTestUtils.Simulate.submit(form('customer'));
            });
        })

    
    
    // Tests for two more fields, with different id and labels

    

});

