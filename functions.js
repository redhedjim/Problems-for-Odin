function fibonacci(number){
    // takes the fibonacci sequence numbers 1-4000000 and adds together the even numbers
    var a = 0;
    var b = 1;
    var c = 0;
    var total = 0;
    var added = 0;

    var doc = document.getElementById('3div');
    var doc2 = document.getElementById('other');
    for(i = 0; i < 100; i++){
        c = a+b;
        a = b;
        b = c;
        total = c;
        if(total%2 === 0 && total < number){
        doc.innerHTML = doc.innerHTML + total+",";
            added = total+total;
        }
        doc2.innerHTML = added;
    }
};

function allPrimesBetween(number){
    //finds all prime numbers between 2 and number parameter
    for (x = number; x > 2; x--){ 
      count = 0;    
        for(y = x-1; y > 1; y--){        
            if(x%y === 0){
                answer = x;
                count++; 
            }    
        }
        if(count === 0){
            primeArray.push(x);
        }
    }
    placee.innerHTML = primeArray;     
}

allPrimesBetween(20);


function largestPrimeFactor(number){
//find all prime numbers under number parameter and what the largest prime factor fo that number is.
    var place = document.getElementById('a');
    var placee = document.getElementById('e');
    var answer = 0;
    var count = 0;
    var prime = 0;
    var highPrime = 0;
    var primeArray = new Array();

        for (x = number; x > 2; x--){ 
          count = 0;    
            for(y = x-1; y > 1; y--){        
                if(x%y === 0){
                    answer = x;
                    count++; 
                }    
            }
            if(count === 0){
                primeArray.push(x);
            }
        }
        placee.innerHTML = primeArray;
        for(i = 0; i < primeArray.length; i++){
            if(number % primeArray[i] === 0 && primeArray[i] > highPrime){
                highPrime = primeArray[i];
            }
        }
       place.innerHTML = highPrime;
       console.log(highPrime);
}
largestPrimeFactor(28);
