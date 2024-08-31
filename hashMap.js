function hashMap() {
    let hashMapArray = [];
    let bucketLength = 16; //Intial Bucket Length, Bucket Length will change with growth Factor

    function hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    function set(key, value) {
        let hashCode = hash(key);
        growthFactor();
        hashCode = hashCode % bucketLength;
        if (hashMapArray[hashCode] != null) {
            linkedList(hashCode, value);
        }

        return (hashMapArray[hashCode] = value);
    }

    function growthFactor() {
        let growth = bucketLength * 0.75; //0.75 === HashMaps Load Factor ( Arbtirary Number was used here, adjust as necessary )

        if (growth < hashMapArraySize()) {
            bucketLength = bucketLength * 2;
            return true;
        } else {
            return false;
        }
    }

    function hashMapArraySize() {
        let counter = 0;
        for (i = 0; i < hashMapArray.length; i++) {
            if (hashMapArray[i] != null) {
                counter++;
                console.log(counter);
            }
        }
        return counter;
    }

    function linkedList(hashCode, value) {  //Linked List for dealing with Collisions resulting from the same set Values
    
        /*function node(value) {
            let nodeValue = value;
            let nextAddress = null;
            return {nodeValue, nextAddress};
        }*/

        class node {
            constructor(linkedValue, nextAddress) {
                this.value = linkedValue;
                this.nextAddress = nextAddress;
            }
        }

        let headNode = new node(hashMapArray[hashCode]);
        let newNode = new node(value);

        /* LEAVING OFF HERE FOR TODAY (30.08.24, 6:35 PM)
            Things to note:
                - Trying to figure out how to create a HEAD Node initially to give it the node parameters of nextAddress
                - Figuring out how to iterate through HEAD Node, if HEAD changes (i.e now a different bucket on hashMap, head changes thus cannot link to other buckets)
                - Figuring out the how to transfer the logic of a linked list to acutal code
        */

    }

    return { hash, set, bucketLength };
}
const testHashMap = hashMap();

/* TEST DATA */
testHashMap.set("apple", "red");
testHashMap.set("banana", "yellow");
testHashMap.set("carrot", "orange");
testHashMap.set("dog", "brown");
testHashMap.set("elephant", "gray");
testHashMap.set("frog", "green");
testHashMap.set("grape", "purple");
testHashMap.set("hat", "black");
testHashMap.set("ice cream", "white");
testHashMap.set("jacket", "blue");
testHashMap.set("kite", "pink");
testHashMap.set("lion", "golden");
testHashMap.set("tester", "blacker");
testHashMap.set("reee", "napalm");

console.log(testHashMap.bucketLength);
