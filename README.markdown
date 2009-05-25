PhilHarnish.com
===============
This is a port of the static html pages used on [my website][1]. The [code][2] and images are released in the [public domain][3] and free for use in any context.

I started this project to learn the haml and sass templating languages. In the end the output wasn't much smaller than the code (~50% smaller). For larger projects or more structured data I could definitely see using haml for HTML generation.

I don't expect to do very much HTML generating server side in the sort of web apps I enjoy writing. At most I would use haml to generate the client-side templates and stitch them together in a JS template engine like [pure][4].

To build this site you will need the following ruby gems:
* [haml][5]
* [sass][6]
* [staticmatic][7]
* [maruku][8] (or any [other][9] [compatible][10] [markdown parser][11])

Run `staticmatic preview .` to view edits on a live local webserver. `staticmatic build .` will build the static files into the `site` directory.

Or download the generated files manually at [philharnish.com][1], though I can't imagine what the point of that would be--there isn't anything particularly useful in the output.

[1]: http://philharnish.com/
[2]: http://github.com/PhilHarnish/philharnish.com/
[3]: http://creativecommons.org/licenses/publicdomain/
[4]: http://github.com/pure/pure
[5]: http://haml.hamptoncatlin.com/docs/haml
[6]: http://haml.hamptoncatlin.com/docs/sass
[7]: http://staticmatic.rubyforge.org/
[8]: http://maruku.rubyforge.org/
[9]: http://github.com/rtomayko/rdiscount/
[10]:http://github.com/rtomayko/rpeg-markdown/
[11]:http://www.deveiate.org/projects/BlueCloth
