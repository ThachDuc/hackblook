if (console_msg("Infinite Health")) {
    Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.state.health = 10000000;
    Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.forceUpdate();
    Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.state.health = 100000000000000e1000000;
    Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.forceUpdate();
    document.getElementsByClassName("styles__healthText___19UaF-camelCase")[0].innerHTML = "∞";
    document.head.innerHTML += `<style>
  .styles__healthBarInside___2thhB-camelCase {
    background: linear-gradient(110deg, red, orange, yellow, green, blue, indigo, violet, red);
  }
  </style>`
    document.getElementsByClassName("styles__healthBar___2lITn-camelCase")[0].childNodes[0].setAttribute(`style`, `transform: scaleX(1);`)
  }
  
  // Console Message Code
  function console_msg(file, state) {
     if (!state) {
         if (window.location.href.indexOf("blooket.com") > -1 && window.location.host !== "www.blooket.com" && window.location.host !== "id.blooket.com") {
             console_msg(file, true);
             return true;
         } else if (window.location.host === "www.blooket.com" || window.location.host === "id.blooket.com") {
             console_msg(file, "Please run this hack on the dashboard or in a game");
             return;
         } else {
             console_msg(file, "Please run this hack on blooket");
             return;
         }
     } else {
         console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"); // Spacing: 60
         var style = 'color: yellow; -webkit-text-stroke: 1px black; font-size:30px;';
         console.info('%c📁 Loaded: '+file+'.js\n', style );
         console.group("📣 Blooket Hacks By cph101 & CrazyH - Announcement 📣"); // Open Console Group
         var style = 'color: tomato; -webkit-text-stroke: 1px black; font-size:30px;';
         console.info('%c👋🏻 Hi, We are Happy to have you as one of our users', style );
         var style = 'color: blue; -webkit-text-stroke: 1px black; font-size:30px;';
         console.info('%c⭐️ Please star our Github repo', style );
         if (state === true) {
             var style = 'color: green; -webkit-text-stroke: 1px black; font-size:30px;';
             console.info('%c✅ Hack Successfully Enabled', style );
         } else {
             var style = 'color: red; -webkit-text-stroke: 1px black; font-size:30px;';
             console.info('%c❌ Failed To Enable Hack', style );
         }
         console.groupEnd(); // Close Console Group
         if (state != true) alert(state);
  }};
