import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    const myStyles = {
        color: '#535352',
    };
    return (
        <>
            <footer>
                <div className="columnasfooter"> <h3>Contact Info</h3>
                    <p><i className="fa-solid fa-location-dot" style={myStyles}></i>   22 Innovation Street, CA, US</p>
                    <p><i className="fa-regular fa-envelope" style={myStyles}></i>   office@syncmobile.com</p>
                    <p><i className="fa-solid fa-phone" style={myStyles}></i>   +44 376 945 23</p>
                </div>
                <div className="columnasfooter"> <h3>Value Links</h3>
                    <a href="./extra2.html">Terms & Conditions</a>
                    <a href="./extra3.html">Privacy Policy</a>
                    <a href="./extra1.html">Article Details</a>
                </div>
                <div className="columnasfooter"> <h3>Other Apps</h3>
                    <a href="">Scientific Calculator</a>
                    <a href="">Advancer Timer</a>
                    <a href="">Music Store</a>
                </div>
                
                <div className="socialmedia"> 
                    <div>
                        <i className="fa-brands fa-facebook fa-xl" style={myStyles}></i>
                    </div>
                    <div>
                        <i className="fa-brands fa-square-twitter fa-xl" style={myStyles}></i>
                    </div>
                    <div>
                        <i className="fa-brands fa-pinterest fa-xl" style={myStyles}></i>           
                    </div>
                    <div>
                        <i className="fa-brands fa-square-instagram fa-xl" style={myStyles}></i>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;