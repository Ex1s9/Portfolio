import { Route, Routes } from "react-router-dom";
import About from "../../pages/About/about";
import Contacts from "../../pages/Contacts/contacts";
import Project from "../../pages/Project/Project";
import Skill from "../../pages/Skills/skill";
import { Header } from "../Header/header";

const AppRouter: React.FC = () => {
   return (
      <div>
         <Header />
         <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/project" element={<Project />} />
         </Routes>
      </div>
      
   )
}

export default AppRouter;