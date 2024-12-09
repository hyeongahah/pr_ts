{
  /** Interface는 구현의 목적(ex> 클래스 규격 사항을 생성)
   * type은 저장의 목적, 변수 할당시 올바른 타입을 결정 */
  // type만 가능한 것
  type Fruits = {
    name: 'apple';
    age: number; // 타입이 다르게 입력이 가능
  };
  type Name = Fruits['name']; // name의 value가 string이므로 자동으로 string
  type Direction = 'left' | 'right'; // type or

  // type 확장법
  type TypePosition = {
    a: number;
  };
  type BTypePosition = TypePosition & { b: number };

  //interface만 식별자 중복이 가능, 다만 타입들을 다 합쳐서 써야하므로 주의할 것
  interface InterPosition {
    a: number;
  }
  interface InterPosition {
    c: number;
  }
  // interface 확장법
  interface BInterPosition extends InterPosition {
    b: number;
  }
}
