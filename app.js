/*
function generateFibonacci(number){
    let value = 0;
    let valueTwo = 1;


    for(let i=0; i < number; i++){
        
        let temp = value;
        value = valueTwo;
        valueTwo = temp + valueTwo;
        console.log(value+" ");
    }
    
        
    }
    console.log(generateFibonacci());
*/

/*
   
  */



function Fibonacci(nro) {
    let anterior=0;
    let actual=1
    let aux=1
    for (let i = 0; i < nro.length; i++) {
        aux=actual
        actual=anterior+actual
        anterior=aux;
        console.log(actual)
        
        
    }
    Fibonacci(5)
}