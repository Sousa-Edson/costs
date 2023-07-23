import {Link, link} from 'react-router-dom'

import styles from "./ProjectCard.module.css";

import { BsPencil, BsFillTrashFill } from "react-icons/bs";

function ProjetctCard({ id, name, budget, category, handleRemove }) {
  return (
    <div className={styles.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Orçamento:</span>R${budget}
      </p>
      <p>{category.toLowerCase()}</p>
      <p className={styles.category_text}>
        <span className={`${styles[category.toLowerCase()]}`}></span>
        {category}
      </p>
      <div className={styles.project_card_actions}>
      <Link to="/"><BsPencil/> Editar</Link>
        <button>
            <BsFillTrashFill/> Excluir
        </button>
      </div>
    </div>
  );
}
export default ProjetctCard;
