changeColor.onclick = function(element) 
{
  let color = element.target.value;
  chrome.tabs.query
  (
      {active: true, currentWindow: true}, function(tabs) 
    {
      chrome.tabs.executeScript
      (
          tabs[0].id,
          {
            code:
          `
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
            `
          }
      )
    }
  )
}
