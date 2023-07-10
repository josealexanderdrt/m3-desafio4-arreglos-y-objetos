
const listaProductos = [
    {
    id: 43,
    titulo: "Cafetera  magnetica",
    precio: "23990",
    color: "rojo",
    src : "https://tofuu.getjusto.com/orioneat-prod/mMnhNKSQ7qTJH4fPs-DSC04353.jpg",
    descripcion: `Calienta tu café matutino con la nueva tecnología magnética`
    },


    {
        id: 43,
        titulo: "Cafetera no magnetica",
        precio: "23990",
        color: "rojo",
        src : "https://tofuu.getjusto.com/orioneat-prod/mMnhNKSQ7qTJH4fPs-DSC04353.jpg",
        descripcion: `Calienta tu café matutino con la nueva tecnología magnética`
        }
    





]


for (let producto of listaProductos){


    const elemento =  document.querySelector('.producto')
     elemento.innerHTML += `
        <img src="${producto.src}" / alt="${producto.titulo}">
            <h2>${producto.titulo}</h2>
            <h3>${producto.precio}</h3>
            <p>${producto.descripcion}</p>
            `}

    