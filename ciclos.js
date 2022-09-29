
function catalogo(){
    let mercaderia = "1) Pastel de chocolate. \n" +
                     "2) Pastel de vainilla. \n" +
                     "3) Pastel Redvelvet. \n" +
                     "4) Brownie. \n" 
                     //alert(mercaderia)
    let resultado = prompt("Ingresa el N° de producto a consultar precio: \n" + mercaderia)
     switch (parseInt(resultado)) {
        case 1:
            alert("El precio de la 'Pastel de chocolate' es de 1500$")
            break;
        case 2:
            alert("El precio de la 'Pastel de vainilla' es de 1200$")
            break;
        case 3:
            alert("El precio de la 'Pastel Redvelvet' es de 1800$")
            break;
        case 4:
            alert("El precio del 'Brownie' es de 1600$")
            break;
    
        default: alert("Intente de nuevo con alguna de las opciones")
    } 
    let continuar = confirm("¿Quieres ver el precio de las otras opciones?")
    if(continuar){
        catalogo()
    }
    else{
        alert("¡Gracias por visitarnos!")
    }
        
    }
    

