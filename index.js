function Message(){
    receivesAFunction(spy);
}
function receivesAFunction(_value){
    _value();
}
function returnsANamedFunction(){
  return function receivesAFunction(){
  };
}
function returnsAnAnonymousFunction(){
  return function (){
  };
}