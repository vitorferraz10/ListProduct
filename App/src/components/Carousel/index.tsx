import * as S from './styled'
import { sampleProduct } from '../../data/sampleProduct';
import Button from '../Button';
import CardProduct from '../Card';


const CarouselProducts = () => {
  return (
    <S.ContainerList>
      {sampleProduct.map((item, i) => (
         <CardProduct
         image={item.image}
          name={item.name}
          description={item.description}
          discount={item.discount}
          installments={item.installments}
          price={item.price}
        />
      ))}
    </S.ContainerList>
  );
}

export default CarouselProducts