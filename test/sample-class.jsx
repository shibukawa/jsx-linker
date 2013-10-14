class SampleClass
{
    static const constVariable : string = "constVariable";

    var instanceVariable : string;

    function constructor()
    {
        this.instanceVariable = "instanceVariable";
    }

    function instanceMethod() : string
    {
        return 'instanceMethod()';
    }

    static function staticMethod() : string
    {
        return "staticMethod()";
    }
}

__export__ class ExportedSampleClass
{
    static const constVariable : string = "constVariable";

    var instanceVariable : string;

    function constructor()
    {
        this.instanceVariable = "instanceVariable";
    }

    function instanceMethod() : string
    {
        return 'instanceMethod()';
    }

    static function staticMethod() : string
    {
        return "staticMethod()";
    }
}

class _Main
{
    static function main(argv : string[]) : void
    {
    }
}
