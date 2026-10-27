import { useEffect, useState } from "react";
import CarouselModule from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import api from "../../services/api";
import { CardProduct } from "../CardProduct";
import { Container, Title } from "./styles";

const Carousel = CarouselModule.default || CarouselModule;

const responsive = {
     desktop: {
          breakpoint: { max: 4000, min: 1024 },
          items: 4,
     },
     tablet: {
          breakpoint: { max: 1024, min: 690 },
          items: 3,
     },
     mobile: {
          breakpoint: { max: 690, min: 0 },
          items: 2,
     },
};

export function ProductsCarousel() {
     const [products, setProducts] = useState([]);
     const [error, setError] = useState(false);

     useEffect(() => {
          async function loadProducts() {
               try {
                    const response = await api.get("/products");
                    setProducts(response.data);
               } catch (err) {
                    console.error("Erro ao buscar produtos:", err);
                    setError(true);
               }
          }

          loadProducts();
     }, []);

     return (
          <Container>
               <Title>Todos os Produtos</Title>

               {error ? (
                    <p>Não foi possível carregar os produtos.</p>
               ) : products.length > 0 ? (
                    <Carousel
                         responsive={responsive}
                         arrows
                         infinite={products.length > 4}
                         itemClass="product-carousel-item"
                    >
                         {products.map((product) => (
                              <CardProduct key={product.id} product={product} />
                         ))}
                    </Carousel>
               ) : (
                    <p>Nenhum produto disponível.</p>
               )}
          </Container>
     );
}