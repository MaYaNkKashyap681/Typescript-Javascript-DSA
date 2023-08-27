"use strict";
class TrieNode {
    alpha = new Array(26).fill(null);
    isEnd = false;
    isEmpty(ch) {
        return this.alpha[ch.charCodeAt(0) - 97] !== null;
    }
    insert(ch, t) {
        this.alpha[ch.charCodeAt(0) - 97] = t;
    }
    getNext(ch) {
        return this.alpha[ch.charCodeAt(0) - 97];
    }
    setEnd() {
        this.isEnd = true;
    }
    isEnded() {
        return this.isEnd;
    }
}
class Trie {
    root = null;
    constructor() {
        this.root = new TrieNode();
    }
    addWord(str) {
        let ptr = this.root;
        for (const vals of str) {
            if (!ptr.isEmpty(vals)) {
                ptr.insert(vals, new TrieNode());
            }
            ptr = ptr.getNext(vals);
        }
        ptr.setEnd();
    }
    searchWord(word) {
        let ptr = this.root;
        for (const vals of word) {
            if (!ptr.isEmpty(vals)) {
                return false;
            }
            ptr = ptr.getNext(vals);
        }
        return ptr.isEnded();
    }
    searchPrefix() {
    }
}
function main() {
    var trie = new Trie();
    var wordsList = ["australia", "austria", "germany", "amazon"];
    for (const vals of wordsList) {
        trie.addWord(vals);
    }
    console.log(trie.searchWord("germany"));
}
main();
