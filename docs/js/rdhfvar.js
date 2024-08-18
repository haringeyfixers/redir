let urlParams = {}, hfsw="r", hfsw2="v"; //CHANGE THIS SWTICH PARAMETER FOR EACH DIFFERENT rd JS FILE
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
let sw_targ=true, ff_targ_text='', ff_targ='', qs= urlParams[hfsw], vqs= urlParams[hfsw2];; 

switch(qs) {
  case 'rchf'	:  ff_targ_text='Donation', ff_targ='https://squareup.com/i/HARINGEYFI'; // default
                  switch(vqs) {
                         case 'hf22'	: ff_targ_text='Donation', ff_targ='https://squareup.com/i/HARINGEYFI'; break; // https://bit.ly/4dKmRsE https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rchf&v=hf22 
                         // case 'hf23'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrchf23 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rchf&v=hf23 
                         // case 'hf24'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrchf24 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rchf&v=hf24 
                         // case 'hf25'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrchf25 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rchf&v=hf25 
                         // case 'hf26'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrchf26 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rchf&v=hf26 
                         // case 'hf27'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrchf27 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rchf&v=hf27 
                         // case 'hf28'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrchf28 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rchf&v=hf28 
                         // case 'hf29'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrchf29 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rchf&v=hf29 
                         // case 'hf30'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrchf30 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rchf&v=hf30 
                         // case 'hf31'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrchf31 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rchf&v=hf31 
                         // case 'hf32'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrchf32 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rchf&v=hf32   
                         // case 'hf33'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrchf33 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rchf&v=hf33   
                  } 
                  break;
  case 'rcag'	:  ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; //default
                  switch(vqs) {
                         // case 'hfrcag22'	: ff_targ_text='Donation', ff_targ='https://squareup.com/i/HARINGEYFI'; break; // https://bit.ly/hfrcag22 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag22 
                         // case 'hfrcag23'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrcag23 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag23 
                         // case 'hfrcag24'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrcag24 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag24 
                         // case 'hfrcag25'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrcag25 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag25 
                         // case 'hfrcag26'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrcag26 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag26 
                         // case 'hfrcag27'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrcag27 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag27 
                         // case 'hfrcag28'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrcag28 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag28 
                         // case 'hfrcag29'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrcag29 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag29 
                         // case 'hfrcag30'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrcag30 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag30 
                         // case 'hfrcag31'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrcag31 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag31 
                         // case 'hfrcag32'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrcag32 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag32   
                         // case 'hfrcag33'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrcag33 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag33   
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
