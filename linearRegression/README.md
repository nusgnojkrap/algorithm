# Guide to Competitive Programming: Learning and Improving Algorithms Through Contests

<br>

### LinearRegression

<br>

> 최소제곱법, 또는 최소자승법, 최소제곱근사법, 최소자승근사법(method of least squares, least squares approximation)은 어떤 계의 해방정식을 근사적으로 구하는 방법으로, 근사적으로 구하려는 해와 실제 해의 오차의 제곱의 합(SS)이 최소가 되는 해를 구하는 방법이다.

<br>

> data[X(i), Y(i)], 임의의 1차함수 f(x) : y= ax + b
> 모든 data 의 X(i) 값에 대해서 Y(i) 와 1차 함수 f(X(i)) 값의 차이의 제곱
> Y(i) - f(X(i))
> 제곱을 하는 이유는 음수와 양수를 시그마로 더하면 차이가 사라질 수 있기 때문이다.
> Σ(Y(i) - f(X(i)))^2 = k
> 위의 식에서 k가 최소가 되는 a, b 를 찾아야 한다.
> 우선 식을 풀어주면
> Σ(Y(i) - aX(i) + b)^2 = k
> Σ(Y(i)^2 - Y(i)aX(i) + bY(i) - Y(i)aX(i) + a^2X(i)^2 -abX(i) + bY(i) - abX(i) + b^2) = k
> 정리하면
> Σ(Y(i)^2 - 2aX(i)Y(i) + 2bY(i) + a^2X(i)^2 - 2abX(i) + b^2) = k . . . (1)
> 해당 식에서 X(i), Y(i) 는 상수, a, b, k는 변수이다.
> 식 (1)에서 미분을 하여 0이 되는 지점을 찾아 k의 최소가 되는 지점을 찾는다.
> 식 (1) 을 a 에 대해서 미분
> -2ΣX(i)Y(i)da + 2aΣX(i)^2da -2bΣX(i)da = dk (여기서 da, dk 는 무한소) . . . (2)
> 식 (1) 을 b 에 대해서 미분
> 2ΣY(i) - 2aΣX(i) + 2bn = dk (여기서 n 은 data.length) . . . (3)
> dk = 0 이 되는 지점을 찾으면 식 (2), 식 (3) 으로 방정식 2개가 도출된다.
> 식 (2) 와 식 (3) 을 연립하여 계산한다.

<p align="center"><img src="./img/result.png" alt="error"></p>

<br>

### Reference

<br>

> https://greeksharifa.github.io/algorithm%20&%20data%20structure/2018/07/09/algorithm-fenwick-tree/

<br>
