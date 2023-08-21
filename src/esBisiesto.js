export function div400(anio){
    let result = false;
    if(anio%400==0){
        result = true;
    }
    return result;
}
export function div100(anio){
    let result = false;
    if (anio % 100 == 0){
        result = true;
    }
    return result;
}
export function div4(anio){
    let result = false;
    if (anio % 4 == 0){
        result = true;
    }
    return result;
}
export function esBisiesto(anio){
    let result = false;
    if(anio % 400 == 0)
    {
        result = true;
        // const verificarDiv4 = div4(anio);
        // const verificarDiv100 = div100(anio);
        // if(verificarDiv4 == true && verificarDiv100 == false)
        // {
        //     result = true;
        // }
    }
    else if(anio % 100 == 0){
        result = true;
    }
    else if(anio % 4 == 0){
        result = true;
    }
    return result;
}


