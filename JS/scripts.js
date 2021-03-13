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

    setupDebug();

    setHeroHeight();
    
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