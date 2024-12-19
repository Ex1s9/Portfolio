import ProjectCard from "./ProjectCard";

const Project = () => {
   return (
      <main>
         <section className="project">
            <h1>My projects</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, culpa. Eaque nesciunt suscipit ex! Pariatur fugit cupiditate velit dolore fugiat facere voluptatibus. Accusamus ex officia similique soluta repudiandae nisi nostrum?</p>

            {/* Блок с игрой камень-ножницы-бумага */}
            <ProjectCard 
               title='Game "Rock-Scissors-Paper"'
               description="This is my first project on JavaScript. This is a popular two-player game where each player simultaneously chooses one of three symbols: rock, scissors, paper.Rock beats scissors, but loses to paper. Scissors beat paper but lose to rock. Paper beats rock but loses to scissors.If both players choose the same symbol, the game ends in a draw. It’s a simple and quick game often used to make decisions or just for fun."
               stack={["HTML", "JavaScript", "SCSS"]}
               githubLink='https://github.com/Ex1s9/Rock-Paper-Scissors'
               demoLink='https://ex1s9.github.io/Rock-Paper-Scissors/'
               />

               {/* To-Do List */}
               <ProjectCard 
                  title="To-Do List"
                  description="This is my second project on JavaScript. This is a simple to-do list where you can add, remove, and mark tasks as completed. Tasks are stored in local storage so they persist even after refreshing the page."
                  stack={["HTML", "JavaScript", "SCSS"]}
                  githubLink="https://github.com/Ex1s9/to-do-list"
                  demoLink="https://ex1s9.github.io/to-do-list/"
               />

               {/* Portfolio */}
               <ProjectCard 
                  title="Portfolio"
                  description="This is my third project on React. This is a simple portfolio website where you can add, remove, and edit your projects. Projects are stored in local storage so they persist even after refreshing the page."
                  stack={["React", "JavaScript", "SCSS"]}
                  githubLink="https://github.com/Ex1s9/portfolio"
                  demoLink="https://ex1s9.github.io/portfolio/"
               />
         </section>
      </main>
   )
}

export default Project;