// array
{
  const fruits: string[] = ['apple', 'banana'];
  const fruits2: Array<string> = ['kiwi', 'orange'];
  function readOnly(fruits: readonly string[]) {
    return fruits;
  }
}
// tuple은 구조분해할당해서 사용하는 걸 권장
