function Thermostat(){
  this.temperature = 20;
  this.minTemp = 10;
  this.maxTemp = 32;
  this.maxTempPowerSaveOn = 25;
  this.maxTempPowerSaveOff = 32;
  this.powerSave = true;
  this.powerSaveMode(true);
}

Thermostat.prototype.up = function () {
  if (this.temperature < this.maxTemp) {
      this.temperature ++;
  }
  return this.temperature;
};

Thermostat.prototype.down = function () {
  if (this.temperature > this.minTemp) {
      this.temperature --;
  }
  return this.temperature;
};

Thermostat.prototype.powerSaveMode = function (boolean) {
  if (boolean === true) {
    this.maxTemp = this.maxTempPowerSaveOn;
  } else {
    this.maxTemp = this.maxTempPowerSaveOff;
  }
};
