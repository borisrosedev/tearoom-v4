import buttonComponent from "../../ui/components/button/button.component.js"


export default class LandingContainer {

    constructor(onNavigate){
         
       this.onNavigate = onNavigate 
       this.landingMain = document.getElementById('landing-main')
        setTimeout(this.whatHappensAfterThreeSeconds.bind(this), 3000)
       
    }


    whatHappensAfterThreeSeconds(){
      
            this.landingMain.innerHTML = buttonComponent({
                id: "landing-button",
                textContent: "Entrer dans notre salon de thé",
                classNames: "is-primary animate__animated animate__slideInUp animate__slower"
            })

            const landingButton = document.getElementById('landing-button')

            landingButton.addEventListener('click', this.onLandingButtonClick.bind(this))
        
    }



    onLandingButtonClick() {
        this.onNavigate('#home')
    }



  



}