import {
     Container,
     Banner,
     Title,
     Description,
     ProductsGrid,
     CategoriesContainer,
     CategoryButton,
} from "./styles";

import { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";

import api from "../../services/api";
import { CardProduct } from "../../components/CardProduct";

export function Menu() {
     const [products, setProducts] = useState([]);
     const [error, setError] = useState(false);
     const [searchParams, setSearchParams] = useSearchParams();

     const selectedCategory = searchParams.get("categoria") || "all";

     const setSelectedCategory = (category) => {
          if (category === "all") {
               setSearchParams({});
          } else {
               setSearchParams({ categoria: category });
          }
     };

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

     const categoryPrefixes = {
          hamburgueres: "burger_",
          bebidas: "drink_",
          entradas: "appe_",
          sobremesas: "dessert_",
     };

     const filteredProducts =
          selectedCategory === "all"
               ? products
               : products.filter((product) =>
                    product.path?.startsWith(
                         categoryPrefixes[selectedCategory]
                    )
               );

     return (
          <Container>
               <Banner>
                    <h1>
                         O MELHOR
                         <br />
                         HAMBÚRGUER
                         <br />
                         ESTÁ AQUI!
                    </h1>

                    <span>
                         Esse cardápio está irresistível!
                    </span>
               </Banner>

               <Title>Cardápio DevBurger</Title>
               <CategoriesContainer>
                    <CategoryButton
                         $active={selectedCategory === "all"}
                         onClick={() => setSelectedCategory("all")}
                    >
                         Todos
                    </CategoryButton>

                    <CategoryButton
                         $active={selectedCategory === "hamburgueres"}
                         onClick={() => setSelectedCategory("hamburgueres")}
                    >
                         Hambúrgueres
                    </CategoryButton>

                    <CategoryButton
                         $active={selectedCategory === "bebidas"}
                         onClick={() => setSelectedCategory("bebidas")}
                    >
                         Bebidas
                    </CategoryButton>

                    <CategoryButton
                         $active={selectedCategory === "entradas"}
                         onClick={() => setSelectedCategory("entradas")}
                    >
                         Entradas
                    </CategoryButton>

                    <CategoryButton
                         $active={selectedCategory === "sobremesas"}
                         onClick={() => setSelectedCategory("sobremesas")}
                    >
                         Sobremesas
                    </CategoryButton>
               </CategoriesContainer>

               {error ? (
                    <p>Não foi possível carregar os produtos.</p>
               ) : products.length > 0 ? (
                    <ProductsGrid>
                         {filteredProducts.length === 0 ? (
                              <p>Nenhum produto encontrado nesta categoria.</p>
                         ) : (
                              filteredProducts.map((product) => (
                                   <CardProduct
                                        key={product.id}
                                        product={product}
                                   />
                              ))
                         )}
                    </ProductsGrid>
               ) : (
                    <p>Carregando produtos...</p>
               )}
          </Container>
     );
}