import figureComponent from "../../components/figure/figure.component";

export default function headerLayout() {

    return(
        `
            <header class="tearoom-header">
                <a href="#home">
                    ${figureComponent({
                        url: "/assets/images/logo.webp",
                        alt: "Image du logo de l'application TeaRoom"
                    })}
                </a>
                <nav>
                    <a href="#login">Connexion</a>
                    <span style="color:#fff">|</span>
                    <a href="">Inscription</a>
                </nav>
            </header>
        
        `
    )
}