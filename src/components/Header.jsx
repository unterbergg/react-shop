function Header() {

    return <nav className="light-blue darken-3">
        <div className="nav-wrapper  container">
            <a href="#" className="brand-logo">
                React Movies
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                    <a href="!#"
                       href="https://github.com/unterbergg/react-shop"
                       target="_blank"
                       rel="noreferrer"
                    >
                        Repo
                    </a>
                </li>
            </ul>
        </div>
    </nav>
}

export {Header}