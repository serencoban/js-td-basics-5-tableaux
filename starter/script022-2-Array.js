/*****************************
 * 022 - Les tableaux indicés (Arrays)
 */


// 8. Tableau à deux dimensions

/* 
Chaque élément d'un tableau peut lui-même être un tableau.
On parle alors de tableau à deux dimensions.
Voici un exemple de tableau à deux dimensions (un tableau de tableaux),
qui pourrait être utilisé comme tableau de positionnement des mines d'un jeu du démineur.
*/
const mines = [[0, 1, 0, 1],
    [1, 0, 0, 0],
    [1, 0, 1, 0],
    [0, 0, 0, 0]];
/* 
EXERCICE :
- évaluez chacune des expressions qui suivent
- vérifiez votre réponse en affichant la valeur de l'expression dans la console
*/
//mines        // affiche tout le tableau
console.log(mines)
// mines[1]    // affiche la deuxieme ligne
console.log(mines[1])
//mines[0][3]  affiche l'élément qui se trouve dans la premiere ligne et quatrieme colonne
console.log(mines[0] [3])


// EXERCICE 7 :
// Etape 1 :
// Pour récupérer la valeur à la deuxième ligne troisième colonne du tableau,
// utilisez les indices corrects (n'oubliez pas que les indices commencent à zéro).
console.log(mines[1][2]);

// Testez de la même manière l'emplacement situé en première ligne quatrième colonne
console.log(mines[0][3])

// Etape 2 :
// Pour indiquer combien de mines contient la première ligne de ce tableau,
// vous devez parcourir les éléments de cette ligne et compter combien d'entre eux sont égaux à 1.
let cpt = 0;
for(let i=0; i<4; i++){
    if(mines[0][i]===1){
        cpt++;
    }
}
console.log(`nombre de mines : ${cpt}`);