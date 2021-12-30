# Guide to Competitive Programming: Learning and Improving Algorithms Through Contests

<br>

### binnaryIndexedTree

<br>

> 이진 인덱스 트리(Binary indexed tree), 혹은 펜윅 트리(Fenwick tree)는 누적 합 배열의 동적인 변종이라고 볼 수 있는 자료 구조이다. 이 자료 구조는 O(log n) 시간이 걸리는 연산 두 가지를 지원한다. 이진 인덱스 트리에 대한 내용을 다룰 때는 모든 배열의 인덱스가 1부터 시작한다고 가정한다. 그래야 자료 구조를 좀 더 쉽게 구현할 수 있기 때문이다.

<br>

<p align="center"><img src="./img/result.png" alt="error"></p>

<br>

위 그림에 모든 것이 설명되어 있긴 하지만, 자세히 살펴보자. i는 0 이상인 정수이다.인덱스가 홀수인 원소는 수열의 해당 인덱스의 값을 그대로 가진다.

<ol><li><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>d</mi><mi>a</mi><mi>t</mi><mi>a</mi><mo stretchy="false">[</mo><mn>2</mn><mi>i</mi><mo>+</mo><mn>1</mn><mo stretchy="false">]</mo><mo>=</mo><mi>a</mi><mi>r</mi><mi>r</mi><mo stretchy="false">[</mo><mn>2</mn><mi>i</mi><mo>+</mo><mn>1</mn><mo stretchy="false">]</mo></math></li><li>data[1] = arr[1], data[3] = arr[3], …</li></ol>
<br>

인덱스가 2의 배수이면서 4의 배수가 아닌 원소(2, 6, 10, 14, …)는 직전 두 arr 원소의 합을 보존한다.

<ol><li><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>d</mi><mi>a</mi><mi>t</mi><mi>a</mi><mo stretchy="false">[</mo><mn>4</mn><mi>i</mi><mo></mo><mn>2</mn><mo stretchy="false">]</mo><mo>=</mo><mi>a</mi><mi>r</mi><mi>r</mi><mo stretchy="false">[</mo><mn>4</mn><mi>i</mi><mo>+</mo><mn>1</mn><mo stretchy="false">]</mo><mo>+</mo><mi>a</mi><mi>r</mi><mi>r</mi><mo stretchy="false">[</mo><mn>4</mn><mi>i</mi><mo>+</mo>mn>2</mn><mo stretchy="false">]</mo></math></li><li>data[2] = arr[1] + arr[2], data[6] = arr[5] + arr[6], …</li></ol><br>

인덱스가 <math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mn>2</mn><mi>k</mi></msup></math>의 배수이면서 <math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mn>2</mn><mrow class="MJX-TeXAtom-ORD"><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msup></math>의 배수가 아닌 원소는 직전 arr의 <math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mn>2</mn><mi>k</mi></msup></math>개의 값의 합을 보존한다

<ol><li><math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>d</mi>
  <mi>a</mi>
  <mi>t</mi>
  <mi>a</mi>
  <mo stretchy="false">[</mo>
  <msup>
    <mn>2</mn>
    <mrow class="MJX-TeXAtom-ORD">
      <mi>k</mi>
      <mo>+</mo>
      <mn>1</mn>
    </mrow>
  </msup>
  <mo>&#x22C5;<!-- ⋅ --></mo>
  <mi>i</mi>
  <mo>+</mo>
  <msup>
    <mn>2</mn>
    <mi>k</mi>
  </msup>
  <mo stretchy="false">]</mo>
  <mo>=</mo>
  <msubsup>
    <mi mathvariant="normal">&#x03A3;<!-- Σ --></mi>
    <mrow class="MJX-TeXAtom-ORD">
      <mi>j</mi>
      <mo>=</mo>
      <mn>1</mn>
    </mrow>
    <mrow class="MJX-TeXAtom-ORD">
      <msup>
        <mn>2</mn>
        <mi>k</mi>
      </msup>
    </mrow>
  </msubsup>
  <mrow class="MJX-TeXAtom-ORD">
    <mi>a</mi>
    <mi>r</mi>
    <mi>r</mi>
    <mo stretchy="false">[</mo>
    <msup>
      <mn>2</mn>
      <mrow class="MJX-TeXAtom-ORD">
        <mi>k</mi>
        <mo>+</mo>
        <mn>1</mn>
      </mrow>
    </msup>
    <mo>&#x22C5;<!-- ⋅ --></mo>
    <mi>i</mi>
    <mo>+</mo>
    <mi>j</mi>
    <mo stretchy="false">]</mo>
  </mrow>
</math></li>
<li>data[12] = arr[9] + arr[10] + arr[11] + arr[12], …</li></ol>
<br>
