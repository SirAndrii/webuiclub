function checkAdult(age){
    // your code
    
      try{
        switch (true)  {
          case (age==''):
            throw new Error("Please, enter your age");
            break;
          case (age<0):
            throw new Error("Please, enter positive number");
            break;
          case (typeof(age)!='number'):
            throw new Error("Please, enter number");
            break;
          case (Number.isInteger(age)):
            throw new Error("Please, enter Integer number",);
            break;
          case (age<18):
            throw new Error("Access denied - you are too young!");
            break;
          default: 
            console.log( 'access Allowed');
        }
      }
    catch (ex){
      console.log(ex.name, ex.message);
    }
    finally{
      console.log( 'Age verification complete');
    }
}
checkAdult(15);