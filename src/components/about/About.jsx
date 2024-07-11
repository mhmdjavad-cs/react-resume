import '../../css/about.css';
import AboutImg from '../../assets/profile-photo.png';
import Info from './Info';


function About(){

    return (
        <section className="about section" id="about">
            <h2 className="section__title">
                About Me
            </h2>
            <span className="section__subtitle">My Introduction</span>
        
        
        
            <div className='about__container container grid'>
                <img src={AboutImg} alt = "" className='about__img'/>

                <div className='my-noname-div'> 
                    <div className="about__data">
                        <Info /> 
                    </div>

                    <p className="about__description">
                        I'm a computer scientist and also a full stack developer. I create web pages using mostly React and Django. but I'm also familiar with technologies like Flask or FastAPI. or even fullstack frameworks like NextJS. feel free to hire me for your project or hire me to work with your team.
                    </p>

                    <a href="hi" className="button button--flex cv__download">
                        download my CV
                        <i class='bx bx-file bx-tada' ></i> 
                    </a>
                </div>

            </div>
        
        
        
        
        </section>
    )
}

export default About;