{
  type num = number;
  const first: num = 23;
  type str = string;
  const frui: str = 'apple';

  type fruits = 'apple' | 'banana';
  function fru(fruit: fruits) {
    console.log(fruit);
  }
  fru('apple');
  // 성공, 실패만 있고 다른 값은 못 들어오게-
  type success = {
    response: {
      body: string;
    };
  };
  type fail = {
    response: string;
  };
	type wait = {
		repsonse: {
			body: string;
		}
	}
	// 타입 and
	function con(result: success & wait){
		console.log(result.response)
	}
	// 타입 or
  type connect = success | fail;
  function login(id: string, password: string): Promise<connect> {
		return {
			...
		}
	}
	
}  
