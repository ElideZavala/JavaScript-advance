/******* Method append *******/

// (1)
const newH5 = document.createElement('h5');
const newH6 = document.createElement('h6');

// (2)
newH5.innerHTML = "Elide";
newH6.innerHTML = "BellaDama";

// (3)
const mainHeading = document.querySelector('h1');
mainHeading.append(newH5, newH6);

/******* Method prepend *******/

// (1)
const newH7 = document.createElement('h5');
const newH8 = document.createElement('h6');

// (2)
newH7.innerHTML = "Perros";
newH8.innerHTML = "Gatos";

// (3)
// const mainHeading = document.querySelector('h1');
mainHeading.prepend(newH7, newH8);

/******* Method removeChild *******/

const toDoList = document.querySelector("ol");
const toDoItem = document.querySelector("ol li:nth-child(3)");
// toDoList.removeChild(toDoItem);

/******* Method remove => No require Parent node *******/
toDoItem.remove();