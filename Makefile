init: test/sample-class.jsx
	jsx test/sample-class.jsx > test/normal-build.js
	jsx --release test/sample-class.jsx > test/release-build.js
	jsx --minify test/sample-class.jsx > test/minify-build.js
	jsx --executable node test/sample-class.jsx > test/node-build.js
	jsx --executable node --minify test/sample-class.jsx > test/node-minify-build.js
