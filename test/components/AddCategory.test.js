import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory";

describe('first', () => {
    test('should change input value', () => { 
        render(<AddCategory onNewCategory={ ()=>{} } />)
        const input = screen.getByRole('textbox');
        
        fireEvent.input(input, {target: {value: 'Reberto'}});
        
        expect(input.value).toBe('Reberto')
    })
    
    test('should call onNewCategory if the input has a value', () => {
        const inputValue = 'Reberto'
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form')
        
        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);

        expect(input.value).toBe('')
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    })

    test('should not call onNewCategory if the input has no value', () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />)
        const form = screen.getByRole('form')
        
        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(0);
    })
})