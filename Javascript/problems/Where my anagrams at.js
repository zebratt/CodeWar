/**
 What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

 'abba' & 'baab' == true

 'abba' & 'bbaa' == true

 'abba' & 'abbba' == false

 Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

 anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

 anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

 anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
 */


// Bad

/*function anagrams(word, words) {
    let wordInfo = getWordInfo(word);
    let result = [];

    words.forEach(function(item){
        let itemInfo = getWordInfo(item);

        if(hasSameInfo(itemInfo, wordInfo)){
            result.push(item);
        }
    });

    return result;
}

function getWordInfo(word){
    let wordInfo = {};

    for(let i=0; i<word.length; i++){
        wordInfo[word[i]] = wordInfo[word[i]] === undefined ? 1 : wordInfo[word[i]] + 1;
    }

    return wordInfo;
}

function hasSameInfo(left, right) {
    let leftkeys = Object.keys(left);
    let rightKeys = Object.keys(right);

    if(leftkeys.length !== rightKeys.length){
        return false;
    }

    for(let i=0; i<leftkeys.length; i++){
        let key = leftkeys[i];

        if(left[key] !== right[key]){
            return false;
        }
    }

    return true;
}*/

// Good

String.prototype.sort = function() {
    return this.split("").sort().join("");
};

function anagrams(word, words) {
    return words.filter(function(x) {
        return x.sort() === word.sort();
    });
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']));