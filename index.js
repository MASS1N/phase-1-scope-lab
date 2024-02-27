// Write your solution in this file!


var customerName = 'bob' ;

function upperCaseCustomerName ()  {
    customerName = customerName.toUpperCase();
}

function setBestCustomer(){
    // Declaring a global variable from inside a function is generally not recommended
    // this is to explore its consequences
    bestCustomer = 'not bob';
  }
  
  // Function to overwrite bestCustomer
  function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
  }
  
  // Declare leastFavoriteCustomer constant in global scope
  const leastFavoriteCustomer = 'kelly';
  
  // Function to try to change leastFavoriteCustomer (should throw an error)
  function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'john';
  }
