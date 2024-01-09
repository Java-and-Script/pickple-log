---
title: '재귀함수'
date: '2024-01-10'
spoiler: '재귀함수란?'
---

## Contents

# 재귀함수

재귀함수는 정의 단계에서 자기 자신을 재참조 하는 함수로서, 트리, 트라이의 자동완성, dfs 기타 자료구조 및 알고리즘을 풀 때 빼놓을 수 없는 개념이다.

재귀함수를 그동안 제대로 이해하려고 하지 않고, 어물쩡~~ 저물쩡~~ 예제코드가 어쩌구~~ 뭐쩌구~~ 하면서 넘어갔지만 더이상은 안되겠다는 생각이 들어서 오늘 정리를 한번 해보려고 한다.
![](https://velog.velcdn.com/images/busybusyworld/post/80b36e61-adc0-4449-b94e-0b2652a44e5e/image.png)

> 더는 미룰 수 없다.

# 재귀함수의 구성

재귀함수는 두가지의 부분으로 구분 할 수 있다.

1. 재귀를 하면서 원하는 요구를 수행하는 부분
2. 종료 조건을 표시한 부분

여기서 재귀함수를 이미 알고있는 사람은 1~10까지 더하는 함수를 재귀적으로 나타내어 보자. 재귀함수를 잘 모르는 사람은 아래의 코드를 확인해보자.

```js
//일반 함수로 구현
function recursive_plus(num, sum) {
  //재귀함수가 끝나는 조건을 표시
  if (num == 0) return sum;
  //재귀를 하면서 실행될 로직
  sum += num;
  //자기 자신을 다시 쓰는, 재귀를 하는 부분
  return recursive_plus(num - 1, sum);
}
console.log(recursive_plus(10, 0)); //55

//사실 이렇게도 할 수 있다.
function recursive_plus(num, sum) {
  if (num <= 1) return num;
  return num + recursive_plus(num - 1, sum);
}

//클래스로 구현
class recursive_plus {
  constructor() {
    this.sum = 0;
  }
  recursive_logic(num) {
    //재귀함수가 끝나는 조건을 표시
    if (num == 0) return this.sum;
    //재귀를 하면서 실행될 로직
    this.sum += num--;
    //자기 자신을 다시 쓰는, 재귀를 하는 부분
    this.recursive_logic(num);
  }
}
const SUM = new recursive_plus();
SUM.recursive_logic(10);
console.log(SUM.sum); //55
```

이런 식으로 작성을 할 수 있다.

재귀함수를 실행하면 지역변수, 반환주소값, 매개변수가 콜스택에 차례차례 쌓이게 된다.
![](https://velog.velcdn.com/images/busybusyworld/post/c8ae6dec-75e5-4987-bf0f-634c5382cb99/image.png)
재귀함수가 실행될때, 콜스택이란 곳에 함수가 차곡차곡 push되어서 종료조건까지 실행이 끝나면 하나씩 pop된다고 생각하면 된다.

이해를 편하게 하기위해, 위의 두번째 더하기 함수가

```js
return num+(num-1)+(num-2)+(num-3)+...+2+1;
```

이렇게 동작한다고 보면 된다.

## 앞구르기~ 뒷구르기~

재귀함수도 재귀함수를 앞에 둘 수도 있고, 뒤에 둘 수 있다.

```js
//종료조건에 닿으면 재귀 종료
function recursive_plus_front(num, sum) {
  if (num <= 1) return num;
  return num + recursive_plus_front(num - 1, sum);
}
//종료조건까지 재귀 실행
function recursive_plus_back(num, sum) {
  if (num > 1) return num + recursive_plus_back(num - 1, sum);
  return 1;
}
console.log(recursive_plus_front(10, 0)); //55
console.log(recursive_plus_back(10, 0)); //55
```

취향과 상황에 맞게 골라드시면 되겠습니다. 아니 그냥 둘 다 연습을 하십셔

## 종료조건 정의

여기서 중요한 부분은 종료부분이라고 생각을 한다.
자기가 어떤 조건을 만족할 때 재귀를 종료하고 return을 뭘 시킬지를 생각을 해보는게 좋을 것이다.

만약 그렇지 않는다면 꼬리에 꼬리를 무는 함수...
꼬꼬무 함수의 탄생을 마주하게 될것이다.
![](https://velog.velcdn.com/images/busybusyworld/post/5eeae37d-93c9-4260-a007-d36e9db3fbaa/image.png)

> 종료조건을 잘 작성하지 못한다면 무한루프에 빠질 수 있다.

## 종료조건 만들기

그리고 이럴 때 재귀를 종료합니다~~ 라고만 하면 안되고, 함수안에서 다시 함수를 부를때, 인자가 변화를 해야한다. 위의 함수에서는 num을 계속 1씩 빼면서 종료조건에 닿게 만들어준다.

# 꼬리재귀

tail_call recursive function이라고 부르는데, 일반재귀함수와 다른점이 있다.
연산부를 바로 리턴에 보내버린다는 점인데 아래의 코드를 확인해보자.

```js
let t1 = performance.now();
function recursive_plus(num, sum) {
  if (num == 1) return num;
  sum += num;
  return num + recursive_plus(num - 1, sum);
}
let t2 = performance.now();

let t3 = performance.now();
function tail_call_recursive_plus(num, sum) {
  if (num == 1) return sum + 1;
  return tail_call_recursive_plus(num - 1, sum + num);
}
let t4 = performance.now();
console.log(recursive_plus(100, 0), `time : ${t2 - t1}ms`);
console.log(tail_call_recursive_plus(100, 0), `time : ${t4 - t3}ms`);
```

실행을 해보면 속도차이가 10배 넘게 차이가 나는것을 알 수 있다.
메모리를 덜 사용한다고 한다.

# 사실은 반복문 써도 똑같음

재귀함수가 당장은 필요하지 않다고 생각할 수 있다. 알고리즘 문제에서 사용하는거면 몰라도, 콜스택이 흘러넘치는 문제(`스택오버플로우`)를 감수하면서까지 코드를 짤 때, 반복문 대신에 재귀를 사용할 필요가 있을까?

내 생각에 우리는 결국 나중에 규모가 점점 커지는 프로젝트들을 할텐데, 조금 더 코드를 직관적이고, 간결하게 알아볼 수 있게 해주는데 의의가 있는것 같다. 당장에 dfs를 재귀로 구현한 코드만 보더라도 재귀에 익숙하다면 지금 어떤 코드를 짜버린건지 이해를 하기가 쉽다.

코딩을 하다 보면 콜백함수도 자주 넣게 되는데, 이런, 함수와 함수의 상호작용을 다루는 부분도 재귀함수와 비슷한 부분이 많은 것 같다. 실용적인 부분은 차치하더라도, 조금 더 프로그래머처럼 사고하는데 그 의미가 있다고 생각한다!

![](https://velog.velcdn.com/images/busybusyworld/post/6e1a4ff9-b640-4b4e-ab7b-689f489d4fb4/image.png)

> 그래도 재귀함수 사랑하시죠...? ^^

### 이미지 출처

https://www.geeksforgeeks.org/
