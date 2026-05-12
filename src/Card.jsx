import Button from './Button';
import './Card.css' 

function Card(props){
    return(
        <>
            <div class="card-container">
                <div class="card">
                    <div class="card-face front">
                        <img src="https://i.pravatar.cc/300" alt="Profile"class="profile-img" />
                        <h2>{props.Name}</h2>
                        <p>Frontend Developer & MERN Learner</p>
                    </div>

                    <div class="card-face back">
                        <h3>{props.text}</h3>
                        <p>
                            Passionate about web development, animations,
                            and building modern UI designs using HTML,
                            CSS, JavaScript and MERN stack.
                        </p>
                    <div class="socials">
                        <a href="#" class="facebook">F</a>
                        <a href="#" class="instagram">I</a>
                        <a href="#" class="github">G</a>
                    </div>
                    <Button text="Click Me"/>
                </div>

                </div>
            </div>
        </>
    )
}

export default Card;