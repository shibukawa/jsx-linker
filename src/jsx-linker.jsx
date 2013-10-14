/**
 * jsx-linker
 *
 * JSX postprocessor to support various environment
 *
 * [sample] This comment is document for class. You can use some HTML tags.
 *
 * @author shibukawa
 *
 * @see https://github.com/shibukawa/jsx-linker
 *
 * License: MIT
 */

import "console.jsx";
import "js/nodejs.jsx";
import "getopt.jsx";
import "hogan.jsx";
import "parse-code.jsx";

/**
 */
class JSXLinker
{
    function constructor ()
    {
    }

    static function templates() : string[]
    {
        var result = [] : string[];
        var templatePath = node.path.resolve(node.__dirname, '../templates');
        var files = node.fs.readdirSync(templatePath);
        for (var i = 0; i < files.length; i++)
        {
            var filename = files[i];
            if (filename.slice(- ".mustache".length) == ".mustache")
            {
                result.push(filename.slice(0, - ".mustache".length));
            }
        }
        return result;
    }

    function link(sourcecode : string, templateName : string, output : string) : void
    {
        var templatePath = node.path.resolve(node.__dirname, '../templates', templateName + '.mustache');
        var templateSrc = node.fs.readFileSync(templatePath, 'utf8');
        var template = Hogan.compile(templateSrc);

        var parser = new JSCodeParser(sourcecode);
        var option = parser.getOption();

        var resultCode = template.render(option);

        if (output)
        {
            node.fs.writeFileSync(output, resultCode, 'utf8');
        }
        else
        {
            process.stdout.write(resultCode);
        }
    }
}

class _Main {
    static function main(argv : string[]) : void
    {
        var templates = JSXLinker.templates();

        var parser = new BasicParser('s(stdin)o:(output)t:(template)h(help)', argv);
        var help = false;
        var template = '';
        var output = '';
        var source = '';
        var stdin = false;

        var opt = parser.getopt();
        while (opt)
        {
            switch (opt.option)
            {
            case 's':
                stdin = true;
                break;
            case 't':
                template = opt.optarg;
                break;
            case 'o':
                output = opt.optarg;
                break;
            case 'h':
                help = true;
                break;
            default:
                source = opt.option;
                break;
            }
            opt = parser.getopt();
        }
        if (help || (!source && !stdin) || !template)
        {
            console.error('''
$ jsx-linker [options] [source]

options:
  -s, --stdin              : read source file from stdin
  -o file, --output=file   : set output file
  -t name, --template=name : set template file
  -h, --help               : show this message

supported templates:''');
            console.error('  ' + templates.join(', '));
        }
        else
        {
            var linker = new JSXLinker();
            if (stdin)
            {
                var sourceBuffer = [] : string[];
                process.stdin.on('data', function (chunk : variant) {
                    sourceBuffer.push(chunk as string);
                });
                process.stdin.on('end', function () {
                    linker.link(sourceBuffer.join(''), template, output);
                });
            }
            else
            {
                linker.link(node.fs.readFileSync(source, 'utf8'), template, output);
            }
        }
    }
}
