import './about.css';

const About: React.FC = () => {
   return (
   <header className="container">
      <div className="content">
      <span className='blur'></span>
      <span className='blur'></span>
      <h1>Hi, i'm <span>Roma</span>, Frontend Developer</h1>
      <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. 
         Maxime harum numquam, velit iste quos autem exercitationem, tempora maiores ipsa qui,
         non nihil vitae ut ab rem! Quaerat amet ducimus veritatis.
      </p>
      </div>
      <div className="images">
      <img src="src/pages/About/DSC08235 (2).jpg" alt="#" className='image'/>
      </div>
   </header>
   )
}

export default About;