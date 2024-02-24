let urlParams = {};
(window.onpopstate = function () {
    let match,
        pl = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) {
            return decodeURIComponent(s.replace(pl, " "));
        },
        query = window.location.search.substring(1);

    while (match = search.exec(query)) {
        if (decode(match[1]) in urlParams) {
            if (!Array.isArray(urlParams[decode(match[1])])) {
                urlParams[decode(match[1])] = [urlParams[decode(match[1])]];
            }
            urlParams[decode(match[1])].push(decode(match[2]));
        } else {
            urlParams[decode(match[1])] = decode(match[2]);
        }
    }
})();


var sw_targ=true; let ff_targ='', qs= urlParams["r"]; 
let vqs= urlParams["r"]; 
console.log("urlp vqs="+vqs);
switch(qs) {
  case 'rcag'	: 
    /* placeholders so each different bit.ly accumulates stats  
    https://bit.ly/hfag22 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag#v=22 
    https://bit.ly/hfag23 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag#v=23 
    https://bit.ly/hfag24 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag#v=24 
    https://bit.ly/hfag25 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag#v=25 
    https://bit.ly/hfag26 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag#v=26 
    https://bit.ly/hfag27 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag#v=27 
    https://bit.ly/hfag28 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag#v=28 
    https://bit.ly/hfag29 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag#v=29 
    https://bit.ly/hfag32 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag#v=32 
    https://bit.ly/hfag33 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag#v=33 
    https://bit.ly/hfag34 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag#v=34 
    https://bit.ly/hfag35 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag#v=35 
    https://bit.ly/hfag36 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag#v=36 
    https://bit.ly/hfag37 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag#v=37 
    https://bit.ly/hfag38 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag#v=38 */    
    let ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259';
    break;
  default:sw_targ=false;break;
}
if (sw_targ==true) {document.write('<meta http-equiv="refresh" content="1;url='+ff_targ+'"><title>'+ff_targ_text+'</title>');
                   window.location.href=ff_targ;}
else {document.write('There may have been an error - no action possible:'+ff_targ);}
function querySt(Key) {var url = window.location.href; KeysValues = url.split(/[\?&]+/);
for (i = 0; i < KeysValues.length; i++) {KeyValue = KeysValues[i].split("="); if (KeyValue[0] == Key) {return KeyValue[1];}}}
