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

    function growthFactor() {
        let counter = 0;

        for (i = 0; i < hashMapArray; i++) {
            if (hashMapArray[i] != null) {
                counter++;
            }
        }

        if (counter >= bucketLength * 0.75) {
            //0.75 standard Load Factor (adjust as necessary)
            bucketLength = bucketLength * 2;
        }

        return bucketLength;
    }

    function linkedList(hashMapObject, hashCode) {
        function node(key, value, nextAddress) {
            const keyValue = keyValueObject(key, value);
            return Object.create(keyValue, {
                nextAddress: {
                    value: null,
                    writeable: true,
                    enumerable: true,
                    configurable: false,
                },
            });
        }
        let headNode = hashMapArray[hashCode];
        hashMapObject = node(hashMapObject.key, hashMapObject.value, null);

        if ("nextAddress" in headNode) {
            if (headNode.nextAddress == null) {
                headNode.nextAddress = hashMapObject;

                return hashMapObject;
            } else {
                let currentNode = headNode;
                while (currentNode.nextAddress != null) {
                    currentNode = currentNode.nextAddress;
                }
                currentNode.nextAddress = hashMapObject;

                return hashMapObject;
            }
        } else {
            node(headNode.key, headNode.value, hashMapObject);
            
            return hashMapObject;
        }
    }

    function set(key, value) {
        let hashMapObject = keyValueObject(key, value);
        let hashCode = hash(key);

        hashCode = hashCode % growthFactor();

        if (hashMapArray[hashCode] == null) {
            hashMapArray[hashCode] = hashMapObject;
        } else {
            return linkedList(hashMapObject, hashCode);
        }

        return hashMapArray[hashCode];
    }

    function get(key) {
        for (i = 0; i < bucketLength-1; i++) {
            if (hashMapArray[i] != null) {
                if(hashMapArray[i].value != key) {
                    if ("nextAddress" in hashMapArray[i]) {

                        let currentNode = hashMapArray[i];

                        while (currentNode.nextAddress != null) {
                            if (currentNode.key == key) {
                                return currentNode.value;
                            }
                            currentNode = currentNode.nextAddress;
                        }
                    }
                } else {
                    return hashMapArray[i].value;
                }
            }
        }
        return null;
    }

    return { set, get, bucketLength, hashMapArray };
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
