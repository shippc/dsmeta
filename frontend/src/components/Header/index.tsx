import logo from '../../assets/img/logo.svg'

import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="404 not found" />
                <h1>DSMeta</h1>
                <p>Desenvolvido por <a href="https://github.com/shippc" target="_blank">@shippc</a></p>
            </div>
        </header>
    )
}

export default Header