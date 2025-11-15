let ffDebug=false; let urlParams = {}, hfsw="h", hfn="n", hfp="p", hftxt="t" , hfurl="u", hfwrd="w"; //CHANGE THIS SWTICH PARAMETER FOR EACH DIFFERENT rd JS FILE
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
let sw_targ=true, ff_targ_text='', ff_targ='', qs= urlParams[hfsw], hfname=decodeURI(urlParams[hfn]);
let hfDisclaimName="Please agree to our disclaimer"
let hfDisclaimTarg="https://docs.google.com/forms/d/e/1FAIpQLSdWSjWvS4EhvsDq8tSPRbi0LrPcZ8lyB1FufprsNvT9KyX6pg/viewform"
let hfparm=decodeURI(urlParams[hfp]), hft=decodeURI(urlParams[hftxt]), hfu=decodeURI(urlParams[hfurl]), hfword=decodeURI(urlParams[hfwrd]); 
ff_targ="https://"+hfu+'/?p='+hfparm; ff_targ_text=hft;
// http://127.0.0.1:8106/hfqr22.htm?h=f22&n=chris&p=123&t=456&u=789&w=wordis
switch(qs) {
case 'f22'	:ff_targ=hfDisclaimTarg; break; 
                // bit.ly/HaringeyFixers https://haringeyfixers.github.io/redir/rdhfix.htm?h=f22	
case 'f23'	:ff_targ=hfDisclaimTarg; break;
                // http://bit.ly/hfixovw https://haringeyfixers.github.io/redir/rdhfix.htm?h=f23
case 'f24'	:ff_targ=hfDisclaimTarg; break;
        // bit.ly/hfixadmin https://haringeyfixers.github.io/redir/rdhfix.htm?h=f24					
case 'f25'	:ff_targ=hfDisclaimTarg; break;
        // bit.ly/HfixBookDisclaim https://haringeyfixers.github.io/redir/rdhfix.htm?h=f25					
case 'f26'	:ff_targ=hfDisclaimTarg; break;
        // bit.ly/hfgen22 https://haringeyfixers.github.io/redir/rdhfix.htm?h=f26					
case 'f27'	:ff_targ=hfDisclaimTarg; break;
        // bit.ly/hfslides22 HFSLIDES22 https://haringeyfixers.github.io/redir/rdhfix.htm?h=f27					
case 'f28'	:ff_targ=hfDisclaimTarg; break; 
        // bit.ly/hfrepadmin https://haringeyfixers.github.io/redir/rdhfix.htm?h=f28					
case 'f29'	:ff_targ=hfDisclaimTarg; break;
        // bit.ly/hf-sch HF-SCH https://haringeyfixers.github.io/redir/rdhfix.htm?h=f29					

default:sw_targ=false;break;
}

// var hfqrcode='';
if (sw_targ==true) {console.log("ff_targ="+ff_targ+" sw_targ1="+sw_targ)
}
else {document.write('There may have been an error - no action possible:'+ff_targ);}
