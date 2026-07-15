import { navBarLinks, defaultConfig, langs } from "."
import Logo from '../../public/LogoPodFe.png'

function NavBar () {
    const langCurrent = (langs[defaultConfig.lang.index]).iso
    return (
        <nav className="navbar">
            <div className="content dx">
                <a href="#" className="logo">
                    <img src={Logo} alt="Logo PodFé" />
                </a>
                <div className="links dx">
                    { navBarLinks.map((link, index) => (
                        <a key={index} href={'#' + link.to}>{link.name}</a>
                    ))}
                    <div className="changeLang">
                        <button type="button" className="btnShow dx">{langCurrent}</button>
                        <div className="langs" tabIndex={0}>
                            { langs.map((lang, index) => (
                                <button type="button" className="lang" key={index} onClick={(e) => {
                                    e.preventDefault()
                                    console.log(lang, index)
                                }}>{lang.name}</button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar