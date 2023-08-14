import LinkedIn from "./linkedin3.png"
import GitHub from "./github-mark.png"

function Buttons(){

    return (
        <div>
            <button class='linkedIn'>
                <img src={LinkedIn}/>
                LinkedIn
            </button>
            <button class= "github">
                <img src={GitHub}/>
                GitHub
            </button>
        </div>
    )
}

export default Buttons