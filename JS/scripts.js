var debug;

window.onload = function(){
    init();
}

/** 
 * INITIALIZE
 * ----------------------------------------------------------------------
 * The inital Function that runs after the constructor
 * ----------------------------------------------------------------------
 */
function init(){
    console.log("%cInitializing...","color:#999");

    window.addEventListener("resize",setHeroHeight);

    setupDebug();

    setHeroHeight();

    let packageButtons = document.querySelectorAll("button.package");
    for(let i = 0; i < packageButtons.length; i++){
      packageButtons[i].addEventListener("click",packageToggle);
    }
    
}

function packageToggle(e){
  document.querySelector(".package[data-state='active']").dataset.state = "";
  e.currentTarget.dataset.state = "active";
}

function setHeroHeight(){
  document.getElementById("hero").style.height = document.querySelector(".big-text-wrap").offsetHeight + "px";
}

/**
 * SETUP DEBUG
 * ----------------------------------------------------------------------
 * Creates an instance of the Debug Class
 * ----------------------------------------------------------------------
 */
function setupDebug(){
  debug = new DEBUGTOOL(false,null,[8,8,16]);
}