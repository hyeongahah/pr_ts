{
  //mapping
  type Fruits = {
    name: 'apple';
    color: 'red';
  };
  type Optional<T> = {
    [P in keyof T]?: T[P]; //for..in
  };
  type FruitsOptional = Optional<Fruits>;
  // conditional
  type Check<T> = T extends string ? boolean : null;
  type TypeName<T> = T extends string
    ? 'string'
    : T extends number
    ? 'function'
    : 'object';
  // read only
  function fru(f: Readonly<Fruits>) {
    // f.name='' 읽기 속성이라 재할당 불가능
  }
}
