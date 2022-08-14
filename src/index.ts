import { NumbersCollection } from "./collections/NumbersCollection";
import { CharactersCollection } from "./collections/CharactersCollection";
import { LinkedListCollection } from "./collections/LinkedListCollection";

// LinkedList
const linkedList = new LinkedListCollection();
linkedList.add(5);
linkedList.add(-3);
linkedList.add(100);
linkedList.add(1);
linkedList.add(3);
linkedList.sort();
linkedList.print();

// String
const charactersCollection = new CharactersCollection("yaAHSBxbx");
charactersCollection.sort();
console.log(charactersCollection.data);

// Number[]
const numbersCollection = new NumbersCollection([-333, -2, 0, 55, 3]);
numbersCollection.sort();
console.log(numbersCollection.data);
