import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

describe('tests on GifGrid', () => { 
    test('should show initial loading', () => { 
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        const category = 'One Punch'

        render(<GifGrid category={category}/>)
        // screen()

        expect(screen.getByText('Loading...'))
        expect(screen.getByText(category))
    })

    test('should show items when the app fetchs data', () => {
        const gifs = [
            {
                id: 'Abc',
                title: 'Algo',
                url: 'https://pato.com'
            },
            {
                id: 'Abcd',
                title: 'Algo mas',
                url: 'https://pato-2.com'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        
        const category = 'One Punch'
        render(<GifGrid category={category}/>)

        expect(screen.getAllByRole('img').length).toBe(2)
    })
})