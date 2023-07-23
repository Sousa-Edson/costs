import { useLocation } from "react-router-dom";

import Message from "../layout/Message";

import style from "./Projects.module.css";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";

function Projects() {
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }
  return (
    <div className={style.project_container}> 
      <div className={style.title_container}>
        <h1>Meus projetos</h1>
        <LinkButton to="/newProject" text="Criar Projetos" />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
        <p>Projetos...</p>
      </Container>
    </div>
  );
}
export default Projects;
