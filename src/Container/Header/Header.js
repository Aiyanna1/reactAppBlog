import "./Header.css"


function Header (props) {
    const changeTheme = () => {
        props.theme === "light" ? props.setTheme("dark"):props.setTheme ("light");
    }
    return(
        <div className ="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Pink & Purple</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImage" src={require("./wp5179762.jpg")} alt=""/>
            <button className="Theme" onClick = {changeTheme}>This is a button</button>
        </div>
    )
}

export default Header;
