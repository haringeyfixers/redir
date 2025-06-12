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

switch(qs) {//  https://bit.ly/hfgen24 MAYBE   401jwAp https://bit.ly/hfgen28 41UYZzO
  case 'hfgen'	: if (sznogo==true) {console.log("20 hfgen nogo test");}// default http://127.0.0.1:8093/docs/rdhfvar.htm?r=hfgen&v=hf22  GENERIC HF Events
    switch(vqs) {
    case 'hf22'	: ff_targ_text='Donation', ff_targ='https://square.link/u/1Ab8X7S0'; break; 
    // https://bit.ly/2give2hf https://haringeyfixers.github.io/redir/rdhfvar.htm?r=hfgen&v=hf22 
                       
    case 'hf23'	: ff_targ_text='MHSG Jobsheet', ff_targ='https://docs.google.com/spreadsheets/d/1xYG9nd38ZbXpbVOnYhM6GsOSwme_vNNF98q5wQ4YXH0/edit?gid=1162216020#gid=1162216020'; break;
    // https://bit.ly/mhsg_Jobsheet https://bit.ly/hfgen23 4fLouXv https://haringeyfixers.github.io/redir/rdhfvar.htm?r=hfgen&v=hf23 
                         
    case 'hf24'	: ff_targ_text='All Good Jobsheet', ff_targ='https://docs.google.com/spreadsheets/d/1B9sg7V59OM85Isku3pvgnMjLbYAm9ZotxWpfQcq7S20/edit?gid=1162216020#gid=1162216020'; break; 
    // https://bit.ly/allgood_Jobsheet  https://haringeyfixers.github.io/redir/rdhfvar.htm?r=hfgen&v=hf24 
                         
    case 'hf25'	: ff_targ_text='BWF Jobsheet', ff_targ='https://docs.google.com/spreadsheets/d/1dVXwXs39avZlqnN0EDUow4jybS6pZkqtjTedNvpx0j4/edit?gid=1162216020#gid=1162216020'; break; 
    // https://bit.ly/bwf_Jobsheet  spare https://bit.ly/hfgen25 3C37BK6 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=hfgen&v=hf25 
                         
    case 'hf26'	: ff_targ_text='CRC Jobsheet', ff_targ='https://docs.google.com/spreadsheets/d/1Mu-IEIfnLg9WF-MXN2nVdTGzOYxmA5VGTRaUziPQloI/edit?gid=1162216020#gid=1162216020'; break; 
    // https://bit.ly/crc_Jobsheet https://bit.ly/hfgen26 3DMp5ee https://haringeyfixers.github.io/redir/rdhfvar.htm?r=hfgen&v=hf26 
                        
    case 'hf27'	: ff_targ_text='WG Jobsheet', ff_targ='https://docs.google.com/spreadsheets/d/1d3xnC0if3U-fCtlYtFne1Ao6ftYlK6FygtoJf1TXUxo/edit?gid=1162216020#gid=1162216020'; break; 
    // https://bit.ly/wg_Jobsheet https://bit.ly/hfgen27 41XzGgC https://haringeyfixers.github.io/redir/rdhfvar.htm?r=hfgen&v=hf27 
                        
    // case 'hf28'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break; 
    //  https://haringeyfixers.github.io/redir/rdhfvar.htm?r=hfgen&v=hf28 

                  default:console.log("44 hfgen not found"); sznogo=true;break;} 
  break; 
  case 'rcag'	: if (sznogo==true) {console.log("46 rcag nogo test");}// default sznogo=true; ALL GOOD
                  switch(vqs) {
                         case 'hf22'	: ff_targ_text='Donation', ff_targ='https://square.link/u/1Ab8X7S0'; break; 
	//https://bit.ly/hfrcag22 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf22 
	//case 'hf23'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrcag23 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf23 
	//case 'hf24'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrcag24 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf24 
	//case 'hf25'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrcag25 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf25 
	//case 'hf26'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrcag26 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf26 
	//case 'hf27'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrcag27 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf27 
	//case 'hf28'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrcag28 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf28 
	//case 'hf29'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrcag29 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf29 
	//case 'hf30'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrcag30 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf30 
	//case 'hf31'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrcag31 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf31 
	//case 'hf32'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrcag32 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf32   
	//case 'hf33'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrcag33 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf33   
	//bit.ly/RCAG to 49 exists

                  default:ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;} 
  break; 
  case 'rcbw'	: if (sznogo==true) {console.log("77 rcbw nogo test");}// default sznogo=true;
                  switch(vqs) {
                         case 'hf22'	: ff_targ_text='Donation', ff_targ='https://square.link/u/1Ab8X7S0'; break;
						 // https://bit.ly/hfrcbw22 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcag&v=hf22 
                         case 'hf23'	: ff_targ_text='Broadwater Farm Repair Café', ff_targ=hf_List_of_forthcoming_events; break; 
	//https://bit.ly/hfrcbw23 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcbw&v=hf23 used on local BWF poster
                         case 'hf24'	: ff_targ_text='Disclaimer - In person 2print out', ff_targ="https://docs.google.com/document/d/13AHxOaMYiw6fI9k3Qh4Pjqbyb3eJaRdmGfS_7RPMsmQ/edit?usp=sharing"; break; 
	//https://bit.ly/hfrcbw24 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcbw&v=hf24  NOT YET USED
                         case 'hf25'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrcbw25 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rcbw&v=hf25  NOT YET USED
                   default:console.log("86 rcbw not found"); sznogo=true;break;} 
  break; 
  case 'rccrc'	: if (sznogo==true) {console.log("88 rccrc nogo test");}// default sznogo=true; CAMPSBOURNE
                  switch(vqs) {
                         case 'hf22'	: ff_targ_text='Donation', ff_targ='https://square.link/u/1Ab8X7S0'; break;
						 // https://bit.ly/hfrcc22 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rccrc&v=hf22 
                         case 'hf23'	: ff_targ_text='Campsboune Repair Café', ff_targ=hf_List_of_forthcoming_events; break; 
	//https://bit.ly/hfrcc23 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rccrc&v=hf23 
                         case 'hf24'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break; 
	//https://bit.ly/hfrcc24 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rccrc&v=hf24 
                         case 'hf25'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrcc25 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rccrc&v=hf25 
  
                   default:console.log("99 rcbw not found"); sznogo=true;break;} 
  break; 
  case 'rclh'	: if (sznogo==true) {console.log("102 rclh nogo test");}// default sznogo=true;
                  switch(vqs) {
                         case 'hf22'	: ff_targ_text='Jobsheet', ff_targ='https://square.link/u/1Ab8X7S0'; break;
						 // https://bit.ly/hfrclh22 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rccrc&v=hf22 
	//case 'hf23'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrclh23 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rclh&v=hf23 
	//case 'hf24'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hf24 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rclh&v=hf 24 
	//case 'hf25'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrclh25 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rclh&v=hf25 
                   default:console.log("112 rclh not found"); sznogo=true;break;} 
  break;   
  case 'rcmh'	: if (sznogo==true) {console.log("114 rclhmh nogo test");}// default sznogo=true;
                  switch(vqs) {
                         case 'hf22'	: ff_targ_text='Donation', ff_targ='https://docs.google.com/spreadsheets/d/1xYG9nd38ZbXpbVOnYhM6GsOSwme_vNNF98q5wQ4YXH0/edit?gid=541010361#gid=541010361&rc=mh'; break;
						 // to be done!!!!!!!!!!!!!!! https://bit.ly/hfrclh22 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rccrc&v=hf22 
	//case 'hf23'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrclh23 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rclh&v=hf23 
	//case 'hf24'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hf24 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rclh&v=hf 24 
	//case 'hf25'	: ff_targ_text='All Good Repair Café', ff_targ=hf_List_of_forthcoming_events; break;
						 // https://bit.ly/hfrclh25 https://haringeyfixers.github.io/redir/rdhfvar.htm?r=rclh&v=hf25 
                   default:console.log("106 rclh not found"); sznogo=true;break;} 
  break;   
  default:console.log("125 rc not found"); sznogo=true;break;
}
if (sw_targ==true) {if (sznogo==true) {console.log("163 no go");} // test http://127.0.0.1:8083/rdhfvar.htm?r=rccrc&v=hf22
                    else {window.location.href=ff_targ;} // document.write('<meta http-equiv="refresh" content="1;url='+ff_targ+'"><title>'+ff_targ_text+'</title>');
}
else {document.write('There may have been an error - no action possible:'+ff_targ);}
