import './About.css'
import Mohammad from '../../assets/Mohammad.jpg'
import CurrentRead from '../../containers/About/CurrentRead'

function About() {
    
    return (
        <div className='about-contianer'>
            <div className="about-hero-container">
                <div className="about-hero">
                    <div className="avatar-hero">
                        <div className="avatar">
                            <img src={Mohammad} />
                        </div>
                    </div>
                    <div className="bio">
                        <h1>I’m Mohammad, a full-stack developer and 
                            a computer science student. Currently, I am 
                            finishing my studies at Langara College in rainy 
                            Vancouver, BC. </h1>
                        <p> I came to Canada when I was 17 years old and away from my family.
                            Looking for ways to adapt to the new environment, 
                            I discovered coding. Learning to code gave me the ability
                            to express my passion in life. Building and designing 
                            simple programs was the beginning of becoming an individual.  </p>
                        <p>These days, my time is spent on coding, researching and experimenting
                            with new technologies. I also spend time writing blogs to find an answer 
                            to the questions that I once had. </p>
                        <p>Outside of the routine, you would find me dreaming about soccer,
                            playing snooker and looking for fine coffees.</p>
                    </div>
                </div>
            </div>
            <CurrentRead />
        </div>
    )
}

export default About