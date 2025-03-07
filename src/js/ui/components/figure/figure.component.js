export default function figureComponent({ alt, name, src, url, classNames } ) {

    return(
        `
            <figure class="animate__animated ${classNames ?? ''}">
                    <img
                        src="${src ?? url }",
                        alt="${alt ?? name}" 
                    />
            </figure>
        
        `
    )
}