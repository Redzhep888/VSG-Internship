function fizzBuzz(n){
    if(n > 0 && n < 2*Math.pow(10,5))
    {
        for (var i=1; i <= n; i++)
        {
        if (i % 15 == 0)
            console.log("FizzBuzz");
        else if (i % 3 == 0)
            console.log("Fizz");
        else if (i % 5 == 0)
            console.log("Buzz");
        else
            console.log(i);
        }
    }
}

fizzBuzz(15)