function footer()
{

var d = new Date();
var date = d.getFullYear();    

var text =  '<div class="group row"> <p class="c2">&copy; Copyright 2011-'+date+'&nbsp; <a href="http://saga-project.org">The SAGA Project</a></p>';
    text += '<p class="c3">This work is funded by the following grants: <a href="http://nsf.rutgers.edu/2011/12/title-cdi-type-ii-mapping-complex.html">NSF-CHE 1125332 (CDI)</a>, <a href="http://lasigma.loni.org/">NSF-EPS 1003897 (LaSIGMA)</a>, <a href="http://sites.google.com/site/extenci/">NSF-OCI 1007115 (ExTENCI)</a>. Previous grants include: <a href="http://www.nsf.gov/pubs/2006/nsf06599/nsf06599.htm">NSF-OCI 0710874 (HPCOPS)</a>, NIH grant number P20RR016456 and UK EPSRC grant number GR/D0766171/1 (via <a href="http://www.omii.ac.uk/">OMII-UK</a>).</p>';
    text += '<p class="c2"><a href="http://validator.w3.org/check?uri=referer"><img src="http://www.w3.org/Icons/valid-xhtml10" alt="Valid XHTML 1.0 Transitional" height="31" width="88" /></a></p></div>';

document.write(text);
}


function forkme()
{
 
var text = '<a href="http://github.com/saga-project/bliss"><img class="c2" src="http://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png" alt="Fork me on GitHub" /></a>'

document.write(text);
}

function follow()
{

var text =  '<script src=\'http://www.go2web20.net/twitterfollowbadge/1.0/badge.js\' type=\'text/javascript\'></script>'
    text += '<script type=\'text/javascript\' charset=\'utf-8\'>'
    text += '    tfb.account = \'SAGAGridAPI\';'
    text += '    tfb.label = \'follow-us\';'
    text += '    tfb.color = \'#00aeef\';'
    text += '   tfb.side = \'r\';'
    text += '    tfb.top = 190;'
    text += '    tfb.showbadge();'
    text += ' </script>'

document.write(text);

}
