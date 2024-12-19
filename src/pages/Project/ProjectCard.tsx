import Divider from "../../components/Devider/Divider";
import "./project.css";

type ProjectCardProps = {
   title: string;
   description: string;
   stack: string[];
   githubLink: string;
   demoLink: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, stack, githubLink, demoLink }) => {
   return (
   <div className="project-card">
      <Divider />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-container">
         <article className="project-container-stack">
            <a>Stack: {stack.join(", ")}</a>
         </article>
         <article className="project-link">
            <p>Link to GitHub repository:<a href={githubLink}> {githubLink}</a></p>
            <p>Link to deployed project:<a href={demoLink}> {demoLink}</a></p>
         </article>
      </div>
   </div>
   );
};

export default ProjectCard;