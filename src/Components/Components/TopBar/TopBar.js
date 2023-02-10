import "./TopBar.css"

function TopBar() {
    return (
        <div className="top">
            <div className="top__left">
            <i className="top__icon fa-brands fa-facebook"></i>
            <i className="top__icon fa-brands fa-twitter"></i>
            <i className="top__icon fa-brands fa-pinterest"></i>
            <i className="top__icon fa-brands fa-instagram"></i>
            </div>
            <div className="top__center">
                <ul className="top__list">
                    <li className="top__item">HOME</li>
                    <li className="top__item">ABOUT</li>
                    <li className="top__item">CONTACT</li>
                    <li className="top__item">WRITE</li>
                    <li className="top__item">LOGOUT</li>

                </ul>
            </div>
        </div>
    )
}

export default TopBar;