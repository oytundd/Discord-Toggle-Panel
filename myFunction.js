setTimeout(submitAction, 3000);
function submitAction(){
console.log("Started...");
var btn = document.querySelector(".anchor-3Z-8Bb");
btn.firstChild.innerHTML='<svg name="QuestionMark" class="iconInactive-g2AXfB icon-1R19_H" width="16" height="16" viewBox="0 0 20 20" fill="white"><path d="M11.739,13.962c-0.087,0.086-0.199,0.131-0.312,0.131c-0.112,0-0.226-0.045-0.312-0.131l-3.738-3.736c-0.173-0.173-0.173-0.454,0-0.626l3.559-3.562c0.173-0.175,0.454-0.173,0.626,0c0.173,0.172,0.173,0.451,0,0.624l-3.248,3.25l3.425,3.426C11.911,13.511,11.911,13.789,11.739,13.962 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.148,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.148,17.521,10"></path></svg>'
btn.href="#";
btn.target="_self";
btn.addEventListener("click", myToggle);
console.log("Executed line 6...");
function myToggle(){
  console.log("Executing toggle function...");
    var channels = document.getElementsByClassName("channels-Ie2l6A");
    var guilds   = document.getElementsByClassName("wrapper-1Rf91z");

    if (channels[0].style.width == "240px" && guilds[0].style.width == "70px") {
      for (var i = 0; i < channels.length; i++) 
        {
          channels[i].style.width = "45px";
        }
    } else if(channels[0].style.width == "45px" && guilds[0].style.width == "70px") {
      for (var i = 0; i < channels.length; i++) 
        {
          channels[i].style.width = "0px";
        }
    } else if(channels[0].style.width == "0px" && guilds[0].style.width == "70px") {
      for (var i = 0; i < channels.length; i++) 
        {
          channels[i].style.width ="0px";
        }
      for (var i = 0; i < guilds.length; i++) 
        {
          guilds[i].style.width ="0px";
        }
    }
  else if(channels[0].style.width == "0px" && guilds[0].style.width == "0px") {
      for (var i = 0; i < channels.length; i++) 
        {
          channels[i].style.width = "45px";
        }
      for (var i = 0; i < guilds.length; i++) 
        {
          guilds[i].style.width = "0px";
        }
  }
  else {
    for (var i = 0; i < channels.length; i++) 
    {
      channels[i].style.width = "240px";
    }
    for (var i = 0; i < guilds.length; i++) 
    {
      guilds[i].style.width = "70px";
    }
  }
}
console.log("Done!");
}