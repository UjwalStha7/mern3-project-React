import { Link } from 'react-router-dom'
import './Home.css'

function Home(){
    return(
        <>
            <nav>
                <div className="logo">MySite</div>

                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

            <section className="hero">
                <div className="hero-content">
                    <h1>Home</h1>

                    <p>
                        Welcome to a modern and stylish homepage design. 
                        Build something amazing with smooth animations, 
                        clean layouts, and a professional navigation bar.
                    </p>

                    <a href="#" class="btn">Explore More</a>
                </div>
            </section>
        </>
    )
}

export default Home