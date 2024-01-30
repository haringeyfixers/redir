var sw_targ=true; var ff_targ=''; var qs= querySt('r'); switch(qs) {
case '122'	:ff_targ_text='Haringey Fixers';  ff_targ='https://hfixers.netlify.app?r122'; break; 
        // bit.ly/rdhsc1?r=122&z=	
case '123'	:ff_targ_text='BWF Social Cinema';  ff_targ='https://www.eventbrite.co.uk/e/539233310347/'; break; 
        // bit.ly/bwfs3 3FfHezg               https://haringeyfixers.github.io/redir/rdhsc1.htm?r=123
case '124'	:ff_targ_text='HF Recruitment & Selection Privacy Notice';  ff_targ='https://docs.google.com/document/d/1gxXAEgHrHH3KykCOPeEzrM54t88c19anuccEwwcRxqs/edit#heading=h.7f4a0ddu8wu1'; break; 
        // bit.ly/hfpolrspn                https://haringeyfixers.github.io/redir/rdhsc1.htm?r=124
case '125'	:ff_targ_text='spare already bitlyd';  ff_targ='spare'; break; 
        // bit.ly/                https://haringeyfixers.github.io/redir/rdhsc1.htm?r=125                
default:sw_targ=false;break;
}
if (sw_targ==true) {document.write('<meta http-equiv="refresh" content="1;url='+ff_targ+'"><title>'+ff_targ_text+'</title>');
                   window.location.href=ff_targ;}
else {document.write('There may have been an error - no action possible:'+ff_targ);}
function querySt(Key) {var url = window.location.href; KeysValues = url.split(/[\?&]+/);
for (i = 0; i < KeysValues.length; i++) {KeyValue = KeysValues[i].split("="); if (KeyValue[0] == Key) {return KeyValue[1];}}}
