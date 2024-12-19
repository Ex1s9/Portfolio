import About from "../../pages/About/about";
import Skill from "../../pages/Skills/skill";

interface Routes {
   path: string,
   element: React.FC
}

export const publicRoutes: Routes[] = [
   { path: '/about', element: About },
   { path: '/skill', element: Skill}
];