import PropTypes from "prop-types";
import { ContainerButton } from "./styles";

export function CardButton({ onClick }) {
     return (
          <ContainerButton
               type="button"
               onClick={onClick}
               aria-label="Adicionar ao carrinho"
          >
               <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
               >
                    <path d="m5 11 4-7" />
                    <path d="m19 11-4-7" />
                    <path d="M3 11h18l-2 10H5L3 11Z" />
                    <path d="M9 15v3" />
                    <path d="M15 15v3" />
               </svg>
          </ContainerButton>
     );
}

CardButton.propTypes = {
     onClick: PropTypes.func,
};