const { array } = require("yargs");

function ideal (n){
    const step = n%2 ==0 ? 1 : 2;
    let sum = 0;
    
    for (let i=1; i<=n/2;i+=step)
    {
        if ( n%i == 0) {
            sum += i;
        }
    }
    return ( n == sum ? true : false );
}

function getIdealNums(n){
    let array=[];
    for (let i=n;i>0;i--){
        if (ideal(i)) { array.push(i);}
    }
    return array.reverse();
}

module.exports = {ideal,getIdealNums};
