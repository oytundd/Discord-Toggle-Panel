var channels = document.getElementsByClassName("channels-Ie2l6A");
var guilds   = document.getElementsByClassName("wrapper-1Rf91z");

if (channels[0].style.width == "240px" && guilds[0].style.width == "70px")
{
  console.log("Condition 1");
  for (var i = 0; i < channels.length; i++) 
    {
      channels[i].style.width = "45px";
    }
}
else if(channels[0].style.width == "45px" && guilds[0].style.width == "70px")
{
  for (var i = 0; i < channels.length; i++) 
    {
      channels[i].style.width = "0px";
    }
}
else if(channels[0].style.width == "0px" && guilds[0].style.width == "70px")
{
  for (var i = 0; i < channels.length; i++) 
    {
      channels[i].style.width ="0px";
    }
  for (var i = 0; i < guilds.length; i++) 
    {
      guilds[i].style.width ="0px";
    }
}
else if(channels[0].style.width == "0px" && guilds[0].style.width == "0px")
{
  for (var i = 0; i < channels.length; i++) 
    {
      channels[i].style.width = "45px";
    }
  for (var i = 0; i < guilds.length; i++) 
    {
      guilds[i].style.width = "0px";
    }
}
else if(channels[0].style.width == "45px" && guilds[0].style.width == "0px")
{
for (var i = 0; i < channels.length; i++) 
{
  channels[i].style.width = "240px";
}
for (var i = 0; i < guilds.length; i++) 
{
  guilds[i].style.width = "70px";
}

}