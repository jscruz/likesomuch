var actualCode = [
'function listener()',
'{',
'var l=document.getElementsByClassName("UFILikeLink");',
				  'for(i=0;i<l.length;i++){',
			      'l[i].innerHTML="Like so much";',
		          '}',
'}var timeout = null;',
'document.addEventListener("DOMSubtreeModified", function() {',
    'if(timeout) {',
        'clearTimeout(timeout);',
    '}',
    'timeout = setTimeout(listener, 500);',
'}, false);',

                  ' // Beware! This array have to be joined',
                  ' // using a newline. Otherwise, missing semicolons',
                  ' //  or single-line comments (//) will mess up your',
                  ' //  code ----->'].join('\n');

var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.parentNode.removeChild(script);