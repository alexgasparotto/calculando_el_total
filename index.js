let precioInicial = document.querySelector(".precio-inicial");
let cantidad = document.querySelector(".cantidad");


let botonIncrementar = document.querySelector(".incrementarBtn");
let botonDecrementar = document.querySelector(".decrementarBtn");
let valorTotal = document.querySelector(".valor-total");


precioInicial.innerHTML = 450;
cantidad.innerHTML = 0;


function actualizarTotal() {
  let precio = precioInicial.innerHTML;
  let cantidadValor = cantidad.innerHTML;
  valorTotal.innerHTML = precio * cantidadValor;
}


botonIncrementar.addEventListener("click", function(){
  let cantidadValor = cantidad.innerHTML;
  cantidadValor++;
  console.log("La cantidad es " + cantidadValor)
  cantidad.innerHTML = cantidadValor;
  actualizarTotal();
});


botonDecrementar.addEventListener("click", function(){
  let cantidadValor = cantidad.innerHTML;
  if (cantidadValor > 0) {
    cantidadValor--;
    console.log("La cantidad es " + cantidadValor)
    cantidad.innerHTML = cantidadValor;
    actualizarTotal();
  }
});
