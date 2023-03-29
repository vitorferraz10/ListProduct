import * as S from  './styled'
import { ProductType } from '../../data/type';
import Button from '../Button';
import FavoriteButton from '../FavoriteButton';
import { useCardList } from '../../hooks/useCard';

const CardProduct = ({ description, discount, installments, price, image }: ProductType) => {
  const { textContentButton, selectedFavorite, handleClickFavorite, handleClickProductSelected } = useCardList();
  return (
    <S.Card>
      <S.Image src={image} />
      <S.TextProductDescription>{description}</S.TextProductDescription>
      <S.TextDiscount>R$ {discount.toFixed(2)}</S.TextDiscount>
      <S.TextValueWithDiscount>R$ {price.toFixed(2)}</S.TextValueWithDiscount>
      <S.TextInstallment>
        em até{' '}
        <span>
          {installments}x de R$ {(price / installments).toFixed(2)}
        </span>{' '}
        sem juros
      </S.TextInstallment>
      <S.ButtonCard>
        <Button textContent={textContentButton} handleClick={handleClickProductSelected} />
      </S.ButtonCard>

      <FavoriteButton isSelected={selectedFavorite} handleClick={handleClickFavorite} />
    </S.Card>
  );
};

export default CardProduct;