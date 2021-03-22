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

    // MOBILE TOGGLE
    document.querySelector("button.mobile-menu").addEventListener("click",mobileNavToggle);

    // PACKAGE BUTTONS
    let packageButtons = document.querySelectorAll("button.package");
    for(let i = 0; i < packageButtons.length; i++){
      packageButtons[i].addEventListener("click",packageToggle);
    }
}

function mobileNavToggle(e){
  let t = e.currentTarget;
  let p = t.parentElement;
  
  if(p.dataset.state === 'active'){
    p.dataset.state = '';
    p.querySelector(".hidden-menu").style.height = "0px";
  } else{
    p.dataset.state = 'active';
    p.querySelector(".hidden-menu").style.height = p.querySelector(".hidden-menu ul").offsetHeight + 48 + "px";
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