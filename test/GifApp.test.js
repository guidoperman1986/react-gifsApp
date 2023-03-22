import { fireEvent, render, screen } from "@testing-library/react"
import { GifApp } from "../src/GifApp"

describe('Test on GifApp', () => {
    test('should match the snapshot', () => {
        const { container } = render(<GifApp />)
        screen.debug();
        expect(container).toMatchSnapshot()

    })

    test('should show h1 with text GifApp', () => {
        render(<GifApp />)
        const h1 = screen.getAllByText('GifApp');
        expect(h1).toBeTruthy();
    })
    
    test('should have a form', () => {
        render(<GifApp />)
        const form = screen.getAllByRole('form')
        expect(form).toBeTruthy();        
    })
    
    test('should have an input', ()=> {
        render(<GifApp />)
        const input = screen.getByRole('input');
        expect(input).toBeTruthy();    
    })
    
    test('should type into the input', () => {
        render(<GifApp />)
        const input = screen.getByRole('input');
        expect(input.value).toBe('')
        fireEvent.change(input, {target: {value: '123'}});
        expect(input.value).toBe('123')
    })
})