import { useState } from "react";

export function useCardList() {
   const [isSelected, setIsSelected] = useState(false);
   const [selectedFavorite, setSelectedFavorite] = useState(false);

   const handleClickProductSelected = () => setIsSelected(!isSelected);
   const handleClickFavorite = () => setSelectedFavorite(!selectedFavorite);

   const textContentButton = isSelected ? 'selecionado' : 'selecionar';


   return { isSelected, selectedFavorite, textContentButton, handleClickProductSelected, handleClickFavorite };
}