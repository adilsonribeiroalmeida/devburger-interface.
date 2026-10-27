import { useEffect, useState } from "react";
import CarouselModule from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import api from "../../services/api";
import { CardProduct } from "../CardProduct";
import { Container, Title } from "./styles";

const Carousel = CarouselModule.default;
const responsive = {
     superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 4,
     },

     desktop: {
          breakpoint: { max: 3000, min: 1280 },
          items: 4,
     },

     tablet: {
          breakpoint: { max: 1280, min: 690 },
          items: 3,
     },

     mobile: {
          breakpoint: { max: 690, min: 0 },
          items: 2,
     },
};

export function OffersCarousel() {
     const [offers, setOffers] = useState([]);

     useEffect(() => {
          async function loadProducts() {
               try {
                    const response = await api.get("/products");

                    const onlyOffers = response.data.filter(
                         (product) => product.offer
                    );

                    setOffers(onlyOffers);
               } catch (error) {
                    console.error("ERRO AO BUSCAR PRODUTOS:", error);
               }
          }

          loadProducts();
     }, []);

     return (
          <Container>
               <Title>Ofertas do Dia</Title>
               {offers.length > 0 ? (
                    <Carousel
                         responsive={responsive}
                         infinite={true}
                         partialVisible={false}
                         itemClass="carousel-item"
                    >
                         {offers.map((product) => (
                              <CardProduct
                                   key={product.id}
                                   product={product}
                              />
                         ))}
                    </Carousel>
               ) : (
                    <p>Nenhuma oferta disponÃ­vel.</p>
               )}
          </Container>
     );
}

