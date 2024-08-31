function hashMap() {
    let hashMapArray = [];
    let bucketLength = 16; //Intial Bucket Length, Bucket Length will change with growth Factor

    function keyValuePairs(key, value) {    
        return {key, value} 
    }

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

        if (growthFactor() === true) {
            bucketLength = bucketLength * 2;
            hashCode = hashCode % bucketLength;
            return (hashMapArray[hashCode] = keyValuePairs(key, value));
        }

        hashCode = hashCode % bucketLength;
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

    return { hash, set, bucketLength };
}
const testHashMap = hashMap();

/* TEST DATA */
testHashMap.set('apple', 'red')
testHashMap.set('banana', 'yellow')
testHashMap.set('carrot', 'orange')
testHashMap.set('dog', 'brown')
testHashMap.set('elephant', 'gray')
testHashMap.set('frog', 'green')
testHashMap.set('grape', 'purple')
testHashMap.set('hat', 'black')
testHashMap.set('ice cream', 'white')
testHashMap.set('jacket', 'blue')
testHashMap.set('kite', 'pink')
testHashMap.set('lion', 'golden')
testHashMap.set('tester', 'blacker')
testHashMap.set('reee', 'napalm')


console.log(testHashMap.bucketLength);
