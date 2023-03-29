
import { fireEvent, render } from '@testing-library/react';
import 'jest-styled-components';
import Button from '.';

describe('<Button />', () => {
  it('should text with component prop', () => {
    const textContent = 'Adicionar';

    const { getByText } = render(<Button textContent={textContent} />);
    
    const btn = getByText(textContent);

    expect(btn).toBeInTheDocument();
  });
});
