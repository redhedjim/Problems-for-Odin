function fibonacci(){
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
        if(total%2 === 0 && total < 4000000){
        doc.innerHTML = doc.innerHTML + total+",";
            added = total+total;
        }
        doc2.innerHTML = added;
    }
};

function largestPrimeFactor(number){
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

largestPrimeFactor(20);