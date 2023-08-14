import Link from "./img/link.png"
import GitHub from "./img/github-mark.png"

function Buttons(){

    return (
        <div className="buttons">
            <a href="https://luriekimmerledev.com/" class='link'>
                <img src={Link}/>
                Portfolio
            </a>
            <a href="https://github.com/LurieK/"
                class= "github">
                <img src={GitHub}/>
                
                GitHub
            </a>
        </div>
    )
}

export default Buttons