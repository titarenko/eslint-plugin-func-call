"use strict";

var util = require('util');

module.exports = {
	create: function (context) {
		return {
			CallExpression: function (node) {
				var curArgs = node.arguments.length
				var minArgs = context.options[0] || 1
				var referenceLine = node.callee.type == 'MemberExpression'
					? node.callee.property.loc.start.line
					: node.loc.start.line
				var lineToCompare = curArgs > 0
					? node.arguments[0].loc.start.line
					: node.loc.end.line
				if (curArgs <= minArgs && referenceLine != lineToCompare) {
					context.report({
						node: node,
						message: util.format(
							'Newline after opening brace is not allowed for function calls with %d or less arguments!',
							minArgs
						)
					})
				}
			}
		}
	}
}
