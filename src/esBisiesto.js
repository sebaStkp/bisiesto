function esBisiesto(anio){
    let result = false;
    if(anio%400==0){
        result = true;
    }
    return result;
}

export default esBisiesto