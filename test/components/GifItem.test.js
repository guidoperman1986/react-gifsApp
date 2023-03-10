import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('test on gifItem', () => {
    const title = 'pato';
    const url = 'http://localhost/pato.com';


    test('should match the snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot();
    })

    test('should show image with url and the alt', () => { 
        render(<GifItem title={title} url={url} />)
        // screen.debug();

        // expect(screen.getByRole('img').src).toBe(url)
        // expect(screen.getByRole('img').alt).toBe(title)

        const { src, alt } = screen.getByRole('img');

        expect(src).toBe(url)
        expect(alt).toBe(title)
    })

    test('should show the title in the component', () => {
        render(<GifItem title={title} url={url} />)

        expect( screen.getByText(title) ).toBeTruthy();
    })
})