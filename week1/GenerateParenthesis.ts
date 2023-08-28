import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(o: number, c: number, ans: string[], temp: string): void {
  if (o > c || o < 0 || c < 0) return;
  if (o === 0 && c === 0) {
    ans.push(temp);
  }
  var t: string = temp + "(";
  solution(o - 1, c, ans, t);
  t = temp + ")";
  solution(o, c - 1, ans, t);
}

function generateParenthesis(n: number) {
  var ans: string[] = [];
  solution(n, n, ans, "");
  for (const vals of ans) {
    console.log(vals);
  }
}

function main2(): void {
  rl.question('', (input: string) => {
    const n: number = parseInt(input, 10);
    generateParenthesis(n);
    rl.close();
  });
}

main2();
