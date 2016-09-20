"use strict";

var rule = require('../../../lib').rules['opening-newline']
var RuleTester = require('eslint').RuleTester

var ruleTester = new RuleTester()
ruleTester.run('opening-newline', rule, {
	valid: [
		'call(\targ)',
		'call(arg)',
		'call(\n\targ1,\n\targ2)',
		'call()'
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
		}
	]
})
