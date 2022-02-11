export function maquinaEscrever(texto){
    const textoArray = texto.innerHTML.split('');
    texto.innerHTML = '';
    textoArray.forEach((letra, index) =>{
        setTimeout(() => {
        texto.style.opacity = 1
        texto.innerHTML += letra
        }, 65 * index);
    })
}
