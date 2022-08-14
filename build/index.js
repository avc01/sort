"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./collections/NumbersCollection");
const CharactersCollection_1 = require("./collections/CharactersCollection");
const LinkedListCollection_1 = require("./collections/LinkedListCollection");
// LinkedList
const linkedList = new LinkedListCollection_1.LinkedListCollection();
linkedList.add(5);
linkedList.add(-3);
linkedList.add(100);
linkedList.add(1);
linkedList.add(3);
linkedList.sort();
linkedList.print();
// String
const charactersCollection = new CharactersCollection_1.CharactersCollection("yaAHSBxbx");
charactersCollection.sort();
console.log(charactersCollection.data);
// Number[]
const numbersCollection = new NumbersCollection_1.NumbersCollection([-333, -2, 0, 55, 3]);
numbersCollection.sort();
console.log(numbersCollection.data);
