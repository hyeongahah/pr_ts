function fruits(fruitName: string, fruitColor: string = '알 수 없음') {
  // default 값을 넣지 않으려면 $fruitColor?: string 처럼 입력이 없을때 undefined 처리되게 해야함
  console.log(`${fruitName}은 ${fruitColor}`);
}
fruits('apple', 'red');
fruits('apple');

function addNum(...num: number[]): number {
  return num.reduce((a, b) => a + b);
}

console.log(1, 2, 3);
