const Mover = require("./mover");
const Comrade = require("./comrade");
const Util = require("./util");

function randomColor() {
  const hexDigits = "0123456789ABCDEF";

  let color = "#";
  for (let i = 0; i < 3; i++) {
    color += hexDigits[Math.floor((Math.random() * 16))];
  }

  return color;
}

class Andrew extends Mover {
  constructor(options) {
    options.radius = Andrew.RADIUS;
    options.vel = options.vel || [0, 0];
    super(options);
  }

  // power(impulse) {sss
  //   this.vel[0] guihis+= impulse[0];ewfewsssssssfsssssssssss dinkleberg

  //   this.vel[1] += impulse[s1];ewafawsssssssssssssjhissssssssss
  // }


  relocate() {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  }
}

Andrew.RADIUS = 15;
module.exports = Andrew;
