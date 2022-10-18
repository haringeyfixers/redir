Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@haringeyfixers 
haringeyfixers
/
redir
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
redir
/
docs
/
js
/
rdhfix.js
in
main
 

Spaces

2

No wrap
1
var sw_targ=true; var ff_targ=''; var qs= querySt('h'); switch(qs) {
2
case 'f22'  :ff_targ_text='Haringey Fixers';  ff_targ='https://hfixers.netlify.app'; break; 
3
                // bit.ly/HaringeyFixers https://haringeyfixers.github.io/redir/rdhfix.htm?h=f22  
4
case 'f23'  :ff_targ_text='Haringey Fixers Overview'; ff_targ='https://docs.google.com/spreadsheets/d/1LaCUWUF886CihC-RcnagpLZMLllJtATr6qsTUHKg3Ss/edit?usp=sharing';break;
5
                // http://bit.ly/hfixovw https://haringeyfixers.github.io/redir/rdhfix.htm?h=f23
6
case 'f24'  :ff_targ_text='HfixAdmin';  ff_targ='https://docs.google.com/spreadsheets/d/1PeSyLKmi4tophgGlAk_ibcVGnw87pKLqYq3bexHNx34/edit?usp=sharing';break; 
7
        // bit.ly/hfixadmin https://haringeyfixers.github.io/redir/rdhfix.htm?h=f24         
8
case 'f25'  :ff_targ_text='Hfix booking - Disclaimer'; ff_targ='https://docs.google.com/document/d/1ochtkuOY2jynHUcukQ_zSWigz9MKTeEIGaxWDANaWzE/edit?usp=sharing';break; 
9
        // bit.ly/HfixBookDisclaim https://haringeyfixers.github.io/redir/rdhfix.htm?h=f25          
10
case 'f26'  :ff_targ='https://docs.google.com/document/d/1eG0dSxRZs4BNA-SKhmCuvdOkXz8cWkO5256vlxa5kEA/edit?usp=sharing'; ff_targ_text='generic-short'; break; 
11
        // bit.ly/hfgen22 https://haringeyfixers.github.io/redir/rdhfix.htm?h=f26         
12
case 'f27'  :ff_targ_text='Slides'; ff_targ='https://docs.google.com/presentation/d/1nOMg93X5ced6YsSRDayycATI_Tef_GyDWC1pLwgjqxs/edit?usp=sharing'; break; 
13
        // bit.ly/hfslides22 HFSLIDES22 https://haringeyfixers.github.io/redir/rdhfix.htm?h=f27         
14
case 'f28'  :ff_targ_text='tttttttttttttttttt'; ff_targ='bbbbb'; break; 
15
        // bit.ly/xxxxxx https://haringeyfixers.github.io/redir/rdhfix.htm?h=f28          
16
case 'f29'  :ff_targ_text='tttttttttttttttttt'; ff_targ='bbbbb';break; 
17
        // bit.ly/xxxxxx https://haringeyfixers.github.io/redir/rdhfix.htm?h=f29          
18
case 'h30'  :ff_targ_text='tttttttttttttttttt'; ff_targ=''; break; 
19
        // bit.ly/xxxxxx https://haringeyfixers.github.io/redir/rdhfix.htm?h=h30          
20
case 'h31'  :ff_targ_text='tttttttttttttttttt'; ff_targ='';break; 
21
        // bit.ly/xxxxxx https://haringeyfixers.github.io/redir/rdhfix.htm?h=h31          
22
case 'h32'  :ff_targ_text='tttttttttttttttttt'; ff_targ=''; 
23
        break; // bit.ly/xxxxxx https://haringeyfixers.github.io/redir/rdhfix.htm?t=he32          
24
case 'h33'  :ff_targ_text='tttttttttttttttttt'; ff_targ=''; 
25
        break; // bit.ly/xxxxxx https://haringeyfixers.github.io/redir/rdhfix.htm?h=h33         
26
case 'h34'  :ff_targ_text='tttttttttttttttttt'; ff_targ=''; break; 
27
        // bit.ly/stm34 https://haringeyfixers.github.io/redir/rdhfix.htm?h=h34         
28
case 'h35'  :ff_targ_text='tttttttttttttttttt'; ff_targ=''; break; 
29
        // bit.ly/stm35 https://haringeyfixers.github.io/redir/rdhfix.htm?h=h35         
30
case 'h36'  :ff_targ_text='tttttttttttttttttt'; ff_targ=''; break; 
31
        // bit.ly/stm36 https://haringeyfixers.github.io/redir/rdhfix.htm?h=h36         
32
case 'h37'  :ff_targ_text='tttttttttttttttttt'; ff_targ='  '; break; 
33
        // bit.ly/stm37 https://haringeyfixers.github.io/redir/rdhfix.htm?h=h37         
34
case 'h38'  :ff_targ_text='tttttttttttttttttt'; ff_targ='https://'; break; 
35
        // bit.ly/stm38 https://haringeyfixers.github.io/redir/rdhfix.htm?h=h38         
36
case 'h39'  :ff_targ_text='tttttttttttttttttt'; ff_targ='https://'; break; 
37
        // bit.ly/stm39 https://haringeyfixers.github.io/redir/rdhfix.htm?h=h39         
38
case 'h40'  :ff_targ_text='tttttttttttttttttt'; ff_targ='https://'; break; 
39
        // bit.ly/stm40 https://haringeyfixers.github.io/redir/rdhfix.htm?h=h40                 
40
​
41
default:sw_targ=false;break;
42
}
43
if (sw_targ==true) {document.write('<meta http-equiv="refresh" content="1;url='+ff_targ+'"><title>'+ff_targ_text+'</title>');
44
                   window.location.href=ff_targ;}
45
else {document.write('There may have been an error - no action possible:'+ff_targ);}
@haringeyfixers
Commit changes
Commit summary
Create rdhfix.js
Optional extended description
Add an optional extended description…
 Commit directly to the main branch.
 Create a new branch for this commit and start a pull request. Learn more about pull requests.
 
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
