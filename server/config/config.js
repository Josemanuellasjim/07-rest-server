//Declaramos constantes variables, lo que sea ... de forma global

//=======================
// PUERTO
//=======================
//De esta manera actualizamos la variable del puerto para cuando esta cambie, y si no existe
//la igualamos a 3000
process.env.PORT = process.env.PORT || 3000;