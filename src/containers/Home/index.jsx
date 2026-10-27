import { CategoriesCarousel } from "../../components/CategoriesCarousel";
import { OffersCarousel } from "../../components/OffersCarousel";
import { ProductsCarousel } from "../../components/ProductsCarousel";

import { Banner, Container, Content } from "./styles";

export function Home() {
     return (
          <div>
               <Banner>
                    <h1>Bem-vindo(a)!</h1>
               </Banner>

               <Container>
                    <Content>
                         <CategoriesCarousel />
                         <OffersCarousel />
                         <ProductsCarousel />
                    </Content>
               </Container>
          </div>
     );
}