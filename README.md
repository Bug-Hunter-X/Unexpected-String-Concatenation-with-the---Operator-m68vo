# Unexpected String Concatenation in JavaScript

This repository demonstrates a common JavaScript bug related to the loose typing of the + operator.  When used with strings, it performs string concatenation, which can lead to unexpected results if not handled carefully.  The example shows how using the + operator with a mix of numbers and strings can produce unexpected outputs.

The `bug.js` file contains the problematic code, and `bugSolution.js` provides a solution to mitigate the issue by using explicit type checking or conversion.