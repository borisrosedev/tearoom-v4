import buttonComponent from "../../components/button/button.component";

export default function loginPage () {

    return (
        `
            <main class="tearoom-main login__main">

                <section class="login__form-section">
                <form>
                    <section>
                        <article>
                            <label for="email"></label>
                            <input 
                                class="input is-warning" 
                                type="email" 
                                placeholder="Entrer votre email" 
                            />
                        </article>

                        </article>
                            <label for="password"></label>
                            <input 
                                class="input is-warning" 
                                type="password" 
                                placeholder="Entrer votre mot de passe" 
                            />
                        </article>
                    
                    </section>
                    <section>
                        ${buttonComponent({
                            id: "login-button",
                            type: "submit",
                            textContent: "Valider",
                            classNames: "is-primary"
                        })}
                        ${buttonComponent({
                            id: "reset-button",
                            type: "reset",
                            textContent: "Valider",
                            classNames: "is-danger"
                        })}
                    </section>
                
                </form>
                <section>
            
            </main>
        
        `
    )

}