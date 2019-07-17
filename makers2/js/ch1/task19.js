'use strict'

let num = 13;

    let str = num.toString( 2 ), 
        zeroCount = 0,
        result = 0;

    for ( let digit of str ) {
        if ( digit === '0' ) {
            zeroCount += 1;
        } else /* if ( digit === '1' ) */ {
            result = Math.max( result, zeroCount );
            zeroCount = 0;
        }
    }

console.log(result);




