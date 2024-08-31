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

    function get(key) {
        
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

    function linkedList(hashCode, value) {
        //Linked List for dealing with Collisions resulting from the same set Values
        class node {
            //Used Class instead of a Factory Function for use of 'instanceOf'
            constructor(linkedValue, nextAddress) {
                this.linkedValue = linkedValue;
                this.nextAddress = nextAddress;
            }
        }

        if (hashMapArray[hashCode] instanceof node) {
            let newNode = hashMapArray[hashCode];
            do {
                newNode = newNode.nextAddress;
            } while (newNode.nextAddress != null);
            return newNode.value;
        }

        let newNode = new node(value, null);
        let headNode = new node(hashMapArray[hashCode], newNode);
        return headNode.value;
    }

    return { hash, set, get, bucketLength };
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
