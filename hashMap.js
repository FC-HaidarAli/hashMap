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
            let keyTag = hashMapArray[i];
            if (keyTag.key != null) {
                if(keyTag.key != key) {
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

    function has(key) {
        if (get(key) != null) {
            return true;
        } else {
            return false;
        }
    }

    function remove(key) {
        for (i = 0; i < bucketLength-1; i++) {
            if (hashMapArray[i] != null) {
                if(hashMapArray[i].value != key) {
                    if ("nextAddress" in hashMapArray[i]) {

                        let currentNode = hashMapArray[i];

                        while (currentNode.nextAddress != null) {
                            if (currentNode.nextAddress.key == key) {
                                currentNode.nextAddress = currentNode.nextAddress.nextAddress; 
                                return true;
                            }
                            currentNode = currentNode.nextAddress;
                        }
                    }
                } else {
                    hashMapArray[i] = null;
                    return true;
                }
            }
        }

        return false;
    }

    return { set, get, has, remove, bucketLength, hashMapArray };
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

console.log(testHashMap.get("apple"));

/* Notes For Tommorrow (Sept 17th)*/
/*  - left off at the linked list part of the objects, the loop is not registering those values as part of the linked list.
    - Figure out a way for the addition of a parameter to an object when it becomes a linked list to work while it loops through
    - Complete all other functions,
    - Try to finish this by Sept 18th, to move on towards other projects
*/