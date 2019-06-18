'use strict';

let money , time ;

function start (){

         money = +prompt ("Ваш бюджет на месяц?", "");
         time = prompt ("Введите дату в формате YYYY-MM-DD", "");

         while (money == null || money == "" || isNaN(money)){
            money = +prompt ("Ваш бюджет на месяц?", "");
         }
};
start();

    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


/*for (let i = 0; i < 2; i++) {
    let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt ("Во сколько обойдется?", "");

    if (  typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50 ){
       
                console.log("done");

                appData.expenses[a]=b;
    }else{
        console.log("bad result");
        i--;
    }

};*/

let i = 0;

while( i < 2 ){
    let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt ("Во сколько обойдется?", "");
        i++
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b !="" && a.length < 50 ){
                    console.log ("everithing is good");
                    appData.expenses[a]= b;
        }else{
            console.log ("something is wrong");
            i--;
        }
};

appData.moneyPerDay = (appData.budget / 30).toFixed();

function detectDayBudjet (){
            alert ("Ваш бюджет на день: " + appData.moneyPerDay);
};

detectDayBudjet();


function detectLevel (){
    
    if ( appData.moneyPerDay < 100 ){
        console.log ( "Минимальный достаток" );
    }else if( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ){
        console.log ( "Средний достаток" );
    }else if ( appData.moneyPerDay > 2000 ){
        console.log( "Высокий достаток" );
    }else {
        console.log( "Что-то не так ");
    };
    
};



function checkSavings (){
    if(appData.savings != false){
        let g = +prompt("Какова сумма накоплений?",""),
            h = +prompt("Какова процентная ставка","");

        appData.savings = g/100/12*h;
        alert("Ваш дневной заработок с дивидендов"+ appData.savings);
    }

};

checkSavings();

function fOptExpences (){
            for(i=0; i < 3 ; i++ ){
                let y = prompt("Статья необязательных расходов?","");
                appData.optionalExpenses ="1: " + y;
            }
};



