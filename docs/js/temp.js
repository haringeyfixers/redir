let urlParams = {}, hfsw="b", hfsw2="z", sznogo=false; //CHANGE THIS SWTICH PARAMETER FOR EACH DIFFERENT rd JS FILE
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
    case '1'	:ff_targ_text='Broadwater Farm Facebook Group';  ff_targ='https://broadwaterfarm.mailchimpsites.com/welcome'; break;
    // bit.ly/bwfarm2 // https://codeleftlab.github.io/redir/rdb2.htm?b=1	
    case '2'	:ff_targ_text='BWF Gmap';  ff_targ='https://www.google.co.uk/maps/@51.5911706,-0.0814654,467a,35y,39.34t/data=!3m1!1e3';break;
    // bit.ly/bwfgmap https://codeleftlab.github.io/redir/rdb2.htm?b=2			
    case 'b23'	:ff_targ_text='Social Rent Calculator'; ff_targ='https://around-rcalc.netlify.app/';break;  
    // bit.ly/calcmyrent  CALCMYRENT CALCRENT https://codeleftlab.github.io/redir/rdb2.htm?b=b23	
    case 'b24'	:ff_targ_text='Latest Slides';  ff_targ='https://docs.google.com/presentation/d/1DEkoSJI6fsuOzIXSbPTjViSqCa9yDXjgSamYrXhTQBs/edit?usp=sharing';break; 
        // bit.ly/szslides SZSLIDES https://codeleftlab.github.io/redir/rdb2.htm?b=b24					
    case 'b25'	:ff_targ_text='Haringey Housing Resident-Led Scrutiny Review panel'; ff_targ='https://sites.google.com/view/resident-led';break; 
        // bit.ly/harsp https://codeleftlab.github.io/redir/rdb2.htm?b=b25					
    case 'b26'	:ff_targ_text='Haringey Fixers Donation'; ff_targ='https://square.link/u/1Ab8X7S0'; break; 

    case 'sz'	: if (sznogo==true) {console.log("30 sz nogo test");}// default http://127.0.0.1:8093/docs/rdb2.htm?b=sz&v=hf22 http://127.0.0.1:8093/docs/rtemp.htm?b=sz&v=hf22
                  switch(vqs) {
                         case 'hf22'	: ff_targ_text='Donation', ff_targ='https://square.link/u/1Ab8X7S0'; break; // https://bit.ly/hfrcag22 https://codeleftlab.github.io/redir/rdb2.htm?b=sz&z=hf22	 
                         // case 'hf23'	: ff_targ_text='All Good Repair Café', ff_targ='https://square.link/u/1Ab8X7S0'; break; // https://bit.ly/hfrcag23 https://codeleftlab.github.io/redir/rdb2.htm?b=sz&z=hf23 
                         // case 'hf24'	: ff_targ_text='All Good Repair Café', ff_targ='https://square.link/u/1Ab8X7S0'; break; // https://bit.ly/hfrcag24 https://codeleftlab.github.io/redir/rdb2.htm?b=sz&z=hf24 
                         // case 'hf25'	: ff_targ_text='All Good Repair Café', ff_targ='https://square.link/u/1Ab8X7S0'; break; // https://bit.ly/hfrcag25 https://codeleftlab.github.io/redir/rdb2.htm?b=sz&z=hf25 
                         // case 'hf26'	: ff_targ_text='All Good Repair Café', ff_targ='https://square.link/u/1Ab8X7S0'; break; // https://bit.ly/hfrcag26 https://codeleftlab.github.io/redir/rdb2.htm?b=sz&z=hf26 
                         // case 'hf27'	: ff_targ_text='All Good Repair Café', ff_targ='https://square.link/u/1Ab8X7S0'; break; // https://bit.ly/hfrcag27 https://codeleftlab.github.io/redir/rdb2.htm?b=sz&z=hf27 
                         // case 'hf28'	: ff_targ_text='All Good Repair Café', ff_targ='https://square.link/u/1Ab8X7S0'; break; // https://bit.ly/hfrcag28 https://codeleftlab.github.io/redir/rdb2.htm?b=sz&z=hf28 
                         // case 'hf29'	: ff_targ_text='All Good Repair Café', ff_targ='https://square.link/u/1Ab8X7S0'; break; // https://bit.ly/hfrcag29 https://codeleftlab.github.io/redir/rdb2.htm?b=sz&z=hf29 
                         // case 'hf30'	: ff_targ_text='All Good Repair Café', ff_targ='https://square.link/u/1Ab8X7S0'; break; // https://bit.ly/hfrcag30 https://codeleftlab.github.io/redir/rdb2.htm?b=sz&z=hf30 
                         // case 'hf31'	: ff_targ_text='All Good Repair Café', ff_targ='https://square.link/u/1Ab8X7S0'; break; // https://bit.ly/hfrcag31 https://codeleftlab.github.io/redir/rdb2.htm?b=sz&z=hf31 
                         // case 'hf32'	: ff_targ_text='All Good Repair Café', ff_targ='https://square.link/u/1Ab8X7S0'; break; // https://bit.ly/hfrcag32 https://codeleftlab.github.io/redir/rdb2.htm?b=sz&z=hf32   
                         // case 'hf33'	: ff_targ_text='All Good Repair Café', ff_targ='https://square.link/u/1Ab8X7S0'; break; // https://bit.ly/hfrcag33 https://codeleftlab.github.io/redir/rdb2.htm?b=sz&z=hf33   
                  default:ff_targ_text='Donation', ff_targ='https://square.link/u/1Ab8X7S0'; break;} 
  break; 
  case 'st'	: if (sznogo==true) {console.log("77 rcbw nogo test");}// default sznogo=true; http://127.0.0.1:8093/docs/rdb2.htm?b=st&v=hf22
                  switch(vqs) {
                         case 'hf22'	: ff_targ_text='Donation', ff_targ='https://square.link/u/1Ab8X7S0'; break; // https://bit.ly/hfrcag22 https://codeleftlab.github.io/redir/rdb2.htm?b=sz&z=hf22 
                         // case 'hfrcag23'	: ff_targ_text='All Good Repair Café', ff_targ='https://square.link/u/1Ab8X7S0'; break; // https://bit.ly/hf23 https://codeleftlab.github.io/redir/rdb2.htm?b=st&z=hfrcag23 
                         // case 'hf24'	: ff_targ_text='All Good Repair Café', ff_targ='https://square.link/u/1Ab8X7S0'; break; // https://bit.ly/hfrcag24 https://codeleftlab.github.io/redir/rdb2.htm?b=st&z=hf24 
                         // case 'hfrcag25'	: ff_targ_text='All Good Repair Café', ff_targ='https://square.link/u/1Ab8X7S0'; break; // https://bit.ly/hf25 https://codeleftlab.github.io/redir/rdb2.htm?b=st&z=hfrcag25 
                         // case 'hf26'	: ff_targ_text='All Good Repair Café', ff_targ='https://square.link/u/1Ab8X7S0'; break; // https://bit.ly/hfrcag26 https://codeleftlab.github.io/redir/rdb2.htm?b=st&z=hf26 
                         // case 'hfrcag27'	: ff_targ_text='All Good Repair Café', ff_targ='https://square.link/u/1Ab8X7S0'; break; // https://bit.ly/hf27 https://codeleftlab.github.io/redir/rdb2.htm?b=st&z=hfrcag27 
                         // case 'hf28'	: ff_targ_text='All Good Repair Café', ff_targ='https://square.link/u/1Ab8X7S0'; break; // https://bit.ly/hfrcag28 https://codeleftlab.github.io/redir/rdb2.htm?b=st&z=hf28 
                         // case 'hfrcag29'	: ff_targ_text='All Good Repair Café', ff_targ='https://square.link/u/1Ab8X7S0'; break; // https://bit.ly/hf29 https://codeleftlab.github.io/redir/rdb2.htm?b=st&z=hfrcag29 
                         // case 'hf30'	: ff_targ_text='All Good Repair Café', ff_targ='https://square.link/u/1Ab8X7S0'; break; // https://bit.ly/hfrcag30 https://codeleftlab.github.io/redir/rdb2.htm?b=st&z=hf30 
                         // case 'hfrcag31'	: ff_targ_text='All Good Repair Café', ff_targ='https://square.link/u/1Ab8X7S0'; break; // https://bit.ly/hf31 https://codeleftlab.github.io/redir/rdb2.htm?b=st&z=hf31 
                         // case 'hf32'	: ff_targ_text='All Good Repair Café', ff_targ='https://square.link/u/1Ab8X7S0'; break; // https://bit.ly/hfrcag32 https://codeleftlab.github.io/redir/rdb2.htm?b=st&z=hf32   
                         // case 'hfrcag33'	: ff_targ_text='All Good Repair Café', ff_targ='https://square.link/u/1Ab8X7S0'; break; // https://bit.ly/hf33 https://codeleftlab.github.io/redir/rdb2.htm?b=st&z=hf33   
                   default:console.log("60 st not found"); sznogo=true;break;} 
   break;   default:console.log("61 qs not found"); sznogo=true;break;
}
if (sw_targ==true) {if (sznogo==true) {console.log("110 no go");} 
                    else {window.location.href=ff_targ;} // document.write('<meta http-equiv="refresh" content="1;url='+ff_targ+'"><title>'+ff_targ_text+'</title>');
                   }
else {document.write('There may have been an error - no action possible:'+ff_targ);}
