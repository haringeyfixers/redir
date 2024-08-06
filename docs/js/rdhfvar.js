let urlParams = {}, hfsw="r"; //CHANGE THIS SWTICH PARAMETER FOR EACH DIFFERENT rd JS FILE
(window.onpopstate = function () { let match, pl = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " "));  },
        query = window.location.search.substring(1);

    while (match = search.exec(query)) {
        if (decode(match[1]) in urlParams) {
            if (!Array.isArray(urlParams[decode(match[1])])) { urlParams[decode(match[1])] = [urlParams[decode(match[1])]]; }
            urlParams[decode(match[1])].push(decode(match[2]));
        } else { urlParams[decode(match[1])] = decode(match[2]); }
    }
})();
let sw_targ=true, ff_targ_text='', ff_targ='', qs= urlParams[hfsw]; 

switch(qs) {
  case 'rcag'	:  ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; let vqs= urlParams["v"];
                  switch(vqs) {
                         case 'hfrcag39'	: break; // https://bit.ly/hfrcag22 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag22 
                  }
    /* placeholders so each different bit.ly accumulates stats  All Good Repair Café
    https://bit.ly/hfrcag23 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag23 
    https://bit.ly/hfrcag24 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag24 
    https://bit.ly/hfrcag25 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag25 
    https://bit.ly/hfrcag26 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag26 
    https://bit.ly/hfrcag27 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag27 
    https://bit.ly/hfrcag28 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag28 
    https://bit.ly/hfrcag29 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag29 
    https://bit.ly/hfrcag32 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag32 
    https://bit.ly/hfrcag33 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag33 
    https://bit.ly/hfrcag34 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag34 
    https://bit.ly/hfrcag35 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag35 
    https://bit.ly/hfrcag36 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag36 
    https://bit.ly/hfrcag37 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag37 
    https://bit.ly/hfrcag38 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag38
    // QR CODES on posters
    https://bit.ly/hfrcag39 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag39
    https://bit.ly/hfrcag42 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag42
    https://bit.ly/hfrcag43 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag43
    https://bit.ly/hfrcag44 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag44
    https://bit.ly/hfrcag45 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag45
    https://bit.ly/hfrcag46 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag46
    https://bit.ly/hfrcag47 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag47
    https://bit.ly/hfrcag48 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag48
    https://bit.ly/hfrcag49 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag49
    https://bit.ly/hfrcag52 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag52
    */    
    break;
    sw_targ=false;break;   default:console.log("51 not found"); 
}
if (sw_targ==true) {// document.write('<meta http-equiv="refresh" content="1;url='+ff_targ+'"><title>'+ff_targ_text+'</title>');
                   window.location.href=ff_targ;
                   }
else {document.write('There may have been an error - no action possible:'+ff_targ);}
