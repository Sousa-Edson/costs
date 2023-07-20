import {useNavigate}from 'react-router-dom'

import ProjectForm from "../project/ProjectForm";
import styles from "./NewProject.module.css";
function NewProject() {
  const history = useNavigate()
  function createPost(project){
    // initializa cost and service
    project.cost=0;
    project.service=[]
 
      fetch('http://localhost:5000/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(project),
      })
        .then((resp) => resp.json())
        .then((data) => {
          history('/projects', {message : "Projeto criado com sucesso!"});

        })
    }
  
  return (
    <div className={styles.newProject_container}>
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
    </div>
  );
}
export default NewProject;
