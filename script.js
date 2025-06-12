// EXERCICE 1 - Compteur //
let n = prompt('Compteur : entrez un nombre');
function compteur(n) 
{

    for (let i = 0; i < n; i++) {
        console.log(i + 1);
    }

} compteur(n)

// EXERCICE 2 - Choix Fruit // 
let fruit = prompt('Fruit : Nombre de 1 à 4');
function ChoixFruit (fruit) 
{ 
    
    if (fruit == 1) 
    {
        console.log('Fraise')
    } 

    if (fruit == 2) 
    {
        console.log("Frambroise")
    } 

    if (fruit == 3) 
    {
        console.log("myrtille")
    } 

    if (fruit == 4)
    {
        console.log("cerise")
    }

} ChoixFruit(fruit)


// // EXERCICE 3 — FooBuzz // 
function foobuzz()

{


    for (let nb = 0; nb < 100; nb++) 
        {
            if (nb / 3 == 0) 
            {
                console.log(nb + 1 + "foo");
            }   

            if (nb / 5 == 0) 
            {
                console.log(nb + 1 + "buzz");
            }
        };

} foobuzz()

// // EXERCICE 4 — Modulo Game // 
// function modulo_game() 
// {

// } modulo_game()
