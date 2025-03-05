export default function buttonComponent ({ id, type, textContent, classNames }) {

    return(
        `
            <button 
                id="${id}"  
                class="button ${classNames ?? ''}"  
                type="${type ?? 'button'}"
            >
            ${textContent}</button>

        `
    )

}