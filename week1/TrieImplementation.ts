class TrieNode {
    alpha: TrieNode[] = new Array(26).fill(null);
    isEnd: boolean = false;

    public isEmpty(ch: string): boolean {
        return this.alpha[ch.charCodeAt(0) - 97] !== null
    }

    public insert(ch: string, t: TrieNode) {
        this.alpha[ch.charCodeAt(0) - 97] = t;
    }

    public getNext(ch: string): TrieNode {
        return this.alpha[ch.charCodeAt(0) - 97];
    }

    public setEnd(): void {
        this.isEnd = true;
    }

    public isEnded(): boolean {
        return this.isEnd;
    }
}

type TrieNull = TrieNode | null;

class Trie {
    private root: TrieNull = null;
    constructor() {
        this.root = new TrieNode();
    }

    public addWord(str: string) {
        let ptr = this.root;
        for (const vals of str) {
            if (!ptr.isEmpty(vals)) {
                ptr.insert(vals, new TrieNode());
            }
            ptr = ptr.getNext(vals);
        }
        ptr.setEnd();
    }

    public searchWord(word: string): boolean {
        let ptr = this.root;
        for (const vals of word) {
            if (!ptr.isEmpty(vals)) {
                return false;
            }
            ptr = ptr.getNext(vals);
        }
        return ptr.isEnded();
    }

    public searchPrefix() {

    }
}

function main(): void {
    var trie: Trie = new Trie();
    var wordsList: string[] = ["australia", "austria", "germany", "amazon"];
    for(const vals of wordsList) {
        trie.addWord(vals);
    }
    console.log(trie.searchWord("austria"));
}

main();