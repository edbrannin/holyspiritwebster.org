 today = new Date()
    if(today.getMinutes() < 10){ 
        pad = "0"}
    else  
    pad = "";
  if((today.getHours() >=6) && (today.getHours() <=9)){
document.write("<center><font-size=12px; color=blue>Good Morning</FONT></center>")
}
   if((today.getHours() >=10) && (today.getHours() <=11)){
document.write("<center><font-size=12px;  color=green>Good Morning! </FONT></center>")
}
    if((today.getHours() >=12) && (today.getHours() <=18)){
document.write("<center><font-size=12px;  color=black>Good Afternoon</FONT></center>")
}    
    if((today.getHours() >=19) && (today.getHours() <=23)){
document.write("<center><font-size=12px color=white>Good Evening!</FONT></center>")
}
    if((today.getHours() >=0) && (today.getHours() <=4)){
document.write("<center><font-size=12px color=white>Wow! Still surfing after midnight!!</FONT></center>")
}
    if((today.getHours() >=4) && (today.getHours() <=6)){
document.write("<center><font-size=12px color=purple>Wow! You're up early!!</FONT></center>")
}
// -- End Hiding Here -->
