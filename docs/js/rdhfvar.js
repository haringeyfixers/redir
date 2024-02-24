var sw_targ=true; let ff_targ='', qs= querySt('r'); 
switch(qs) {
  case 'rcag'	: let vqs= querySt('v'), vqs_text='All Good Repair Café', vqs_dest='';
                switch(vqs) {
                  case '22'	: ff_targ_text='xxxx';  ff_targ='xxxxxxxxxx'; break; 
                  // https://bit.ly/xxxx                https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag#v=22 
                  case '23'	: ff_targ_text='xxxx';  ff_targ='xxxxxxxxxx'; break; 
                  // https://bit.ly/xxxx                https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag#v=23 
                  default:sw_targ=false;break;
               } 
              break;
  default:sw_targ=false;break;
}
if (sw_targ==true) {document.write('<meta http-equiv="refresh" content="1;url='+ff_targ+'"><title>'+ff_targ_text+'</title>');
                   window.location.href=ff_targ;}
else {document.write('There may have been an error - no action possible:'+ff_targ);}
function querySt(Key) {var url = window.location.href; KeysValues = url.split(/[\?&]+/);
for (i = 0; i < KeysValues.length; i++) {KeyValue = KeysValues[i].split("="); if (KeyValue[0] == Key) {return KeyValue[1];}}}
