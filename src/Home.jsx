import './Home.css'

function Home(){
    return(
        <>
            <nav>
                <div class="logo">MySite</div>

                <ul class="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>

            <section class="hero">
                <div class="hero-content">
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