function Thermostat(){
  this.temperature = 20;
  this.minTemp = 10;
  this.powerSave = true;
};

Thermostat.prototype.up = function () {
  this.temperature ++;
};

Thermostat.prototype.down = function () {
  if (this.temperature > this.minTemp) {
      this.temperature --;
  }
  return this.temperature;
};
