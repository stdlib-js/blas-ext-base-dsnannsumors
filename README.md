<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# dsnannsumors

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values, using ordinary recursive summation with extended accumulation, and returning an extended precision result.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
dsnannsumors = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dsnannsumors@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/blas-ext-base-dsnannsumors/tags). For example,

```javascript
dsnannsumors = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dsnannsumors@v0.0.10-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var dsnannsumors = require( 'path/to/vendor/umd/blas-ext-base-dsnannsumors/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dsnannsumors@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.dsnannsumors;
})();
</script>
```

#### dsnannsumors( N, x, strideX, out, strideOut )

Computes the sum of single-precision floating-point strided array elements, ignoring `NaN` values, using ordinary recursive summation with extended accumulation, and returning an extended precision result.

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
var out = new Float64Array( 2 );

var v = dsnannsumors( x.length, x, 1, out, 1 );
// returns <Float64Array>[ 1.0, 3 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: index increment for `x`.
-   **out**: output [`Float64Array`][@stdlib/array/float64] whose first element is the sum and whose second element is the number of non-NaN elements.
-   **strideOut**: index increment for `out`.

The `N` and `stride` parameters determine which elements are accessed at runtime. For example, to compute the sum of every other element in `x`,

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var Float64Array = require( '@stdlib/array-float64' );
var floor = require( '@stdlib/math-base-special-floor' );

var x = new Float32Array( [ 1.0, 2.0, NaN, -7.0, NaN, 3.0, 4.0, 2.0 ] );
var out = new Float64Array( 2 );
var N = floor( x.length / 2 );

var v = dsnannsumors( N, x, 2, out, 1 );
// returns <Float64Array>[ 5.0, 2 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var Float64Array = require( '@stdlib/array-float64' );
var floor = require( '@stdlib/math-base-special-floor' );

var x0 = new Float32Array( [ 2.0, 1.0, NaN, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var out0 = new Float64Array( 4 );
var out1 = new Float64Array( out0.buffer, out0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

var N = floor( x0.length / 2 );

var v = dsnannsumors( N, x1, 2, out1, 1 );
// returns <Float64Array>[ 5.0, 4 ]
```

#### dsnannsumors.ndarray( N, x, strideX, offsetX, out, strideOut, offsetOut )

Computes the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using ordinary recursive summation with extended accumulation and alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
var out = new Float64Array( 2 );

var v = dsnannsumors.ndarray( x.length, x, 1, 0, out, 1, 0 );
// returns <Float64Array>[ 1.0, 3 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetOut**: starting index for `out`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to calculate the sum of every other value in `x` starting from the second value

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var Float64Array = require( '@stdlib/array-float64' );
var floor = require( '@stdlib/math-base-special-floor' );

var x = new Float32Array( [ 2.0, 1.0, NaN, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var out = new Float64Array( 4 );
var N = floor( x.length / 2 );

var v = dsnannsumors.ndarray( N, x, 2, 1, out, 2, 1 );
// returns <Float64Array>[ 0.0, 5.0, 0.0, 4 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return a sum equal to `0.0`.
-   Accumulated intermediate values are stored as double-precision floating-point numbers.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dsnannsumors@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var x;
var i;

x = new Float32Array( 10 );
for ( i = 0; i < x.length; i++ ) {
    if ( randu() < 0.2 ) {
        x[ i ] = NaN;
    } else {
        x[ i ] = round( randu()*100.0 );
    }
}
console.log( x );

var out = new Float64Array( 2 );
dsnannsumors( x.length, x, 1, out, 1 );
console.log( out );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/ext/base/dnannsumors`][@stdlib/blas/ext/base/dnannsumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring NaN values and using ordinary recursive summation.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/dsnansumors`][@stdlib/blas/ext/base/dsnansumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring NaN values, using ordinary recursive summation with extended accumulation, and returning an extended precision result.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/dssumors`][@stdlib/blas/ext/base/dssumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using ordinary recursive summation with extended accumulation and returning an extended precision result.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-dsnannsumors.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-dsnannsumors

[test-image]: https://github.com/stdlib-js/blas-ext-base-dsnannsumors/actions/workflows/test.yml/badge.svg?branch=v0.0.10
[test-url]: https://github.com/stdlib-js/blas-ext-base-dsnannsumors/actions/workflows/test.yml?query=branch:v0.0.10

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-dsnannsumors/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-dsnannsumors?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-dsnannsumors.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-dsnannsumors/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-dsnannsumors/tree/deno
[umd-url]: https://github.com/stdlib-js/blas-ext-base-dsnannsumors/tree/umd
[esm-url]: https://github.com/stdlib-js/blas-ext-base-dsnannsumors/tree/esm
[branches-url]: https://github.com/stdlib-js/blas-ext-base-dsnannsumors/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-dsnannsumors/main/LICENSE

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32/tree/umd

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64/tree/umd

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/blas/ext/base/dnannsumors]: https://github.com/stdlib-js/blas-ext-base-dnannsumors/tree/umd

[@stdlib/blas/ext/base/dsnansumors]: https://github.com/stdlib-js/blas-ext-base-dsnansumors/tree/umd

[@stdlib/blas/ext/base/dssumors]: https://github.com/stdlib-js/blas-ext-base-dssumors/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
