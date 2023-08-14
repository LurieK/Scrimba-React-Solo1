import LinkedIn from "./linkedin3.png"
import GitHubWhite from "./github-mark-white.png"
import Email from "./email.png"


function Footer(){

    return (
        <div>
            <img src={GitHubWhite}alt="github"/>
            <img src={LinkedIn} alt="LinkedIn"/>
            <img src={Email}alt="email"/>
        </div>
    )
}
export default Footer