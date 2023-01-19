let x=5;
let y=6;
let c;
let d;
let e;
function abc(a, b)
{
    c=a+b; 
    d=a-b; 
    e=a*b; 
    console.log('Wynik dodawania wynosi: ', c);
    console.log('Wynik mnożenia wynosi: ', e);
    if(d<0)
    {
        console.log('Wynik odejmowania wynosi: wynik jest nieprawidłowy');
    }
    else console.log('Wynik odejmowania wynosi: ', d);
}
abc(x, y);
