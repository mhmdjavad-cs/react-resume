import '../../css/skills.css'
import Backend from './Backend'
import Frontend from './Frontend'
import Languages from './Languages'
import Teamwork from './Teamwork'



function Skills(){


    return (

        <section className="section skills" id="skills">
            
            <h2 className="section__title">
                Skills
            </h2>
            <span className="section__subtitle">My Technical Level</span>
        
            <div className="skills__container container grid">

               <Frontend/>
               <Backend/>
               <Languages/>
               <Teamwork/> 

            </div> 


        </section>

    )


}



export default Skills
