let urlParams = {}, hfsw="r", hfsw2="v", sznogo=false; //CHANGE THIS SWTICH PARAMETER FOR EACH DIFFERENT rd JS FILE
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

let sw_targ=true, ff_targ_text='', ff_targ='', qs= urlParams[hfsw], vqs= urlParams[hfsw2]; //  ff_targ_text='Donation', ff_targ='https://square.link/u/1Ab8X7S0'; 

switch(qs) {
  case 'rchf'	: if (sznogo==true) {console.log("18 rchf nogo test");}// default http://127.0.0.1:8093/docs/rdhfvar.htm?r=rchf&v=hf22
                  switch(vqs) {
                         case 'hf22'	: ff_targ_text='Donation', ff_targ='https://square.link/u/1Ab8X7S0'; break; // https://bit.ly/4dKmRsE https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rchf&v=hf22 
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
                  default:console.log("31 rchf not found"); sznogo=true;break;} 
  break; 
  case 'rcag'	: if (sznogo==true) {console.log("34 rchf nogo test");}// default sznogo=true;
                  switch(vqs) {
                         case 'hf22'	: ff_targ_text='Donation', ff_targ='https://square.link/u/1Ab8X7S0'; break; // https://bit.ly/hfrcag22 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf22 
                         // case 'hf23'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrcag23 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf23 
                         // case 'hf24'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrcag24 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf24 
                         // case 'hf25'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrcag25 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf25 
                         // case 'hf26'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrcag26 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf26 
                         // case 'hf27'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrcag27 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf27 
                         // case 'hf28'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrcag28 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf28 
                         // case 'hf29'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrcag29 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf29 
                         // case 'hf30'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrcag30 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf30 
                         // case 'hf31'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrcag31 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf31 
                         // case 'hf32'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrcag32 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf32   
                         // case 'hf33'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrcag33 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf33   
                                     /* placeholders so each different bit.ly accumulates stats  All Good Repair Café
    https://bit.ly/hfrcag23 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf23 
    https://bit.ly/hfrcag24 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf24 
    https://bit.ly/hfrcag25 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf25 
    https://bit.ly/hfrcag26 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf26 
    https://bit.ly/hfrcag27 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf27 
    https://bit.ly/hfrcag28 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf28 
    https://bit.ly/hfrcag29 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf29 
    https://bit.ly/hfrcag32 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf32 
    https://bit.ly/hfrcag33 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf33 
    https://bit.ly/hfrcag34 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf34 
    https://bit.ly/hfrcag35 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf35 
    https://bit.ly/hfrcag36 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf36 
    https://bit.ly/hfrcag37 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf37 
    https://bit.ly/hfrcag38 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf38
    // QR CODES on posters
    https://bit.ly/hfrcag39 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf39
    https://bit.ly/hfrcag42 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf42
    https://bit.ly/hfrcag43 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf43
    https://bit.ly/hfrcag44 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf44
    https://bit.ly/hfrcag45 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf45
    https://bit.ly/hfrcag46 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf46
    https://bit.ly/hfrcag47 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf47
    https://bit.ly/hfrcag48 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf48
    https://bit.ly/hfrcag49 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf49
    https://bit.ly/hfrcag52 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf52
    */    
                  default:ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break;} 
  break; 
  case 'rcbw'	: if (sznogo==true) {console.log("77 rcbw nogo test");}// default sznogo=true;
                  switch(vqs) {
                         case 'hf22'	: ff_targ_text='Donation', ff_targ='https://square.link/u/1Ab8X7S0'; break; // https://bit.ly/hfrcag22 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf22 
                         // case 'hfrcag23'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hf23 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag23 
                         // case 'hf24'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrcag24 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf24 
                         // case 'hfrcag25'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hf25 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag25 
                         // case 'hf26'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrcag26 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf26 
                         // case 'hfrcag27'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hf27 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag27 
                         // case 'hf28'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrcag28 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf28 
                         // case 'hfrcag29'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hf29 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag29 
                         // case 'hf30'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrcag30 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf30 
                         // case 'hfrcag31'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hf31 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf31 
                         // case 'hf32'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrcag32 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf32   
                         // case 'hfrcag33'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hf33 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf33   
                   default:console.log("90 rcbw not found"); sznogo=true;break;} 
  break; 
  case 'rclh'	: if (sznogo==true) {console.log("17 rchf nogo test");}// default sznogo=true;
                  switch(vqs) {
                         case 'hf22'	: ff_targ_text='Donation', ff_targ='https://square.link/u/1Ab8X7S0'; break; // https://bit.ly/hfrcag22 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf22 
                         // case 'hf23'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrcag23 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf23 
                         // case 'hfrcag24'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hf24 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag24 
                         // case 'hf25'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrcag25 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf25 
                         // case 'hfrcag26'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hf26 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag26 
                         // case 'hf27'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrcag27 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf27 
                         // case 'hfrcag28'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hf28 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag28 
                         // case 'hf29'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrcag29 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf29 
                         // case 'hfrcag30'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hf30 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag30 
                         // case 'hf31'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrcag31 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf31 
                         // case 'hfrcag32'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hf32 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hfrcag32   
                         // case 'hf33'	: ff_targ_text='All Good Repair Café', ff_targ='https://www.eventbrite.com/cc/haringey-all-good-repair-cafes-turnpike-lane-3116259'; break; // https://bit.ly/hfrcag33 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf33   
                   default:console.log("106 rclh not found"); sznogo=true;break;} 
  break;   default:console.log("107 rc not found"); sznogo=true;break;
}
if (sw_targ==true) {if (sznogo==true) {console.log("110 no go");} 
                    else {window.location.href=ff_targ;} // document.write('<meta http-equiv="refresh" content="1;url='+ff_targ+'"><title>'+ff_targ_text+'</title>');
                   }
else {document.write('There may have been an error - no action possible:'+ff_targ);}
