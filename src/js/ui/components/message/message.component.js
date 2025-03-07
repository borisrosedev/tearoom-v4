export default function messageComponent ({ header, body }) {

    return(
        `
            <article class="message">
                <section class="message-header">${header}</section>
                <section class="message-body">${body}</section>
            </article>
        
        
        `
    )

}