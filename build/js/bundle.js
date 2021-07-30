document.addEventListener('DOMContentLoaded', function(){
    scrollNav();
    navegacionFija();
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

function navegacionFija(){
    const barra = document.querySelector('.header');
    //Registra el Intersection Observer
    const observer = new IntersectionObserver( function(entries) { //entries da informacion del elemento a observar
        if(entries[0].isIntersecting){
            barra.classList.remove('fijo');
        } else{
            barra.classList.add('fijo');
        }
    });

    //Elemento a Observar
    observer.observe(document.querySelector('.sobre-festival'));
}
document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
});

function crearGaleria(){
    const galeria= document.querySelector('.galeria-imagenes');
    for(let i=1; i<=12; i++){
        const imagen = document.createElement('IMG');
        imagen.src=`build/img/thumb/${i}.webp`;

        const lista= document.createElement('LI');
        lista.appendChild(imagen);
        
        galeria.appendChild(lista);
    }
}