import { render } from "@testing-library/react"
import 'jest-styled-components';
import FavoriteButton from "."

describe('<FavoriteButton />', () => {
   it("should color icon when clicked", () => {
      const { getByRole } = render(<FavoriteButton isSelected={true} handleClick={() => { }} />)
      const btn = getByRole('button')
      expect(btn).toHaveStyleRule('background-color', '#FF0000');     
   })
    it('should color when he isnt clicked', () => {
      const { getByRole } = render(<FavoriteButton isSelected={false} handleClick={() => {}} />);
      const btn = getByRole('button');
      expect(btn).toHaveStyleRule('background-color', '#f5f5f5');
    });
})