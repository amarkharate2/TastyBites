import { render, screen, fireEvent, within } from '@testing-library/react';
import App from './App';
beforeEach(() => { localStorage.clear(); window.location.hash = '#/'; });
test('search filters menu and shows empty result', () => {
    render(<App />);
    fireEvent.change(screen.getByRole('searchbox'), { target: { value: 'pizza' } }); expect(screen.getByText('Margherita Pizza')).toBeInTheDocument(); expect(screen.queryByText('Classic Veg Burger')).not.toBeInTheDocument(); fireEvent.change(screen.getByRole('searchbox'), { target: { value: 'xyz' } }); expect(screen.getByText(/No matching items/)).toBeInTheDocument();
});
test('cart merges items, updates quantity and places demo order', () => {
    render(<App />); const card = screen.getByText('Classic Veg Burger').closest('article');
    fireEvent.click(within(card).getByText('Add to cart'));
    fireEvent.click(within(card).getByText('Add to cart'));
    fireEvent.click(screen.getByText('Cart (2)'));
    expect(screen.getByText('Total: ₹198')).toBeInTheDocument(); fireEvent.click(screen.getByRole('button', { name: /Increase Classic/ }));
    expect(screen.getByText('Total: ₹297')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Place demo order'));
    expect(screen.getByText('Demo order placed!')).toBeInTheDocument();
    expect(screen.getByText('Cart (0)')).toBeInTheDocument();
});
test('demo sign in and sign out', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Sign in'));
    fireEvent.change(screen.getByLabelText('Your name'), { target: { value: 'Alex' } });
    fireEvent.click(screen.getByText('Continue')); expect(screen.getByText('Hi, Alex')).toBeInTheDocument(); fireEvent.click(screen.getByText('Sign out')); expect(screen.getByText('Sign in')).toBeInTheDocument();
});
