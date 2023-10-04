// Prédiction de résultat
/*
Affichez dans la console le résutat de l'opérateur "+" dans les différentes cas de figure
avec les valeurs 4 et 5 selon qu'elles sont de type nombre ou de type chaîne  :
- 4 et 5 sont toutes deux de type nombres :
	* quelle opération réalise l'opérateur "+" dans ce cas ?
	* quel est le résulat de l'opération ?
- 4 et 5 sont toutes deux de type chaîne :
	* quelle opération réalise l'opérateur "+" dans ce cas ?
	* quel est le résulat de l'opération ?
- 4 est de type chaîne et 5 est de type nombre :
	* quelle opération réalise l'opérateur "+" dans ce cas ?
	* quel est le résulat de l'opération ?
- que se passe-t-il si on entoure toute l'expression (VALEUR OPÉRANDE VALEUR) de guillemets ? Pourquoi ?
*/

const somme = 4+5
console.log(somme)
// Le + fait une simple somme le résultat est donc 9.

const chaine = '4' + '5'
console.log(chaine)
// le + assemble les 2 éléments sans les additionner la réponse est 45.

const sommeChaine = '4' + 5
console.log(sommeChaine)
// le + agit de la même manière qu'avec les chaînes.

const oper = '4 + 5'
console.log(oper)
// cela écrit juste la formule sans la résoudre.