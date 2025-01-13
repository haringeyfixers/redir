var sw_targ=true, ff_targ='', ff_targ_text='Haringey Fixers', qs= querySt('x'); if (qs.length < 1) {sw_targ=false;}
// catchall redir https://haringeyfixers.github.io/redir/rdhfdx.htm?x=100	
switch(qs) {
case '100'	:ff_targ_text='BroadWater Farm';  		ff_targ='https://fb.com/groups/BroadWaterFarm'; break;		
default:     ff_targ_text='Haringey Fixers';  		ff_targ='https://HaringeyFixers.org#x='+qs;    break;					
}    
if (sw_targ==true) {document.write('<meta http-equiv="refresh" content="1;url='+ff_targ+'"><title>'+ff_targ_text+'</title>');			
window.location.href=ff_targ;}			
else {document.write('There may have been an error - no action possible, qs->'+qs+ '<- targ->' +ff_targ+ '<-');}			
function querySt(Key) {var url = window.location.href; KeysValues = url.split(/[\?&]+/);			
for (i = 0; i < KeysValues.length; i++) {KeyValue = KeysValues[i].split("="); if (KeyValue[0] == Key) {return KeyValue[1];}}}
