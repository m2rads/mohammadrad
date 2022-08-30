import './CurrentRead.css'
import coders from '../../assets/coders.jpeg'
import innovatoinStack from '../../assets/innovation-stack.jpeg'
import spotifyPlay from '../../assets/spotify-play.jpg'

export default function CurrentRead() {
    return (
        <div className='book-container'>
            <h1>Currently Reading</h1>
            <div className='books'>
                <div className="coders">
                    <img src={coders} width='245' height='305' />
                    <p>Coders</p>
                    <h4>Clive Thompson</h4>
                </div>
                <div className="innovtation">
                    <img src={innovatoinStack} width='245' height='305' />
                    <p>Innovation Stack</p>
                    <h4>Jim Mckelvey</h4>
                </div>
                <div className="spotify">
                    <img src={spotifyPlay} width='245' height='305' />
                    <p>The Spotify Play</p>
                    <h4>Sven Carlsson and Jonas Leijonhufvud</h4>
                </div>
            </div>
        </div>
    )
}