import {consoleColophon} from './consoleColophon';
import { initDemos } from './demos.js';
import { Player } from './Player.js';
//
consoleColophon();

function updateDocScope(){
  var doc = document.documentElement;
  doc.setAttribute('data-scope', 'DOMLoaded--');
}

function createPlayer(){
  window.player = Player();
  player.setup();
}

// INIT
document.addEventListener('DOMContentLoaded', function(){
  updateDocScope();
  createPlayer();
  initDemos();
}, false);





