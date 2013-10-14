import "test-case.jsx";
import "parse-code.jsx";
import "js/nodejs.jsx";


class _Test extends TestCase
{
    override function setUp() : void
    {
    }

    override function tearDown() : void
    {
    }

    function test_simple_build() : void
    {
        var parser = new JSCodeParser(node.fs.readFileSync('test/normal-build.js', 'utf8'));
        this.expect(parser.defineJSXToken).notToBe(null);
        this.expect(parser.useJSXToken).notToBe(null);
        this.expect(parser.paramName).toBe('JSX');
        this.expect(parser.objectMapName).toBe('$__jsx_classMap');
        this.expect(parser.exports.hasOwnProperty('SampleClass')).toBe(true);
        this.expect(parser.exports.hasOwnProperty('ExportedSampleClass')).toBe(true);
        this.expect(parser.exports['SampleClass']).toBe('test/sample-class.jsx');
        this.expect(parser.exports['ExportedSampleClass']).toBe('test/sample-class.jsx');
    }

    function test_release_build() : void
    {
        var parser = new JSCodeParser(node.fs.readFileSync('test/release-build.js', 'utf8'));
        this.expect(parser.defineJSXToken).notToBe(null);
        this.expect(parser.useJSXToken).notToBe(null);
        this.expect(parser.paramName).toBe('JSX');
        this.expect(parser.objectMapName).toBe('$__jsx_classMap');
        this.expect(parser.exports.hasOwnProperty('SampleClass')).toBe(true);
        this.expect(parser.exports.hasOwnProperty('ExportedSampleClass')).toBe(true);
        this.expect(parser.exports['SampleClass']).toBe('test/sample-class.jsx');
        this.expect(parser.exports['ExportedSampleClass']).toBe('test/sample-class.jsx');
    }

    function test_minify_build() : void
    {
        var parser = new JSCodeParser(node.fs.readFileSync('test/minify-build.js', 'utf8'));
        this.expect(parser.defineJSXToken).notToBe(null);
        this.expect(parser.useJSXToken).notToBe(null);
        this.expect(parser.paramName).toBe('b');
        this.expect(parser.objectMapName).toBe('f');
        this.expect(parser.exports.hasOwnProperty('SampleClass')).toBe(false);
        this.expect(parser.exports.hasOwnProperty('ExportedSampleClass')).toBe(true);
        this.expect(parser.exports['ExportedSampleClass']).toBe('test/sample-class.jsx');
    }
}
