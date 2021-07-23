import { render, screen } from '@testing-library/react'
import Options from '../Options'


test('Displays image for each scoop from server', async() => {
    render( <Options optionType="scoops" /> )

    //find images
    const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i })
    expect(scoopImages).toHaveLength(2);

    // confirm alt text of images
    const altText = scoopImages.map((element) => element.alt );
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop'])
})


test('Displays the toppings from server', async() => {

    render( <Options optionType="toppings" /> )

    const toppingImages = await screen.findAllByRole('img', { name: /toppings$/i })
    expect(toppingImages).toHaveLength(3);

    const altText = toppingImages.map((element) => element.alt )
    expect(altText).toEqual(['Cherries toppings', 'M&Ms toppings', 'Hot fudge toppings'])
})