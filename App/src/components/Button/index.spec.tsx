
import { render } from '@testing-library/react';
import Button from '.';
describe('<Button />', () => {
  it('should text ', () => {
   
    const { getByText } = render(<Button />)
    expect(getByText("Button")).toBeInTheDocument()
  });
});
