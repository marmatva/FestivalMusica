document.addEventListener('DOMContentLoaded', function(){
    scrollNav();
});

function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach( function(enlace){
        enlace.addEventListener('click', function(e){
            e.preventDefault();
            let selector=e.target.attributes.href.value; //Todo esto para obtener valor, porque si pusiesemos solo href, nos devolveria link completo
            console.log(selector);
            const seccion = document.querySelector(selector);
            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        })
    })
};