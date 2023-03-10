var sw_targ=true; var ff_targ=''; var qs= querySt('r'); switch(qs) {
case '122'	:ff_targ_text='Haringey Fixers';  ff_targ='https://hfixers.netlify.app?r122'; break; 
        // bit.ly/rdhsc1?r=122&z=	
case '123'	:ff_targ_text='Haringey Fixers';  ff_targ='https://hfixers.netlify.app?r123'; break; 
        // bit.ly/bwfs3 3FfHezg               https://haringeyfixers.github.io/redir/rdhsc1.htm?r=123

default:sw_targ=false;break;
}
if (sw_targ==true) {document.write('<meta http-equiv="refresh" content="1;url='+ff_targ+'"><title>'+ff_targ_text+'</title>');
                   window.location.href=ff_targ;}
else {document.write('There may have been an error - no action possible:'+ff_targ);}
function querySt(Key) {var url = window.location.href; KeysValues = url.split(/[\?&]+/);
for (i = 0; i < KeysValues.length; i++) {KeyValue = KeysValues[i].split("="); if (KeyValue[0] == Key) {return KeyValue[1];}}}
