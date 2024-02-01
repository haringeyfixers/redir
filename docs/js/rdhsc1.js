var sw_targ=true; var ff_targ=''; var qs= querySt('r'); switch(qs) {
case '122'	:ff_targ_text='Haringey Fixers';  ff_targ='https://hfixers.netlify.app?r122'; break; 
        // https://bit.ly/rdhsc1?r=122&z=	
case '123'	:ff_targ_text='BWF Social Cinema';  ff_targ='https://www.eventbrite.co.uk/e/539233310347/'; break; 
        // https://bit.ly/bwfs3 3FfHezg               https://haringeyfixers.github.io/redir/rdhsc1.htm?r=123
case '124'	:ff_targ_text='HF Recruitment & Selection Privacy Notice';  ff_targ='https://docs.google.com/document/d/1gxXAEgHrHH3KykCOPeEzrM54t88c19anuccEwwcRxqs/edit#heading=h.7f4a0ddu8wu1'; break; 
        // https://bit.ly/hfpolrspn                https://haringeyfixers.github.io/redir/rdhsc1.htm?r=124
case '125'	:ff_targ_text='Work With Us';  ff_targ='https://haringeyfixers.org/about-us/work-with-us/'; break; 
        // https://bit.ly/hfworkwith                https://haringeyfixers.github.io/redir/rdhsc1.htm?r=125     
case '126'	:ff_targ_text='xxxx';  ff_targ='xxxxxxxxxx'; break; 
        // https://bit.ly/xxxx                https://haringeyfixers.github.io/redir/rdhsc1.htm?r=126    
case '127'	:ff_targ_text='xxxx';  ff_targ='xxxxxxxxxx'; break; 
        // https://bit.ly/xxxx                https://haringeyfixers.github.io/redir/rdhsc1.htm?r=127  
case '128'	:ff_targ_text='xxxx';  ff_targ='xxxxxxxxxx'; break; 
        // https://bit.ly/xxxx                https://haringeyfixers.github.io/redir/rdhsc1.htm?r=128  
case '129'	:ff_targ_text='xxxx';  ff_targ='xxxxxxxxxx'; break; 
        // https://bit.ly/xxxx                https://haringeyfixers.github.io/redir/rdhsc1.htm?r=129  
        
default:sw_targ=false;break;
}
if (sw_targ==true) {document.write('<meta http-equiv="refresh" content="1;url='+ff_targ+'"><title>'+ff_targ_text+'</title>');
                   window.location.href=ff_targ;}
else {document.write('There may have been an error - no action possible:'+ff_targ);}
function querySt(Key) {var url = window.location.href; KeysValues = url.split(/[\?&]+/);
for (i = 0; i < KeysValues.length; i++) {KeyValue = KeysValues[i].split("="); if (KeyValue[0] == Key) {return KeyValue[1];}}}
