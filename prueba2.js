document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('titulo').innerText = '¡Manipulación del DOM!';

    let parrafos = document.getElementsByClassName('parrafo');
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.color = 'blue';
    }

    document.querySelector('#lista li').innerText = 'Elemento Modificado';

    let nuevoLi = document.createElement('li');
    nuevoLi.innerText = 'Elemento 3';
    document.getElementById('lista').appendChild(nuevoLi);

    let nuevoParrafo = document.createElement('p');
    nuevoParrafo.innerText = 'Este es un párrafo nuevo';
    document.getElementsByClassName('parrafo')[1].after(nuevoParrafo);

    document.getElementById('lista').removeChild(document.getElementById('lista').children[1]);

    document.getElementById('boton').addEventListener('click', function() {
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        document.body.style.backgroundColor = getRandomColor();
    });

    document.querySelector('h1').style.fontSize = '48px';
    document.querySelector('.parrafo').style.border = '2px solid red';

    let lista = document.getElementById('lista');
    let items = lista.getElementsByTagName('li');
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = 'inline-block';
    }
});
