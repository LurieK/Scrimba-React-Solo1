import LinkedIn from "./img/linkedin3.png"
import GitHubWhite from "./img/github-mark-white.png"
import Email from "./img/email.png"


function Footer(){

    return (
        <div className="footer">
            <a href="https://github.com/LurieK/">
            <img src={GitHubWhite}
                alt="github"/>
               </a>
            <a href="https://www.linkedin.com/in/lurie-kimmerle/">
                <img src={LinkedIn} 
                alt="LinkedIn"
                href="https://www.linkedin.com/in/lurie-kimmerle/"
                />
                </a>
            <a href="mailto:LuraineKimmerle@gmail.com">
                <img src={Email}
                alt="email"
                />
                </a>
        </div>
    )
}
export default Footer