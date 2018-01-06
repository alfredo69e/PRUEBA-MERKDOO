import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  abrirAgregar;
 public producto;
 public productos;
 abrirBtnEditar;


  constructor(){
    this.producto = {};
    this.productos = [];
    this.addlista();
  }

  // boton para agregar prducto
  btnAgregar(){
    this.abrirAgregar = true;
    this.abrirBtnEditar = false;
  }

  // limpia input
  btnLimpiar(){
   this.producto = {};
  }
  
  // se agrega el producto a la lista
  add(data){
    this.productos.push(data);
    localStorage.setItem('productos', JSON.stringify(this.productos));
    this.btnLimpiar();
  }

  // editar producto 
  edit(data){
    this.producto = data;
    this.abrirAgregar = true;
    this.abrirBtnEditar = true;
  }

  // eliminar producto
  delete(data){
    var i =  this.productos.indexOf( data );
    this.productos.splice( i, 1 );
    localStorage.setItem('productos', JSON.stringify(this.productos));
  }

  // boton editar producto
  btnEditar(){
    this.btnLimpiar();
    this.abrirBtnEditar = false;
    localStorage.setItem('productos', JSON.stringify(this.productos));
  }

  // cierra el panel de agregar producto
  cerrar(){
    this.abrirAgregar = false;
  }

  // se crea la lista de los productos se estan en el localStorage
  addlista(){
    this.productos = JSON.parse(localStorage.productos)
  }

}
