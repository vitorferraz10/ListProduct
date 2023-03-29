import React from 'react'
import * as S from './styled'
import IconFavorite from '../../assets/favorite.png'

const FavoriteButton = (props: {isSelected: boolean, handleClick: () => void}) => {
  return (
    <S.FavButton isSelected={props.isSelected} onClick={props.handleClick}>
      <img src={IconFavorite} />
    </S.FavButton>
  );
}

export default FavoriteButton