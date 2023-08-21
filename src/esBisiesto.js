export function esBisiesto_div400(anio){
    let result = false;
    if(anio%400==0){
        result = true;
    }
    return result;
}

export function esBisiesto_div100(anio){
    let result = true;
    const verificar = esBisiesto_div400(anio);
    if (verificar==false && anio % 100 == 0){
        result = false;
    }
    return result;
}


