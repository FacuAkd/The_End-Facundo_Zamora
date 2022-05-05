
class Celdas{
    constructor(id, precio){
        this.id=id;
        this.marca= "The Beatles";
        this.precio=precio;
    }
}

fetch('../data.json')
    .then((res) => res.json())
    .then(data => {
        console.log(data);
    
const seleccionados= [];

let precioCeldas= document.getElementsByClassName("clickPrecio");

function guardar(){
    const guardarSeleccionados = (clave, valor) => {localStorage.setItem(clave, valor)};
    guardarSeleccionados("listaDeSeleccionados", JSON.stringify(seleccionados));
}

function notificacion(){
    Toastify({
        text: "Se Añadio al Carrito",
        duration: 750,
        className: "info",
        gravity: "botton",
        style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();
}

function VentanaAlerta(){
    Swal.fire({
        title: 'Carrito',
        text: "El total de su compra es $"+ resultado,
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor:'#3085d6' ,
        cancelButtonText: "Comprar",
        confirmButtonText: 'Vaciar'
      }).then((result) => {
        if (result.isConfirmed) {
            resultado=0;
          Swal.fire(
            'Se Vacio el Carrito',
          )
        }
      })
}

let resultado=0;
precioCeldas[0].onclick=()=> {resultado+=data[0].precio;
    seleccionados.push(data[0].nombre);
    notificacion();
}
precioCeldas[1].onclick=()=> {resultado+=data[1].precio;
    seleccionados.push(data[1].nombre);
    notificacion();
}
precioCeldas[2].onclick=()=> {resultado+=data[2].precio;
    seleccionados.push(data[2].nombre);
    notificacion();
}
precioCeldas[3].onclick=()=> {resultado+=data[3].precio;
    seleccionados.push(data[3].nombre);
    notificacion();
}
precioCeldas[4].onclick=()=> {resultado+=data[4].precio;
    seleccionados.push(data[4].nombre);
    notificacion();
}
precioCeldas[5].onclick=()=> {resultado+=data[5].precio;
    seleccionados.push(data[5].nombre);
    notificacion();
}
precioCeldas[6].onclick=()=> {resultado+=data[6].precio;
    seleccionados.push(data[6].nombre);
    notificacion();
}
precioCeldas[7].onclick=()=> {resultado+=data[7].precio;
    seleccionados.push(data[7].nombre);
    notificacion();
}
precioCeldas[8].onclick=()=> {resultado+=data[8].precio;
    seleccionados.push(data[8].nombre);
    notificacion();
}
precioCeldas[9].onclick=()=> {resultado+=data[8].precio;
    seleccionados.push(data[9].nombre);
    notificacion();
}
precioCeldas[10].onclick=()=> {resultado+=data[8].precio;
    seleccionados.push(data[10].nombre);
    notificacion();
}
precioCeldas[11].onclick=()=> {resultado+=data[8].precio;
    seleccionados.push(data[11].nombre);
    notificacion();
}
let botonTotal= document.getElementById("totalbtn");
let botonCompra= document.getElementById("comprabtn");

let mostrarTotal= document.getElementsByClassName("total");
mostrarTotal= document.createElement("p");


const guardarArray = (clave, valor) => {localStorage.setItem(clave, valor)};
guardarArray("listaDeCeldas", JSON.stringify(data));

    botonCompra.onclick=()=> {
        VentanaAlerta();
    }
})