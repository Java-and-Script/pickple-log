---
title: 'This'
date: '2024-01-08'
spoiler: '자바스크립트의 this란?'
---

## Contents

# this란?

mdn 공식문서에서는 this를 다음과 같이 설명하고 있습니다.
![](https://velog.velcdn.com/images/busybusyworld/post/847010ef-f29a-4e90-a931-eb0d1c7b3117/image.png)

> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this

언뜻보았을때 "this가 뭔지 알려달라니까 주절주절 이상한 말들을 하고있네"라고 생각할 수도 있습니다.

하지만 이 글들을 끝까지 읽고 다시 위의 this에 대한 설명을 읽어본다면, 저 설명이 한번에 this를 제법 잘 설명했다는 사실을 알 수 있을 것입니다.

# 1.자신의 가장 가까운 상위 객체를 가리킴

this의 가장 기본적인 기능은 this가 쓰인 위치의 가장 가까운 상위 객체를 가리킨다는 것입니다. 간단한 예제를 2개 보여드리겠습니다.
![](https://velog.velcdn.com/images/busybusyworld/post/c417df4c-60b9-4b96-bdd4-225fa4778071/image.png)
먼저 브라우저 콘솔에서 this를 출력해보면 window객체를 가리키게 됩니다.

사실 우리가 자바스크립트에 뭔가 코드를 짜게 되면, 아무것도 없는 빈공간에 짜는것이 아니라 window(브라우저)/global(node.js)이라는 전역객체에 코드를 짜게 되는것입니다. 그래서 우리의 코드가 정의된 바로 상위 객체인 window를 가리키게 됩니다.

하지만 다음 예제를 보면 좀 의아한 생각이 들 수도 있습니다.
![](https://velog.velcdn.com/images/busybusyworld/post/a2b61879-541e-4c51-bb9d-671b5188f3ef/image.png)

node.js 환경에서 this가 뭔지 출력을 해봤더니 그냥 빈 객체 {}를 나타냅니다. 분명 위에서 언급한대로면 global이라는 객체가 나와야 할 것 같은데 말이죠,,,,
![](https://velog.velcdn.com/images/busybusyworld/post/a904800a-820e-485a-a222-de51648bbd7e/image.png)

> 알쏭달쏭 자바스크립트 세상...

결과적으로 말하면 node.js에서 저희가 짠 스크립트들은 어떤 함수에 담기고 그 함수를 담고있는 것은 모듈입니다.

결국, 상위 객체는 빈 객체이기 때문에 위와 같은 코드를 실행시키면 빈 객체가 출력이 되게 됩니다.

# 2.일반 함수에서는 전역객체를 가리킨다.

그렇다면, 어떻게 하면 global 객체를 확인할 수 있을까요?

다음과 같은 코드를 실행시켜 봅시다.
![](https://velog.velcdn.com/images/busybusyworld/post/72550d28-cb86-4980-b28e-88aecc7e4145/image.png)

일반적인 함수인 function(){}에서 this를 실행시키면 global이 잘 나타나는 것을 알 수 있습니다.

왜냐하면, 일반함수 안에서 this를 실행시키면 그 this는 전역객체를 가리키기 때문입니다.

## !객체안의 함수 프로퍼티에서의 this는 상위객체를 가리킵니다.

![](https://velog.velcdn.com/images/busybusyworld/post/98e6fcb5-7920-48d2-854c-f5aa92471c6f/image.png)

객체의 벨류로 할당된 함수의 경우, 맨 앞에서 설명했듯이 가장 가까운 상위객체인 obj를 가리키는 반면,
벨류안의 일반함수는 전역 객체를 가리킨다는 사실을 알 수 있습니다.

# 3.생성자에서는 자기 자신을 가리킨다.

한편 다음과 같은 상황도 생각해 볼 수 있습니다.
![](https://velog.velcdn.com/images/busybusyworld/post/d3c31508-1e69-4774-95dd-3c61fe656c26/image.png)

다음의 코드에서 철수는 this값을 할당 받았고, 위에서 설명했다시피 this가 일반함수에서 실행되었기 때문에 전역객체를 가리키게 됩니다.
전역객체에 .을 써서 철수의 이름과 키가 들어가긴했네요.

하지만 new 연산자를 함수 실행부 앞에 붙여서 실행을 한다면 다음과 같이
![](https://velog.velcdn.com/images/busybusyworld/post/15c8c0c9-9942-4c82-878f-d9f8f1e1a090/image.png)

this는 생성자 함수의 인스턴스를 가리키게 됩니다.

즉, 만약 인스턴스를 만들 목적으로 함수를 짜고 있다면, 인스턴스를 만들 때, 이런이런 변수를 만들어주세요~ 하고 this를 쓸 수도 있습니다. class에서도 비슷하게 this가 쓰입니다.

## 주의사항

주의할 점은 다른 프로그래밍 언어들과 다르게
![](https://velog.velcdn.com/images/busybusyworld/post/74433228-3a10-4cb5-b7b4-dfd5e353f8b9/image.png)

다음과 같이 생성자 함수 안에 있는 변수를 가리키기 위해 this를 쓰면 안된다는 점입니다. 저 경우에는 인스턴스의 name은 this로 만든 name이 들어갑니다. let이나 const로 만든 변수의 경우에는 모습을 감추네요.
생성자 함수 안에서 this.name = 뭐뭐에 접근하려면 계속 this.name = 붜붜 라고 입력을 해줘야 합니다.
![](https://velog.velcdn.com/images/busybusyworld/post/56e5b21d-1a04-4b36-a24d-1739a742b153/image.png)
![](https://velog.velcdn.com/images/busybusyworld/post/ae0b2e1c-8efa-4b09-8bb8-cb0666d4a349/image.png)

# 4.이벤트리스너에서는

자바스크립트에는 addEventListener라는 메소드가 있습니다.
여기에서 this는 무엇을 가리킬까요?

버튼을 만들고 클릭을 하면 this를 출력하게 코드를 짜보았습니다.
![](https://velog.velcdn.com/images/busybusyworld/post/26b0f2dd-d012-49b1-ab92-52ba7cd3390f/image.png)
출력 결과, 버튼 요소가 반환이 되었습니다.

이는 다음과 같이
![](https://velog.velcdn.com/images/busybusyworld/post/aaf4bb7b-18a2-460d-b1d8-3bdaf1b8c4c3/image.png)
e.currentTarget(현재 이벤트가 부착 되어있는 요소)를 가리킨다는 사실을 알 수 있습니다.

# 5.arrow func에서는?

그럼 마지막으로 하나만 더 예시를 들어보겠습니다.
addEventListener의 함수를 화살표 함수로 바꾸면 어떻게 될까요? 똑같은 결과가 나올까요?
![](https://velog.velcdn.com/images/busybusyworld/post/f7ec6566-3f4e-4e5c-8ca6-20f96b32e1ea/image.png)

결과는 전역객체를 가리키고 있습니다.

사실 앞에서 말한 콜백과 같은 곳에도 일반함수를 쓰면 this가 전역객체를 가리키는 성질 때문에, es6에 추가된 화살표함수는 this가 자신의 가장 가까운 상위 객체를 가리키도록 만들어졌습니다.(정확히는 화살표함수는 this를 가지고 있지 않아서 자신을 둘러싼 렉시컬 스코프의 this를 사용)

위의 예시에서는 화살표함수의 바로 위 상위객체가 전역객체이기 때문에 this를 출력했을 때 전역객체가 나온것이구요,
![](https://velog.velcdn.com/images/busybusyworld/post/1569d05a-6f8b-4c9c-8012-03ec0bee3322/image.png)

다음과 같이 객체를 만들어주고 그 안에서 이벤트리스너를 달고 화살표함수를 쓴 경우, 자신의 가장 가까운 상위객체가 obj이기 때문에 obj가 출력이 되는 것을 알 수 있습니다.
