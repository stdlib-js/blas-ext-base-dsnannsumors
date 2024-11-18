/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

#include "stdlib/blas/ext/base/dsnannsumors.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/napi/export.h"
#include "stdlib/napi/argv.h"
#include "stdlib/napi/argv_int64.h"
#include "stdlib/napi/argv_strided_float32array.h"
#include "stdlib/napi/argv_strided_float64array.h"
#include "stdlib/strided/base/stride2offset.h"
#include <stdint.h>
#include <node_api.h>

/**
* Receives JavaScript callback invocation data.
*
* @private
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
static napi_value addon( napi_env env, napi_callback_info info ) {
	STDLIB_NAPI_ARGV( env, info, argv, argc, 5 );
	STDLIB_NAPI_ARGV_INT64( env, N, argv, 0 );
	STDLIB_NAPI_ARGV_INT64( env, strideX, argv, 2 );
	STDLIB_NAPI_ARGV_INT64( env, strideOut, argv, 4 );
	STDLIB_NAPI_ARGV_STRIDED_FLOAT32ARRAY( env, X, N, strideX, argv, 1 );
	STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY( env, Out, 2, strideOut, argv, 3 );

	int64_t io = stdlib_strided_stride2offset( 2, strideOut );
	CBLAS_INT n;
	Out[ io ] = API_SUFFIX(stdlib_strided_dsnannsumors)( N, X, strideX, &n );
	Out[ io + strideOut ] = (double)n;

	return NULL;
}

/**
* Receives JavaScript callback invocation data.
*
* @private
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
static napi_value addon_method( napi_env env, napi_callback_info info ) {
	STDLIB_NAPI_ARGV( env, info, argv, argc, 7 );
	STDLIB_NAPI_ARGV_INT64( env, N, argv, 0 );
	STDLIB_NAPI_ARGV_INT64( env, strideX, argv, 2 );
	STDLIB_NAPI_ARGV_INT64( env, offsetX, argv, 3 );
	STDLIB_NAPI_ARGV_INT64( env, strideOut, argv, 5 );
	STDLIB_NAPI_ARGV_INT64( env, offsetOut, argv, 6 );
	STDLIB_NAPI_ARGV_STRIDED_FLOAT32ARRAY( env, X, N, strideX, argv, 1 );
	STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY( env, Out, 2, strideOut, argv, 4 );

	CBLAS_INT n;
	Out[ offsetOut ] = API_SUFFIX(stdlib_strided_dsnannsumors_ndarray)( N, X, strideX, offsetX, &n );
	Out[ offsetOut + strideOut ] = (double)n;

	return NULL;
}

STDLIB_NAPI_MODULE_EXPORT_FCN_WITH_METHOD( addon, "ndarray", addon_method )