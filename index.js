function receivesAFunction(spy){
spy();
return console.log('im exceuting a call back function');
}

function returnsANamedFunction () {
    let named=function(){

    }
   return named;
   
};

function returnsAnAnonymousFunction ()
{

return function() {
    
}} ;