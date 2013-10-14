/**
 * jsx-linker: JS souace code parsing modules
 *
 * @author shibukawa
 *
 * @see https://github.com/shibukawa/jsx-linker
 *
 * License: MIT
 */

import "console.jsx";
import "js/nodejs.jsx";
import "esprima.jsx";

class ExportItem
{
    var name : string;
    var filename : string;

    function constructor(name : string, filename : string)
    {
        this.name = name;
        this.filename = filename;
    }
}

/**
 * Parser module
 */
class JSCodeParser
{
    var content : string;
    var exports : Map.<string>;
    var defineJSXToken : EsprimaIdentifierToken;
    var useJSXToken : EsprimaToken;
    var paramName : string;
    var objectMapName : string;

    function constructor (content : string)
    {
        this.content = content;
        this.exports = {} : Map.<string>;
        this.defineJSXToken = null;
        this.useJSXToken = null;

        var tokens = esprima.parse(content).body;

        var i : int;
        i = this.findJSXdefinition(tokens);
        i = this.findJSXusage(tokens, i);

        var callee = (tokens[i].expression as __noconvert__ EsprimaFunctionCallToken).callee;
        this.paramName = callee.params[0].name; // If you --minify is not used, always 'JSX';
        var bodyTokens = callee.body.body;

        this.findObjectMapName(bodyTokens);
        this.findClassMap(bodyTokens);
    }

    function getOption() : variant
    {
        var result = {} : Map.<variant>;
        result['code'] = this.content;
        var exports = [] : ExportItem[];
        result['exportItems'] = exports;
        for (var key in this.exports)
        {
            if (this.exports.hasOwnProperty(key))
            {
                exports.push(new ExportItem(key, this.exports[key]));
                if (key == '_Main')
                {
                    result['mainFile'] = this.exports[key];
                }
            }
        }
        return result as variant;
    }

    function findJSXdefinition(tokens: EsprimaToken[]) : int
    {
        var find = false;
        for (var i = 0; i < tokens.length; i++)
        {
            var token = tokens[i];
            if (token.type == 'VariableDeclaration' && token.declarations[0].id.name == 'JSX')
            {
                this.defineJSXToken = token.declarations[0].id;
                find = true;
                i++;
                break;
            }
        }
        if (!find)
        {
            throw new Error("Can't find JSX declaration. JSX and linker versions are not match");
        }
        return i;
    }

    function findJSXusage(tokens : EsprimaToken[], startIndex : int) : int
    {
        var find = false;
        for (var i = startIndex; i < tokens.length; i++)
        {
            var token = tokens[i];
            if (token.type == 'ExpressionStatement' && token.expression.type == 'CallExpression')
            {
                var arguments = (token.expression as __noconvert__ EsprimaFunctionCallToken).arguments;
                if (arguments.length == 1 && arguments[0].name == 'JSX')
                {
                    this.useJSXToken = arguments[0];
                    find = true;
                    break;
                }
            }
        }
        if (!find)
        {
            throw new Error("Can't find JSX declaration. JSX and linker versions are not match");
        }
        return i;
    }

    function findObjectMapName(tokens : EsprimaToken[]) : void
    {
        var find = false;
        for (var i = 0; i < tokens.length; i++)
        {
            var token = tokens[i];
            if (token.type == 'ExpressionStatement' && token.expression.type == 'AssignmentExpression')
            {
                var left = (token.expression as __noconvert__ EsprimaOperatorToken).left;
                if (left.object.name == this.paramName && left.property.name == 'require')
                {
                    var right = (token.expression as __noconvert__ EsprimaOperatorToken).right;
                    var childTokens = right.body.body;
                    for (var j = 0; j < childTokens.length; j++)
                    {
                        if (childTokens[j].type == 'VariableDeclaration')
                        {
                            this.objectMapName = childTokens[j].declarations[0].init.object.name;
                            find = true;
                            break;
                        }
                    }
                }
            }
        }
        if (!find)
        {
            throw new Error("Can't find JSX declaration. JSX and linker versions are not match");
        }
    }

    function findClassMap(tokens : EsprimaToken[]) : void
    {
        var find = false;
        for (var i = tokens.length - 1; i > -1; i--)
        {
            var token = tokens[i];
            if (token.type == 'VariableDeclaration' && token.declarations[0].id.name == this.objectMapName)
            {
                var properties = token.declarations[0].init.properties;
                for (var j = 0; j < properties.length; j++)
                {
                    var property = properties[j];
                    var filename = property.key.value;
                    if (filename.indexOf("system:") == 0)
                    {
                        continue;
                    }
                    for (var k = 0; k < property.value.properties.length; k++)
                    {
                        var className = property.value.properties[k].key.name;
                        if (className.slice(-1) != '$')
                        {
                            this.exports[className] = filename;
                        }
                    }
                }
                find = true;
            }
        }
        if (!find)
        {
            throw new Error("Can't find JSX declaration. JSX and linker versions are not match");
        }
    }
}
