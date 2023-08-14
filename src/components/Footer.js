import LinkedIn from "./linkedin3.png"
import GitHubWhite from "./github-mark-white.png"
import Email from "./email.png"


function Footer(){

    return (
        <div className="footer">
            <img src={GitHubWhite}
                alt="github"
                href="https://github.com/LurieK/"
                />
            <img src={LinkedIn} 
                alt="LinkedIn"
                href="https://www.linkedin.com/in/lurie-kimmerle/"
                />
            <img src={Email}
                alt="email"
                href="mailto:LuraineKimmerle@gmail.com"
                />
        </div>
    )
}
export default Footer