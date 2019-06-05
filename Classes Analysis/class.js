class NumC{
    static toData(num){
        let nums = num.toString();

        nums = nums.replace(/\s*/g, "");//пробел
        nums = nums.replace(/[\s\.]/g, "");//пробел и точка
        nums = nums.replace(/(&nbsp;)/g, "");//ampersand 
        nums = nums.replace(",", ".");//изменить запятую на точку

        return parseFloat(nums);        
    }

    static toBuh(num, decimals, curr){
      //добавляем аббревиатуру(код) валюты и количество знаков после запятой
      //если число корректно,
        if(NumC.isNumeric(num)){ 
        //вызываем метод convertToBuh
            return NumC.convertToBuh(num, decimals, curr);
        }else{
        //если число не корректно возвращаем его же
            return num; 
        }
    }
    //ф-ция вызывается toBuh, добавляет аббревиатуру(код)
    static convertToBuh(num, decimals, curr){
        let nums = String(num),
            counter = nums.length - (decimals + 1);
            
        //переданное число или 3 по дефолту
        decimals = decimals || 3; 
        //если нет запятых добавляем decimals
        if(nums.indexOf(",") == -1 || counter < nums.indexOf(",")){

            nums = num.toLocaleString('de-DE', { minimumFractionDigits: decimals });

            if(curr){
                nums += " " + curr;
            }
            
            return nums;
        //если запятая есть, добавляем до максимум decimals, и добавляем код валюты
        } else if(counter > nums.indexOf(",")){

            nums = num.toLocaleString('de-DE', { maximumFractionDigits: decimals });

            if(curr){
                nums += " " + curr;
            }
            return nums;
        }
    }
    
    //возвращаем конечное, "правильное" число и не NaN
    static isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n); 
      }
  //переводим код в символ валюты
    static toSymbol(curr) {
        switch(curr){
            case "UAH" : {
                return "₴";
            }
            case "EUR" : {
                return "€";
            }
            case "USD" : {
                return "$";
            }
        }
        return curr;
    }
    //переводим символ в код валюты
    static toCurrency(symb) {
        switch(symb){
            case "₴" : {
                return "UAH";
            }
            case "€" : {
                return "EUR";
            }
            case "$" : {
                return "USD";
            }
        }
        return symb;
    }
    //посчитать сумму валюты по классам и записать в HTML
    static calcSummFromRows(trs,summClassName){
        let totalSumm = 0;
    
        for(let i = 0; i < trs.length; i++){
            totalSumm += NumC.toData(trs[i].querySelector(summClassName).innerHTML);
        }
    
        return totalSumm;
    }
    //формирует дату
    static getFALDates(trs, dateClassName){
        let dates = {},
            dtemp,
            y,
            m,
            d;

        dtemp = new Date(trs[0].querySelector(dateClassName).innerHTML);
        y = dtemp.getFullYear();
        m = dtemp.getMonth() + 1;
        d = dtemp.getDate();

        if(m < 10){
            m = "0" + m;
        }
        if(d < 10){
            d = "0" + d;
        }

        dates["last"] = y + "-" + m + "-" + d;


        dtemp = new Date(trs[trs.length-1].querySelector(dateClassName).innerHTML);
        y = dtemp.getFullYear();
        m = dtemp.getMonth() + 1;
        d = dtemp.getDate();

        if(m < 10){
            m = "0" + m;
        }
        if(d < 10){
            d = "0" + d;
        }

        dates["first"] = y + "-" + m + "-" + d;

        return dates;
    }
}

