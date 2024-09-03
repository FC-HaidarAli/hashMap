function hashMap() {
    let hashMapArray = [];
    let bucketLength = 16; //Intial Bucket Length

    function hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return hashCode;
    }

    function keyValueObject(key, value) {
        return { key, value };
    }

    function set(key, value) { 
        let hashMapObject = keyValueObject(key, value);
        let hashCode = hash(key);
        
        hashCode = hashCode % bucketLength;
        hashMapArray[hashCode] = hashMapObject;
        console.log(hashMapArray[hashCode]);
        return hashMapArray[hashCode];
    }

    return {set};
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

console.log(testHashMap.hashMapArray);
