import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProjectForm.module.css";

import { useEffect, useState } from "react";

function ProjectForm({ btnText }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: { "Content-Type": "applicatio/json" },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  },[]);
  return (
    <form className={styles.form}>
      <Input
        type="text"
        placeholder="Insira o nome do projeto"
        text="Nome do projeto"
        name="name"
      />
      <Input
        type="number"
        placeholder="Insira o orçamento total"
        text="Orçamento do projeto"
        name="budget"
      />
      <Select
        text="Selecione a categoria"
        name="category_id"
        options={categories}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}
export default ProjectForm;
