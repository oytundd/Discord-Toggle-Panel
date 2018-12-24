let changeColor = document.getElementById('changeColor');
chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
  });
changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code:
         `
          var elements = document.getElementsByClassName("channels-Ie2l6A");
          if (elements[0].style.width =="240px")
          {
          for (var i = 0; i < elements.length; i++) 
          {
              elements[i].style.width ="0px";
          }
          }
          else 
          {
          for (var i = 0; i < elements.length; i++) 
          {
              elements[i].style.width ="240px";
          }
          }`
        }
    )
  }
  )
  }
