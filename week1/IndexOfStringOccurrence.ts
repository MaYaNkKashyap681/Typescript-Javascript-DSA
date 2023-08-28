import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


//callback and promise both are the ways to achieve asyncronous programming 
const takeInput = () => new Promise<any>(resolve => rl.question("", resolve));

function solution(str1: string, str2: string): number {
    for(let i = 0; i <= str1.length - str2.length; ++i) {
        let j = i;
        let k = 0;
        while(str2[k] === str1[j] && k < str2.length) {
            k++;
            j++;
        }
        if(k === str2.length) return i;
    }
    return -1;
}


async function main3(){
   const str1 = await takeInput();
   const str2 = await takeInput();
   console.log(solution(str1, str2));
   rl.close();
}

main3();