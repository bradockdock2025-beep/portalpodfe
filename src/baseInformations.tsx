import { author, navBarLinks, defaultConfig, langs, footerExploreLinks, footerMeetUsLinks, socialLinks } from "./components"
import Logo from '../public/LogoPodFe.png'
import { clock } from "./lib"
import parse from 'html-react-parser'

export function NavBar () {
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

export function Footer () {
    const year = clock().year
    return <footer className="footerA">
        <div className="content">
            <div className="brand">
                <div className="logo">
                    <img src={Logo} alt="Logo PodFé" />
                </div>
                <p className="copyright">© {year} PodFé. All Rights Reserved</p>
            </div>
            <div className="groupLinks dx">
                <div className="explore">
                    <h2 className="footerTitle">Explorar</h2>
                    { footerExploreLinks.map((link, index) => (
                        <a key={index} href={'#' + link.to}>{link.name}</a>
                    ))}
                </div>
                <div className="meetus">
                    <h2 className="footerTitle">Conhecer</h2>
                    { footerMeetUsLinks.map((link, index) => (
                        <a key={index} href={'#' + link.to}>{link.name}</a>
                    ))}
                </div>
            </div>
            <div className="conect">
                <h2 className="footerTitle">Mídias sociais</h2>
                <div className="links dx">
                    { socialLinks.map((link, index) => (
                        <a key={index} href={'#' + link.to} title={link.title}>{parse(link.icon)}</a>
                    ))}
                </div>
            </div>
        </div>
        <div className="info">Develop by {author}</div>
    </footer>
}