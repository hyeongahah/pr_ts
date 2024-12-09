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
}
