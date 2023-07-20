import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProjectForm.module.css";

import { useEffect, useState } from "react";

function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});
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
  }, []);
  const submit = (e) => {
    e.preventDefault();
    // console.log(project);
    handleSubmit(project);
  };
  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
    // console.log(project);
  }
  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
    // console.log(project);
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        placeholder="Insira o nome do projeto"
        text="Nome do projeto"
        name="name"
        handleOnChange={handleChange}
        value={project.name ? project.name : ''}
      />
      <Input
        type="number"
        placeholder="Insira o orçamento total"
        text="Orçamento do projeto"
        name="budget"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ''}
      />
      <Select
        text="Selecione a categoria"
        name="category_id"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ''}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}
export default ProjectForm;
