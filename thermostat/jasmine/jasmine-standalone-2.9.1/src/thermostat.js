debugger

function Thermostat(){
  this.temperature = 20;
  this.minTemp = 10;
  this.maxTemp = 32;
  this.maxTempPowerSaveOn = 25;
  this.maxTempPowerSaveOff = 32;
  this.powerSaveStatus = 'ON';
  this.powerSave = true;
  this.powerSaveMode(true);
  this.lowUsage = 18;
  this.mediumUsage = 25;
  //this.highUsage;
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
    this.powerSaveStatus = 'ON';
    if (this.temperature > 25) {
      this.temperature = 25;
    }

  } else {
    this.maxTemp = this.maxTempPowerSaveOff;
    this.powerSaveStatus = 'OFF';
  }
};

Thermostat.prototype.reset = function () {
  this.temperature = 20;
};

Thermostat.prototype.currentUsage = function(){
  if (this.temperature <= this.lowUsage) {
    return "Low usage";
  } else if (this.temperature <= 25) {
    return "Medium usage";
  } else {
    return "High usage";
  }
}; // end of page!!
