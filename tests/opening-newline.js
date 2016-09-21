"use strict";

var rule = require('../').rules['opening-newline']
var RuleTester = require('eslint').RuleTester

var ruleTester = new RuleTester()
ruleTester.run('opening-newline', rule, {
	valid: [
		'call(\targ)',
		'call(arg)',
		'call(\n\targ1,\n\targ2)',
		'call()',
		'call("\\\nasdasd\\\nasdasd\\\n")',
		'obj\n\t.method()',
		'obj\n\t.method(\na,\nb)',
		'obj\n\t.method(\ta)'
	],
	invalid: [
		{
			code: 'call(\n\targ,\n\targ2)',
			options: [3],
			errors: [ { message: 'Newline after opening brace is not allowed for function calls with 3 or less arguments!' } ]
		},
		{
			code: 'call(\n)',
			options: [3],
			errors: [ { message: 'Newline after opening brace is not allowed for function calls with 3 or less arguments!' } ]
		},
		{
			code: 'obj.call(\n)',
			options: [3],
			errors: [ { message: 'Newline after opening brace is not allowed for function calls with 3 or less arguments!' } ]
		},
		{
			code: 'obj.call(\na)',
			options: [2],
			errors: [ { message: 'Newline after opening brace is not allowed for function calls with 2 or less arguments!' } ]
		}
	]
})
