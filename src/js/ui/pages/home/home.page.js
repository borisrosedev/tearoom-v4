import figureComponent from "../../components/figure/figure.component";
import messageComponent from "../../components/message/message.component";

export default function homePage (){

    return( 
    `
        <main id="home-main" class="tearoom-main home__main">
            
            <section class="home__hero-section">

                    <section class="home__hero-figure">
                        ${figureComponent({
                            src:"/assets/images/inside.webp",
                            alt: "Image de l'intérieur du salon de thé de TeaRoom"
                        })}
                    </section>
                    <section class="home__usp">
                    
                        ${messageComponent({
                            header: "Ce qui nous différencie des autres",
                            body: "Venez vous détendre dans un cadre exceptionnel mêlant chic et élégance. Nos hotesses ont hâte d'être à vos soins."
                        })}
                    </section>
               
            </section>
         
        
        
        </main>
    
    `)
    
}