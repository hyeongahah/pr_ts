{
  const num: number = 2;
  const str: string = 'A';
  const bool: boolean = true;
  // 뭔가가 없을 때에는 null은 거의 안 쓰고, undefined를 사용
  let age: number | undefined; // 값이 있는지 없는지 불확실할 때 사용
  age = undefined;
  age = 1;
  let trash: string | null; // 쓰지 말자
  let notSure: unknown; // 아무거나 넣을 수 있는 타입(JS코드와 함께 작성할 때, 불가피할 때 사용)
  notSure = 'A';
  notSure = true;
  let anything: any; // unknown과 기능은 같으나 아예 안 쓰는 게 좋음

  function print(): void {
    // void는 리턴값이 없는 함수에 쓰이지만, 생략이 가능하다
    // let print: void 라고 하면 undefined만 할당 가능, 아예 안 써야 함
    console.log('hello');
    return;
  }
  print();
}
// never는 절대 리턴값을 받을 수 없는 특수한 상황(ex: 에러 처리)에만 사용
// object는 object나 array를 다 할당할 수 있어서 안 써야 함.
