import figureComponent from "../../components/figure/figure.component";

export default function landingPage (){

    return( 
    `
        <main id="landing-main" class="tearoom-main landing__main">
            
            <section>
                ${figureComponent({
                    src: "/assets/images/logo.webp",
                    alt: "Image du logo de l'application TeaRoom"
                })}
            </section>
         
        
        
        </main>
    
    `)
    
}