import LinkedIn from "./linkedin3.png"

function Buttons(){

    return (
        <div>
            <button class='linkedIn'>
                <img src={LinkedIn}/>
                LinkedIn
            </button>
            <button class= "github">GitHub</button>
        </div>
    )
}

export default Buttons