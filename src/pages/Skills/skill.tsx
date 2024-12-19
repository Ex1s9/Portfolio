import { FaCss3Alt, FaFigma, FaGitAlt, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { SiJavascript, SiRedux, SiTypescript, SiVite } from "react-icons/si";
import "./icon.css";
import "./skill.css";
const Skill: React.FC = () => {
   return (
      <main className="skill">
         <section className="skill-tech">
            <h2 className="skill-text"><span className="txt">Tech</span> stack:</h2>
            <div className="skill-tech-block">
               <FaReact className="skill-tech-react"/> 
               <FaHtml5 className="skill-tech-html"/> 
               <FaCss3Alt className="skill-tech-css"/> 
               <FaSass className="skill-tech-scss"/> 
               <SiJavascript className="skill-tech-js"/>
               <SiTypescript className="skill-tech-ts"/>
               <FaGitAlt className="skill-tech-git"/>
               <SiRedux className="skill-tech-redux"/>
               <FaFigma className="skill-tech-figma"/>
               <SiVite className="skill-tech-vite"/>
            </div>
            
         </section>
         
         <section className="soft">
            <h2 className="skill-text"><span className="txt">Soft</span> skill:</h2>
            <div className="soft-list">
               <ul className="soft-list-card">
                  <li>English (A2)</li>
                  <li>Russian (Native)</li>
               </ul>
               <ul className="soft-list-card">
                  <li>Teamwork, Communication</li>
                  <li>Problem-solving</li>
               </ul>
               <ul className="soft-list-card">
                  <li>Creative thinking, Adaptability</li>
                  <li>Leadership</li>
               </ul>
               <ul className="soft-list-card">
                  <li>Time management, Self-confidence</li>
                  <li>Motivation</li>
               </ul>
            </div>
         </section>
      </main>
   );
};

export default Skill;