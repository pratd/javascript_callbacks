function a(){
    console.log("Se ha ejecutado la función a");
}
function b(){
    console.log("Se ha ejecutado la función b");
}
  
a();
b();

//when we change the function to settimeout
function c(){
    // Simulamos un tiempo de espera en la ejecución de la función a
    setTimeout( function(){
      console.log("Se ha ejecutado la función a");
    }, 1000 );
}
  
function d(){
    console.log("Se ha ejecutado la función b");
}
  
c();
d();
//updating the function to use callbacks

function firstfunction(callback){
    // Simulamos un tiempo de espera en la ejecución de la función a
    setTimeout( function(){
      console.log("Function c has been executed");
      callback();
    }, 1000 );
}
function secondfunction(){
    console.log("Function d has been executed");
}
  
firstfunction(secondfunction);
