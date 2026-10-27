import PropTypes from "prop-types";

import { Container, CardImage } from "./styles";
import { CardButton } from "../CardButton";

export function CardProduct({ product }) {
     return (
          <Container>
               {product.url && (
                    <CardImage
                         src={product.url}
                         alt={product.name}
                    />
               )}

               <h3>{product.name}</h3>

               <p>
                    {Number(product.price).toLocaleString("pt-BR", {
                         style: "currency",
                         currency: "BRL",
                    })}
               </p>

               <CardButton
                    onClick={() => {
                         alert(`${product.name} selecionado!`);
                    }}
               />
          </Container>
     );
}

CardProduct.propTypes = {
     product: PropTypes.object.isRequired,
};