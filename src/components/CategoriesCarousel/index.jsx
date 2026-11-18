import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CarouselModule from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import api from "../../services/api";
import { Container, Title, ContainerItems } from "./styles";

const Carousel = CarouselModule.default || CarouselModule;
const categorySlugs = {
     "hambúrgueres": "hamburgueres",
     "hamburgueres": "hamburgueres",
     bebidas: "bebidas",
     entradas: "entradas",
     sobremesas: "sobremesas",
};

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

export function CategoriesCarousel() {
     const navigate = useNavigate();

     const [categories, setCategories] = useState([]);
     const [error, setError] = useState(false);

     useEffect(() => {
          async function loadCategories() {
               try {
                    const response = await api.get("/categories");
                    setCategories(response.data);
               } catch (err) {
                    console.error("Erro ao buscar categorias:", err);
                    setError(true);
               }
          }

          loadCategories();
     }, []);

     return (
          <Container>
               <Title>Categorias</Title>

               {error ? (
                    <p>Não foi possível carregar as categorias.</p>
               ) : categories.length > 0 ? (
                    <Carousel
                         responsive={responsive}
                         arrows
                         infinite={categories.length > 4}
                         itemClass="carousel-item"
                    >
                         {categories.map((category) => (
                              <ContainerItems
                                   key={category.id}
                                   onClick={() => {
                                        const categoryName = category.name
                                             .trim()
                                             .toLocaleLowerCase("pt-BR");

                                        const categorySlug = categorySlugs[categoryName];

                                        if (!categorySlug) {
                                             console.warn("Categoria não mapeada:", category.name);
                                             return;
                                        }

                                        navigate({
                                             pathname: "/menu",
                                             search: `?categoria=${categorySlug}`,
                                        });
                                   }}
                              >
                                   <img
                                        src={category.url}
                                        alt={category.name}
                                   />
                                   <p>{category.name}</p>
                              </ContainerItems>
                         ))}
                    </Carousel>
               ) : (
                    <p>Nenhuma categoria disponível.</p>
               )}
          </Container>
     );
}