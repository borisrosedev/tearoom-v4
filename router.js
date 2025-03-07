import LandingContainer from "./src/js/containers/landing/Landing.container";
import headerLayout from "./src/js/ui/layout/header/header.layout";
import homePage from "./src/js/ui/pages/home/home.page";
import landingPage from "./src/js/ui/pages/landing/landing.page";
import loginPage from "./src/js/ui/pages/login/login.page";


window.onNavigate = router

window.onpopstate = () => router(window.location.hash)

export default function router (h) {
    

    window.history.pushState({}, "", window.location.pathname + h)

    const rootDiv = document.getElementById('root')
    console.log(rootDiv)
    rootDiv.innerHTML = ""
    switch(h) {
        case '':
            console.log('landing')
            rootDiv.innerHTML += landingPage()
            new LandingContainer(window.onNavigate) 
            break;
        case '#home':
            console.log('home')
            rootDiv.innerHTML +=  headerLayout() + homePage() 
            break;
        case '#login':
            rootDiv.innerHTML +=  headerLayout() + loginPage()
            console.log('login')
            break;
        default:
            console.log('404')
            break;
    }
}
