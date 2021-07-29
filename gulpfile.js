const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');


const paths={
    imagenes: 'src/img/**/*',
    scss: 'src/scss/**/*.scss'
}
// Funcion que compila sass
function css(){
    return src(paths.scss) //No afecta que tenga **/*.scss en lugar de app.scss, xq es el unico sin guin bajo al comienzo, por lo que será el unico que se compile
        .pipe( sass() )
        .pipe( dest('./build/css'));
}

function minificarcss(){
    return src(paths.scss)
        .pipe( sass({
            outputStyle: 'compressed'
        }) )
        .pipe( dest('./build/css'));  
}

function imagenes(){
    return src(paths.imagenes)
        .pipe(imagemin())
        .pipe( dest('./build/img'))
        .pipe( notify({message: 'Imagen Minificada'}));
}

function versionWebp(){
    return src(paths.imagenes)
        .pipe( webp() )
        .pipe( dest('./build/img') )
        .pipe( notify({message:'Version webP lista'}));
}

function watchArchivos(){
    watch( paths.scss, css);
}

exports.css = css;
exports.minificarcss = minificarcss;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;
exports.default = series( css, imagenes, versionWebp, watchArchivos );