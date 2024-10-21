/*
TABLEAUX - PRÉPA 2 : Somme des valeurs
1. Initialisez un tableau qui contient les nombres 11, 3, 7, 2, 9 et 10.
2. Affichez le tableau (précédé du texte : "Voici mon tableau de nombres :").
3. Calculez puis affichez la somme des valeurs du tableau 'nombres' :
   - Utilisez la méthode 'forEach()' pour afficher la somme des nombres dans le tableau (précédée du texte : "La somme des nombres de mon tableau est …").
   - Utilisez une boucle 'for/of' pour faire la même chose.

Version alternative (avec BONUS) :
1. Initialisez
   - une variable 'message' à une chaîne vide ;
   - une variable 'somme' à 0.
2. Parcourez votre tableau de nombres à l'aide d'une boucle 'for' pour construire le message : "… + … + … = ".
3. Parcourez votre tableau de nombres à l'aide d'une boucle 'for/of' pour calculer la somme des valeurs du tableau.
4. Affichez le message final : "… + … + … = …".
*/

const nombres = [11, 3, 7, 2, 9, 10]
console.log(`Voici mon tableau de nombre : ${nombres}`);

let sommeEach = 0 ;
nombres.forEach((nombre)=>sommeEach += nombre);
console.log((`la somme des nombres est : ${sommeEach}`));

let sommeFor = 0;
for(let nombre of nombres){
    sommeFor += nombre;
}
console.log((`la somme des nombres est : ${sommeFor}`));

//BONUS

let message ='';
let somme = 0;

for(let i =0; i<nombres.length; i++){
    message +=nombres[i];
    if(i < nombres.length -1){
        message += "+";
    }
}

for(let nombre of nombres){
    somme +=nombre;
}

message += " = " + somme;
console.log(message);