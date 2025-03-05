import LandingContainer from "./src/js/containers/landing/Landing.container";
import landingPage from "./src/js/ui/pages/landing/landing.page";
import './styles.scss'


function router (h) {
    
    const rootDiv = document.getElementById('root')
    console.log(rootDiv)
    switch(h) {
        case '':
            console.log('landing')
            rootDiv.innerHTML += landingPage()
            new LandingContainer() 
            break;
        case '#home':
            console.log('home')
            break;
        case '#login':
            console.log('login')
            break;
        default:
            console.log('404')
            break;
    }
}


router(window.location.hash)