{
  // enum은 편법으로 재할당을 할 수 있기 때문에 type or형태를 사용하는게 낫다.
  // 다만 type or형태가 없는 언어와 연계할 때에만 사용할 것.
  // 열거형
  enum fruits {
    apple,
    banana,
    orange,
  }
  console.log(fruits.apple);
}
