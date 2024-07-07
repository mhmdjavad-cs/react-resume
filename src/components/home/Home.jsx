import '../../css/home.css'
import Social from './Social.jsx'
import Data from "./Data";

function Home() {

    return (

        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social/>

                    <div className="home__img"></div>


                    <Data />
                </div>
            </div>
        </section>

    )
}

export default Home;