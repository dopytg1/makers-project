'use strict';

//первые два вопроса 

let money , time ;

function start (){

         money = +prompt ("Ваш бюджет на месяц?", "");
         time = prompt ("Введите дату в формате YYYY-MM-DD", "");

         while (money == null || money == "" || isNaN(money)){
            money = +prompt ("Ваш бюджет на месяц?", "");
         }
};
start();

//главный обьект 
    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,

    someExpences: function(){
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
    },
    detectDayBudjet : function(){

            appData.moneyPerDay = (appData.budget / 30).toFixed();

            function detectDayBudjet (){
            alert ("Ваш бюджет на день: " + appData.moneyPerDay);
         };
    },
    detectLevel : function(){
        if ( appData.moneyPerDay < 100 ){
            console.log ( "Минимальный достаток" );
        }else if( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ){
            console.log ( "Средний достаток" );
        }else if ( appData.moneyPerDay > 2000 ){
            console.log( "Высокий достаток" );
        }else {
            console.log( "Что-то не так ");
        };
    },
    checkSavings : function(){
        if(appData.savings != false){
            let g = +prompt("Какова сумма накоплений?",""),
                h = +prompt("Какова процентная ставка","");
    
            appData.savings = g/100/12*h;
            alert("Ваш дневной заработок с дивидендов"+ appData.savings);
        }
    
    },
    fOptExpences : function(){
        for(i=0; i < 3 ; i++ ){
            let y = prompt("Статья необязательных расходов?","");
            appData.optionalExpenses ="1: " + y;
        }
    },
    chooseIncome : function (){

        let items = prompt("Что принесет дополнительный доход? (перечислите через запятую)","");            
            appData.income = items.split(', ');
            appData.income.push(prompt("Что нибудь еще?",""));
            appData.income.sort();

         appData.income.forEach(function(item, i, mass){
            console.log(i + ":" + "Способы дополнителльного зароботка: " + mass);
         });
                    
        while (items == null || items == ""){
             let items = prompt("Что принесет дополнительный доход? (перечислите через запятую)","");    
         }
                             
    }
}



for (let key in appData){
    console.log( "Наша программа влючает в себя данные: " + appData[key]);
}