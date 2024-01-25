addEventListener("DOMContentLoaded", function(){
    let boton = document.getElementById("boton")
    let Resultado = document.getElementById("Resultado")

    boton.addEventListener("click", function(){
        function obtenerNumeroAleatorioEntre(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        function numeroALetra(numero) {
            numero = ((numero - 1) % 26) + 1;
            return String.fromCharCode(64 + numero);
        }
        let a = obtenerNumeroAleatorioEntre(10000000,99999999)
        let cifras = String(a).split('').map(Number)
        let b = cifras[1]
        let c = cifras[4]
        let d = cifras[7]
        let e = cifras[0]
        let f = cifras[2]
        let g = cifras[3]
        let h = cifras[5]
        let i = cifras[6]
        let C = numeroALetra(c)
        let B = numeroALetra(b)
        let D = numeroALetra(d)
        Resultado.innerHTML = e + f + C + g + h + D + i + B
    })
})