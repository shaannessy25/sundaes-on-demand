import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Options from '../Options'
import OrderDetailsProvider from '../../../context/OrderDetails'

test('update scoop subtotal when scoops change', async () => {
    render(<Options optionType='scoops' />, { wrapper: OrderDetailsProvider });

    //make sure total starts out at $0.00
    const scoopsSubTotal = screen.getByText('Scoops total: $', { exact: false })
    expect(scoopsSubTotal).toHaveTextContent('$0.00')

    // update vanilla scoops to 1 and check the subtotal
    const vanillaInput = await screen.findByRole('spinbutton', { name: 'Vanilla'})

    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, '1')
    expect(scoopsSubTotal).toHaveTextContent('2.00');


    // update chocolate scoops to 2 and check subtotal
    const chocoalteInput = await screen.findByRole('spinbutton', { name: 'Chocolate' })
    userEvent.clear(chocoalteInput)
    userEvent.type(chocoalteInput, '2')
    expect(scoopsSubTotal).toHaveTextContent('6.00')
})