import Container from "@mui/material/Container"
import './Ps.css'

export default function Ps() {
    return (
        <Container sx={{mb: '2em'}} className="freelance">
                <h1>
                I occasionally take on </h1> <h1> freelance opportunities.
                </h1>
                <div>
                    <p>Have an exciting project where you need some help?</p>
                    <p>Send over a message, and <span><a href='#footer'>let's chat</a></span>.</p> 
                </div>
        </Container>
    )
}