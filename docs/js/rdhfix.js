let ffDebug=true; let urlParams = {}, hfsw="h", hfp="p"; //CHANGE THIS SWTICH PARAMETER FOR EACH DIFFERENT rd JS FILE
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
let sw_targ=true, ff_targ_text='', ff_targ='', qs= urlParams[hfsw], hfparm=urlParams[hfp]; 

switch(qs) {
case 'f22'	:ff_targ_text='Haringey Fixers';  ff_targ='https://HaringeyFixers.org'; break; 
                // bit.ly/HaringeyFixers https://haringeyfixers.github.io/redir/rdhfix.htm?h=f22	
case 'f23'	:ff_targ_text='Haringey Fixers Overview'; ff_targ='https://docs.google.com/spreadsheets/d/1LaCUWUF886CihC-RcnagpLZMLllJtATr6qsTUHKg3Ss/edit?usp=sharing';break;
                // http://bit.ly/hfixovw https://haringeyfixers.github.io/redir/rdhfix.htm?h=f23
case 'f24'	:ff_targ_text='HfixAdmin';  ff_targ='https://docs.google.com/spreadsheets/d/1PeSyLKmi4tophgGlAk_ibcVGnw87pKLqYq3bexHNx34/edit?gid=396576013#gid=396576013&range=A1';break; 
        // bit.ly/hfixadmin https://haringeyfixers.github.io/redir/rdhfix.htm?h=f24					
case 'f25'	:ff_targ_text='Hfix booking - Disclaimer'; ff_targ='https://docs.google.com/forms/d/e/1FAIpQLSdWSjWvS4EhvsDq8tSPRbi0LrPcZ8lyB1FufprsNvT9KyX6pg/viewform?usp=sf_link';break; 
        // bit.ly/HfixBookDisclaim https://haringeyfixers.github.io/redir/rdhfix.htm?h=f25					
case 'f26'	:ff_targ='https://docs.google.com/document/d/1eG0dSxRZs4BNA-SKhmCuvdOkXz8cWkO5256vlxa5kEA/edit?usp=sharing'; ff_targ_text='generic-short'; break; 
        // bit.ly/hfgen22 https://haringeyfixers.github.io/redir/rdhfix.htm?h=f26					
case 'f27'	:ff_targ_text='Slides'; ff_targ='https://docs.google.com/presentation/d/1nOMg93X5ced6YsSRDayycATI_Tef_GyDWC1pLwgjqxs/edit?usp=sharing'; break; 
        // bit.ly/hfslides22 HFSLIDES22 https://haringeyfixers.github.io/redir/rdhfix.htm?h=f27					
case 'f28'	:ff_targ_text='HF Repairs - admin version'; ff_targ='https://docs.google.com/spreadsheets/d/1PwuQQ4OgJdAF7GeqQhHw6dGodSOXWzTDVBGNK5gGU5Y/edit?usp=sharing'; break; 
        // bit.ly/hfrepadmin https://haringeyfixers.github.io/redir/rdhfix.htm?h=f28					
case 'f29'	:ff_targ_text='HF Repairs - BWF School'; ff_targ='https://docs.google.com/spreadsheets/d/1sLa1sdvHdXgUjEAHrcX12u5wZPF-KvAx9YryL1rUHfA/edit?usp=sharing';break; 
        // bit.ly/hf-sch HF-SCH https://haringeyfixers.github.io/redir/rdhfix.htm?h=f29					
case 'h30'	:ff_targ_text='HF Volunteers Wiki'; ff_targ='https://docs.google.com/document/d/1C5YoX_GfMBgPAlVkGfRktU16ZMy9okji_iODkVs5W3c/edit?usp=sharing'; break; 
        // bit.ly/hfvolwiki https://haringeyfixers.github.io/redir/rdhfix.htm?h=h30					
case 'h31'	:ff_targ_text='HF Volunteers Acceptance Form'; ff_targ='https://docs.google.com/forms/d/e/1FAIpQLSeiU1Hrpm42RFOJU5LYoTyqWdTpidsWQuN_jC5EiBNwK3UgLg/viewform?usp=sharing';break; 
        // bit.ly/hfvolwikiform https://haringeyfixers.github.io/redir/rdhfix.htm?h=h31					
case 'h32'	:ff_targ_text='HF Repairs - BWF School Admin Version'; ff_targ='https://docs.google.com/spreadsheets/d/13VFp6nuPmKUR9x7HrXfBz6OGCgkzlA3LGnWnPQTipX0/edit?usp=sharing';break; 
        // bit.ly/hf-sch2 https://haringeyfixers.github.io/redir/rdhfix.htm?h=h32					
case 'h33'	:ff_targ_text='HF Signup'; ff_targ='https://docs.google.com/forms/d/e/1FAIpQLSebVEWzrHsuGavUphJTd8xGwwOuooJrxgmB7Kg3eV2qIvuTZw/viewform';	break; 
        // bit.ly/hf23help goes straight there! https://haringeyfixers.github.io/redir/rdhfix.htm?h=h33					
case 'h34'	:ff_targ_text='Haringey Fixers signup A'; ff_targ='https://docs.google.com/forms/d/e/1FAIpQLSebVEWzrHsuGavUphJTd8xGwwOuooJrxgmB7Kg3eV2qIvuTZw/viewform'; break; 
        // bit.ly/hf2reg https://haringeyfixers.github.io/redir/rdhfix.htm?h=h34					
case 'h35'	:ff_targ_text='Haringey Fixers signup C'; ff_targ='https://forms.gle/xzMfKc9EhHV2ph7A7';	break; 
        // bit.ly/hfscreg https://haringeyfixers.github.io/redir/rdhfix.htm?h=h35	member signup from social cinema pages				
case 'h36'	:ff_targ_text='Haringey Fixers signup N'; ff_targ='https://forms.gle/QgP49gjNT4o1xY9s8';	break; 
        // bit.ly/hfnreg https://haringeyfixers.github.io/redir/rdhfix.htm?h=h36					
case 'h37'	:ff_targ_text='Haringey Fixers Free SIM card request form'; ff_targ='https://forms.gle/sN6jXojkmxMvDhYVA'; break; 
        // https://bit.ly/hfsimcard https://haringeyfixers.github.io/redir/rdhfix.htm?h=h37					
case 'h38'	:ff_targ_text='Haringey Fixers Media release form'; ff_targ='https://docs.google.com/forms/d/e/1FAIpQLSdZ4rPdD32ZXROGW90ltlrqV9cN7BQZUNdn0pAQlQ0pV1Tkdg/viewform?usp=sf_link';	break; 
        // https://bit.ly/hfrel24 https://haringeyfixers.github.io/redir/rdhfix.htm?h=h38					
case 'h39'	:ff_targ_text='Haringey Fixers Marcomms email archive'; ff_targ='https://us21.campaign-archive.com/home/?u=05a0f46b4c063a0c3a9854909&id=aed3ea484d';	break; 
        // https://bit.ly/4dyoyte https://haringeyfixers.github.io/redir/rdhfix.htm?h=h39					
case 'h40'	:ff_targ_text='Haringey Fixers Bringers Feedback Survey 24'; ff_targ='https://forms.gle/VH4RABe7jaVkXS857';	break; 
        // https://bit.ly/hfbf24 https://haringeyfixers.github.io/redir/rdhfix.htm?h=h40									
case 'h41'	:ff_targ_text='Haringey Fixers Annual tasks'; ff_targ='https://docs.google.com/spreadsheets/d/1g1c_0WhnwjK9ufFKibrDLYCr0oUwyG7sW01OReBRYkA/edit?gid=1983948080#gid=1983948080&range=A1';	break; 
        // https://bit.ly/hfyearly https://haringeyfixers.github.io/redir/rdhfix.htm?h=h41	
case 'h42'	:ff_targ_text='tttttttttttttttttt'; ff_targ='https://';	
                                if (ffDebug==true) {sw_targ=false;console.log (urlParams)}
                break; 
        // https://bit.ly/stm42 https://haringeyfixers.github.io/redir/rdhfix.htm?h=h42&p=test123	
case 'h43'	:ff_targ_text='tttttttttttttttttt'; ff_targ='https://';	break; 
        // https://bit.ly/stm43 https://haringeyfixers.github.io/redir/rdhfix.htm?h=h43	
case 'h44'	:ff_targ_text='tttttttttttttttttt'; ff_targ='https://';	break; 
        // https://bit.ly/stm44 https://haringeyfixers.github.io/redir/rdhfix.htm?h=h44	
case 'h45'	:ff_targ_text='tttttttttttttttttt'; ff_targ='https://';	break; 
        // https://bit.ly/stm45 https://haringeyfixers.github.io/redir/rdhfix.htm?h=h45	
case 'h46'	:ff_targ_text='tttttttttttttttttt'; ff_targ='https://';	break; 
        // https://bit.ly/stm46 https://haringeyfixers.github.io/redir/rdhfix.htm?h=h46	
case 'h47'	:ff_targ_text='tttttttttttttttttt'; ff_targ='https://';	break; 
        // https://bit.ly/stm47 https://haringeyfixers.github.io/redir/rdhfix.htm?h=h47	
case 'h48'	:ff_targ_text='tttttttttttttttttt'; ff_targ='https://';	break; 
        // https://bit.ly/stm48 https://haringeyfixers.github.io/redir/rdhfix.htm?h=h48	
case 'h49'	:ff_targ_text='tttttttttttttttttt'; ff_targ='https://';	break; 
        // https://bit.ly/stm49 https://haringeyfixers.github.io/redir/rdhfix.htm?h=h49	



default:sw_targ=false;break;
}
if (sw_targ==true) {// document.write('<meta http-equiv="refresh" content="1;url='+ff_targ+'"><title>'+ff_targ_text+'</title>');
                   window.location.href=ff_targ;
                   }
else {document.write('There may have been an error - no action possible:'+ff_targ);}
