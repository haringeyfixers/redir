let urlParams = {}, hfsw="r", hfsw2="v", sznogo=false;
						 //CHANGE THIS SWTICH PARAMETER FOR EACH DIFFERENT rd JS FILE
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
const hf_List_of_forthcoming_events="https://www.eventbrite.co.uk/cc/haringey-repair-cafes-461019"; 

switch(qs) {
  case 'rchf'	: if (sznogo==true) {console.log("18 rchf nogo test");}// default http://127.0.0.1:8093/docs/rdhfvar.htm?r=rchf&v=hf22  GENERIC HF Events
                  switch(vqs) {
                         case 'hf22'	: ff_targ_text='Donation', ff_targ='https://square.link/u/1Ab8X7S0'; break; 
                         // https://bit.ly/4dKmRsE https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rchf&v=hf22 
                         // // case 'hf23'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break; 
                         // https://bit.ly/hfrchf23 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rchf&v=hf23 
                         // case 'hf24'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break; 
                         // https://bit.ly/hfrchf24 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rchf&v=hf24 
                         // case 'hf25'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break; 
                         // https://bit.ly/hfrchf25 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rchf&v=hf25 
                         // case 'hf26'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break; 
                         // https://bit.ly/hfrchf26 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rchf&v=hf26 
                         // case 'hf27'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break; 
                         // https://bit.ly/hfrchf27 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rchf&v=hf27 
                         // case 'hf28'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break; 
                         // https://bit.ly/hfrchf28 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rchf&v=hf28 
                         // case 'hf29'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break; 
                         // https://bit.ly/hfrchf29 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rchf&v=hf29 
                         // case 'hf30'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break; 
                         // https://bit.ly/hfrchf30 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rchf&v=hf30 
                         // case 'hf31'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break; 
                         // https://bit.ly/hfrchf31 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rchf&v=hf31 
                         // case 'hf32'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break; 
                         // https://bit.ly/hfrchf32 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rchf&v=hf32   
                         // case 'hf33'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break; 
                         // https://bit.ly/hfrchf33 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rchf&v=hf33  
                  default:console.log("31 rchf not found"); sznogo=true;break;} 
  break; 
  case 'rcag'	: if (sznogo==true) {console.log("34 rchf nogo test");}// default sznogo=true; ALL GOOD
                  switch(vqs) {
                         case 'hf22'	: ff_targ_text='Donation', ff_targ='https://square.link/u/1Ab8X7S0'; break; 
                         // https://bit.ly/hfrcag22 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf22 
                         // case 'hf23'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrcag23 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf23 
                         // case 'hf24'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrcag24 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf24 
                         // case 'hf25'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrcag25 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf25 
                         // case 'hf26'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrcag26 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf26 
                         // case 'hf27'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrcag27 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf27 
                         // case 'hf28'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrcag28 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf28 
                         // case 'hf29'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrcag29 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf29 
                         // case 'hf30'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrcag30 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf30 
                         // case 'hf31'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrcag31 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf31 
                         // case 'hf32'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrcag32 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf32   
                         // case 'hf33'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrcag33 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf33   

                  default:ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;} 
  break; 
  case 'rcbw'	: if (sznogo==true) {console.log("77 rcbw nogo test");}// default sznogo=true;
                  switch(vqs) {
                         case 'hf22'	: ff_targ_text='Donation', ff_targ='https://square.link/u/1Ab8X7S0'; break;
						 // https://bit.ly/hfrcag22 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf22 
                         // case 'hfrcag23'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break; 
                         // https://bit.ly/hf23 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcbw&v=hf 23 
                         // case 'hf24'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break; 
                         // https://bit.ly/hfrcag24 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcbw&v=hf24 
                         // case 'hfrcag25'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hf25 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcbw&v=hf 25 
                         // case 'hf26'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrcag26 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcbw&v=hf26 
                         // case 'hfrcag27'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hf27 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcbw&v=hf 27 
                         // case 'hf28'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrcag28 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcbw&v=hf28 
                         // case 'hfrcag29'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hf29 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcbw&v=hf 29 
                         // case 'hf30'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrcag30 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcbw&v=hf30 
                         // case 'hfrcag31'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hf31 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcbw&v=hf31 
                         // case 'hf32'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrcag32 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcbw&v=hf32   
                         // case 'hfrcag33'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hf33 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcbw&v=hf33   
                   default:console.log("90 rcbw not found"); sznogo=true;break;} 
  break; 
 case 'rccrc'	: if (sznogo==true) {console.log("77 rcbw nogo test");}// default sznogo=true; CAMPSBOURNE
                  switch(vqs) {
                         case 'hf22'	: ff_targ_text='Donation', ff_targ='https://square.link/u/1Ab8X7S0'; break;
						 // https://bit.ly/hfrc22 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rccrc&v=hf22 
                         case 'hf23'	: ff_targ_text='Campsboune Repair Café', ff_targ=hf_List_of_forthcoming_events; break; 
                         // https://bit.ly/hfrc23 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rccrc&v=hf23 
                         // case 'hf24'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break; 
                         // https://bit.ly/hfrc24 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rccrc&v=hf24 
                         // case 'hf25'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrc25 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rccrc&v=hf25 
                         // case 'hf26'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrc26 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rccrc&v=hf26 
                         // case 'hfrcrc27'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrc27 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rccrc&v=hf27 
                         // case 'hf28'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrc28 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rccrc&v=hf28 
                         // case 'hf29'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrc29 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rccrc&v=hf29 
                         // case 'hf30'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrc30 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rccrc&v=hf30 
                         // case 'hfrcrc31'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrc31 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rccrc&v=hf31 
                         // case 'hf32'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrc32 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rccrc&v=hf32   
                         // case 'hfrcrc33'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrc33 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rccrc&v=hf33   
                   default:console.log("90 rcbw not found"); sznogo=true;break;} 
  break; 

  case 'rclh'	: if (sznogo==true) {console.log("17 rchf nogo test");}// default sznogo=true;
                  switch(vqs) {
                         case 'hf22'	: ff_targ_text='Donation', ff_targ='https://square.link/u/1Ab8X7S0'; break;
						 // https://bit.ly/hfrcag22 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rccrc&v=hf22 
                         // case 'hf23'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrcag23 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rclh&v=hf23 
                         // case 'hfrcag24'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hf24 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rclh&v=hf 24 
                         // case 'hf25'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrcag25 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rclh&v=hf25 
                         // case 'hfrcag26'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hf26 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rclh&v=hf 26 
                         // case 'hf27'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrcag27 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rclh&v=hf27 
                         // case 'hfrcag28'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hf28 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rclh&v=hf 28 
                         // case 'hf29'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrcag29 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rclh&v=hf29 
                         // case 'hfrcag30'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hf30 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rclh&v=hf 30 
                         // case 'hf31'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrcag31 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rclh&v=hf31 
                         // case 'hfrcag32'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hf32 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rclh&v=hf 32   
                         // case 'hf33'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrcag33 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rclh&v=hf33   
                   default:console.log("106 rclh not found"); sznogo=true;break;} 
  break;   default:console.log("107 rc not found"); sznogo=true;break;
}
if (sw_targ==true) {if (sznogo==true) {console.log("163 no go");} // test http://127.0.0.1:8083/rdhfvar.htm?r=rccrc&v=hf22
                    else {window.location.href=ff_targ;} // document.write('<meta http-equiv="refresh" content="1;url='+ff_targ+'"><title>'+ff_targ_text+'</title>');
}
else {document.write('There may have been an error - no action possible:'+ff_targ);}