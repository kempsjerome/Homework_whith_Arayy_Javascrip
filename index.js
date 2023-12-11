/*ListeItem = []; //arayyy vid

function additionner() {
  let item = document.getElementById("item").value;

  if (item == "") {
    alert("add an item");
  } else {
    if (ListeItem.indexOf(item) < 0) {
      ListeItem.push(item);
      netoyer();
      imprimer();
    }else{
      alert("thi item is already in the array")
    }
  }
}

function netoyer() {
  document.getElementById("item").value = "";
}

function imprimer() {
  document.getElementById("liste").innerHTML = ListeItem.join("/");
}
*/

/*
// Déclaration d'un tableau vide nommé "ListeItem"
ListeItem = [];

// Définition de la fonction nommée "additionner"
function additionner() {
  // Récupérer la valeur de l'élément avec l'ID "item" depuis le document
  let item = document.getElementById("item").value;

  // Vérifier si l'élément est vide
  if (item == "") {
    // Afficher une alerte si l'élément est vide
    alert("Add an item");
  } else {
    // Convertir le nouvel élément et les éléments existants dans le tableau en minuscules
    const newItemLowerCase = item.toLowerCase();
    const existingItemsLowerCase = ListeItem.map(item => item.toLowerCase());

    // Vérifier si le nouvel élément en minuscules n'est pas déjà présent dans le tableau
    if (existingItemsLowerCase.indexOf(newItemLowerCase) < 0) {
      // Ajouter le nouvel élément au tableau "ListeItem"
      ListeItem.push(item);
      // Appeler la fonction "nettoyer" pour effacer la valeur de l'élément avec l'ID "item"
      nettoyer();
      // Appeler la fonction "imprimer" pour mettre à jour l'affichage de la liste
      imprimer();
    } else {
      // Afficher une alerte si le nouvel élément en minuscules est déjà présent dans le tableau
      alert("This item is already in the array");
    }
  }
}

// Définition de la fonction nommée "nettoyer"
function nettoyer() {
  // Effacer la valeur de l'élément avec l'ID "item"
  document.getElementById("item").value = "";
}

// Définition de la fonction nommée "imprimer"
function imprimer() {
  // Mettre à jour le contenu de l'élément avec l'ID "liste" en affichant les éléments du tableau "ListeItem" séparés par "/"
  document.getElementById("liste").innerHTML = ListeItem.join("/");
}
*/

/*
Points à noter :

Les chaînes de caractères sont converties en minuscules pour garantir une comparaison insensible à la casse.
La fonction map est utilisée pour créer un nouveau tableau contenant les éléments existants convertis en minuscules.
La vérification de l'existence d'un élément se fait maintenant avec les éléments convertis en minuscules pour éviter les problèmes liés à la casse.

*/

//nota bene
//     ListeItem.map(item => item.toLowerCase());

/*
La flèche => est une syntaxe spécifique en JavaScript utilisée pour définir des fonctions fléchées 
(arrow functions). 
Elle fournit une manière concise et expressive d'écrire des fonctions,
 en particulier lorsqu'elles sont utilisées en tant que fonctions anonymes
 ou lorsqu'elles sont passées en tant que paramètres.

Dans le contexte de ces codes :
Cela peut être compris comme suit :
   ListeItem.map(...): C'est une méthode de tableau (map) appliquée à l'array ListeItem.
              La méthode map crée un nouveau tableau en appliquant une fonction à 
              chaque élément de l'array d'origine.

(item => item.toLowerCase()): C'est la syntaxe d'une fonction fléchée.
   Elle prend un argument item (le nom que vous choisissez pour chaque élément du tableau) 
   et renvoie la version en minuscules de cet élément à l'aide de la méthode toLowerCase().
   Ainsi, pour chaque élément dans ListeItem, la fonction fléchée est appliquée, 
   transformant chaque élément en minuscules. 
   Cela crée un nouveau tableau avec les éléments d'origine convertis en minuscules,
   mais le tableau d'origine (ListeItem) n'est pas modifié, car map crée un nouveau tableau.


*/

/*
je voulais activer la fonction additionner lorsque la touche "Enter" est pressée, 
vous pouvez ajouter un gestionnaire d'événements pour l'événement "keydown" 
sur l'élément d'entrée (input) avec l'ID "item". 
Dans le gestionnaire d'événements,
 vous pouvez vérifier si la touche pressée est la touche "Enter" (code 13)
  et appeler la fonction additionner en conséquence.
   j'ai trouve cmmt le faire: et l'ai ajouter

*/

// Déclaration d'un tableau vide nommé "ListeItem"
let ListeItem = [];

// Définition de la fonction nommée "additionner"
function additionner() {
  // Récupérer la valeur de l'élément avec l'ID "item" depuis le document
  let item = document.getElementById("item").value;

  // Vérifier si l'élément est vide
  if (item == "") {
    // Afficher une alerte si l'élément est vide
    alert("Add an item");
  } else {
    // Convertir le nouvel élément et les éléments existants dans le tableau en minuscules
    const newItemLowerCase = item.toLowerCase();
    const existingItemsLowerCase = ListeItem.map(item => item.toLowerCase());

    // Vérifier si le nouvel élément en minuscules n'est pas déjà présent dans le tableau
    if (existingItemsLowerCase.indexOf(newItemLowerCase) < 0) {
      // Ajouter le nouvel élément au tableau "ListeItem"
      ListeItem.push(item);
      // Appeler la fonction "nettoyer" pour effacer la valeur de l'élément avec l'ID "item"
      nettoyer();
      // Appeler la fonction "imprimer" pour mettre à jour l'affichage de la liste
      imprimer();
    } else {
      // Afficher une alerte si le nouvel élément en minuscules est déjà présent dans le tableau
      alert("This item is already in the array");
    }
  }
}

// Définition de la fonction nommée "nettoyer"
function nettoyer() {
  // Effacer la valeur de l'élément avec l'ID "item"
  document.getElementById("item").value = "";
}

// Définition de la fonction nommée "imprimer"
function imprimer() {
  // Mettre à jour le contenu de l'élément avec l'ID "liste" en affichant les éléments du tableau "ListeItem" séparés par "/"
  document.getElementById("liste").innerHTML = ListeItem.join("/");
}

// Ajouter un gestionnaire d'événements pour l'événement "keydown" sur l'élément d'entrée avec l'ID "item"
document.getElementById("item").addEventListener("keydown", function(event) {
  // Vérifier si la touche pressée est la touche "Enter"
  if (event.key === "Enter") {
    // Appeler la fonction "additionner"
    additionner();
  }
});


//Avec cette modification, lorsque vous appuierez sur la touche "Enter" dans l'élément avec l'ID "item", la fonction additionner sera appelée.





