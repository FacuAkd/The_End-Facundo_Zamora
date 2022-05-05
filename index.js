
class Celdas{
    constructor(id, precio){
        this.id=id;
        this.marca= "The Beatles";
        this.precio=precio;
    }
}

fetch('/data.json')
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
        icon: 'success',
        title: 'Carrito',
        showCancelButton: true,
        text: "El total de la compra es de $"+ resultado,
        confirmButtonText: "Continuar",
        cancelButtonText: "Cancelar"
    });
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

let botonTotal= document.getElementById("totalbtn");
let botonCompra= document.getElementById("comprabtn");

let mostrarTotal= document.getElementsByClassName("total");
mostrarTotal= document.createElement("p");

/*botonTotal.onclick=()=> {
    mostrarTotal.innerHTML= "El total de la compra es $"+ resultado;
    document.body.append(mostrarTotal);
    sessionStorage.setItem(`Total`, resultado);
    guardar();
}*/

let botonReset= document.getElementById("reset");
botonReset.onclick=()=>{
    resultado=0;
    mostrarTotal.innerHTML= "El total de la compra es $"+ resultado;
    sessionStorage.setItem(`Total`, resultado);
    let ultimo= seleccionados.length;
    seleccionados.splice(0,ultimo);
    guardar();    
}

const guardarArray = (clave, valor) => {localStorage.setItem(clave, valor)};
guardarArray("listaDeCeldas", JSON.stringify(data));

    botonCompra.onclick=()=> {
        VentanaAlerta();
    }
})