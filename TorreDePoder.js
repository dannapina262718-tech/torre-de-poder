function createPowerTower(caracter, altura) {
    //primero se evalua si la altura si esta entre 1 y 100
    if(altura>100 || altura<1){
        console.log("la altura tiene que estar entre 1 y 100");
        return;
    }
    torre = "" //creamos la variable torre 
    /* para saber la cantidad de caracteres que tiene cada linea 
    se saca el doble de la altura y se le resta 1
    por ejemplo una torre de altura 10 tiene 19 caracteres por linea,
    una de 5 tiene 9, etc
    */
    caracteresPorLinea=  altura + altura -1; 
    //un for que de una vuelta por cada nivel de la torre (altura)
    for (let i = 1; i <= altura; i++) {
        /*los caracteres son igualmente el nivel son igual al doble del numero 
        del nivel menos 1 
        */
        nivel = i + i-1; 
        /* por consecuencia le quitamos la cantidad de caracteres que ya se usaron en 
        el nivel de la torre a lo caracteres totales del renglon y se dividen entre
        dos por que va la mitad a cada lado (para que este centreado)
        */
        espacio = (caracteresPorLinea - nivel) / 2;
        //se agrega a la avriable torre y el /n agrega un salto de linea
        torre= torre+("_".repeat(espacio)+caracter.repeat(nivel)+"_".repeat(espacio)+ "\n")
    }
    /*para saber el espacio del nuvle se le resta 1 por el simbolo # que 
    va en el centro y se divide entre 2 porque debe de esta en el centro 
    */
    nucleo = (caracteresPorLinea -1)/2
    //se agrega 2 veces a la variable torre y solo la primera necesita el salto de linea
    torre= torre+("_".repeat(nucleo)+"#"+"_".repeat(nucleo)+ "\n")
    torre= torre+("_".repeat(nucleo)+"#"+"_".repeat(nucleo))
    
    return torre;
}

tower =createPowerTower("*",5)
console.log(tower)

