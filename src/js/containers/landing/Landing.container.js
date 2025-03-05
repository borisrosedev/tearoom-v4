import buttonComponent from "../../ui/components/button/button.component.js"


export default class LandingContainer {
    //PascalCase
    // High Cohesion 

    constructor(){
        const landingMain = document.getElementById('landing-main')
        setTimeout(() => {
            landingMain.innerHTML = buttonComponent({
                id: "landing-button",
                textContent: "Entrer dans notre salon de thé",
                classNames: "is-primary animate__animated animate__slideInUp animate__slower"
            })
        }, 3000)
       
    }


    onLandingButtonClick() {

    }



  



}