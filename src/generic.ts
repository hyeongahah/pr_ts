{
  const fruits = { name: 'apple', color: 'red' };
  const bob = { name: 'bob', age: '21' };

  console.log(result(fruits, 'name'));
  console.log(result(bob, 'name'));
  console.log(result(bob, 'age'));

  function result<T, K extends keyof T>(obj: T, key: K): T[K] {
    // K extends keyof T : K는 T 타입 중에 하나
    return obj[key];
  }

  interface HasName {
    name: string;
  }

  function greet<T extends HasName>(entity: T): string {
    return `Hello, ${entity.name}!`;
  }
  console.log(greet({ name: 'Alice' }));
  console.log(greet({ name: 'Bob', age: 25 }));
  console.log(greet({ age: 23 })); // 제한어 name이 없어서 오류
}
