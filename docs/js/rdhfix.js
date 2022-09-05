var sw_targ=true; var ff_targ=''; var qs= querySt('h'); switch(qs) {
case 'f22'	:ff_targ_text='Haringey Fixers';  ff_targ='https://hfixers.netlify.app'; break; 
                // bit.ly/HaringeyFixers https://haringeyfixers.github.io/redir/rdhfix.htm?h=f22	
case 'f23'	:ff_targ_text='Haringey Fixers Overview'; ff_targ='https://docs.google.com/spreadsheets/d/1LaCUWUF886CihC-RcnagpLZMLllJtATr6qsTUHKg3Ss/edit?usp=sharing';break;
                // http://bit.ly/hfixovw https://haringeyfixers.github.io/redir/rdhfix.htm?h=f23
case 'f24'	:ff_targ_text='HfixAdmin';  ff_targ='https://docs.google.com/spreadsheets/d/1PeSyLKmi4tophgGlAk_ibcVGnw87pKLqYq3bexHNx34/edit?usp=sharing';break; 
        // bit.ly/hfixadmin https://haringeyfixers.github.io/redir/rdhfix.htm?h=f24					
case 'f25'	:ff_targ_text='Hfix booking - Disclaimer'; ff_targ='https://docs.google.com/document/d/1ochtkuOY2jynHUcukQ_zSWigz9MKTeEIGaxWDANaWzE/edit?usp=sharing';break; 
        // bit.ly/HfixBookDisclaim https://haringeyfixers.github.io/redir/rdhfix.htm?h=f25					
case 'f26'	:ff_targ='done'; ff_targ_text='tttttttttttttt'; break; 
        // bit.ly/xxxxxx https://haringeyfixers.github.io/redir/rdhfix.htm?h=f26					
case 'f27'	:ff_targ_text='tttttttttttttttttt'; ff_targ='done'; break; 
        // bit.ly/xxxxxx https://haringeyfixers.github.io/redir/rdhfix.htm?h=f27					
case 'f28'	:ff_targ_text='tttttttttttttttttt'; ff_targ='bbbbb'; break; 
        // bit.ly/xxxxxx https://haringeyfixers.github.io/redir/rdhfix.htm?h=f28					
case 'f29'	:ff_targ_text='tttttttttttttttttt'; ff_targ='bbbbb';break; 
        // bit.ly/xxxxxx https://haringeyfixers.github.io/redir/rdhfix.htm?h=f29					
case 'h30'	:ff_targ_text='tttttttttttttttttt'; ff_targ=''; break; 
        // bit.ly/xxxxxx https://haringeyfixers.github.io/redir/rdhfix.htm?h=h30					
case 'h31'	:ff_targ_text='tttttttttttttttttt'; ff_targ='';break; 
        // bit.ly/xxxxxx https://haringeyfixers.github.io/redir/rdhfix.htm?h=h31					
case 'h32'	:ff_targ_text='tttttttttttttttttt'; ff_targ='';	
        break; // bit.ly/xxxxxx https://haringeyfixers.github.io/redir/rdhfix.htm?t=he32					
case 'h33'	:ff_targ_text='tttttttttttttttttt'; ff_targ='';	
        break; // bit.ly/xxxxxx https://haringeyfixers.github.io/redir/rdhfix.htm?h=h33					
case 'h34'	:ff_targ_text='tttttttttttttttttt'; ff_targ=''; break; 
        // bit.ly/stm34 https://haringeyfixers.github.io/redir/rdhfix.htm?h=h34					
case 'h35'	:ff_targ_text='tttttttttttttttttt'; ff_targ='';	break; 
        // bit.ly/stm35 https://haringeyfixers.github.io/redir/rdhfix.htm?h=h35					
case 'h36'	:ff_targ_text='tttttttttttttttttt'; ff_targ='';	break; 
        // bit.ly/stm36 https://haringeyfixers.github.io/redir/rdhfix.htm?h=h36					
case 'h37'	:ff_targ_text='tttttttttttttttttt'; ff_targ='  '; break; 
        // bit.ly/stm37 https://haringeyfixers.github.io/redir/rdhfix.htm?h=h37					
case 'h38'	:ff_targ_text='tttttttttttttttttt'; ff_targ='https://';	break; 
        // bit.ly/stm38 https://haringeyfixers.github.io/redir/rdhfix.htm?h=h38					
case 'h39'	:ff_targ_text='tttttttttttttttttt'; ff_targ='https://';	break; 
        // bit.ly/stm39 https://haringeyfixers.github.io/redir/rdhfix.htm?h=h39					
case 'h40'	:ff_targ_text='tttttttttttttttttt'; ff_targ='https://';	break; 
        // bit.ly/stm40 https://haringeyfixers.github.io/redir/rdhfix.htm?h=h40									

default:sw_targ=false;break;
}
if (sw_targ==true) {document.write('<meta http-equiv="refresh" content="1;url='+ff_targ+'"><title>'+ff_targ_text+'</title>');
                   window.location.href=ff_targ;}
else {document.write('There may have been an error - no action possible:'+ff_targ);}
function querySt(Key) {var url = window.location.href; KeysValues = url.split(/[\?&]+/);
for (i = 0; i < KeysValues.length; i++) {KeyValue = KeysValues[i].split("="); if (KeyValue[0] == Key) {return KeyValue[1];}}}
