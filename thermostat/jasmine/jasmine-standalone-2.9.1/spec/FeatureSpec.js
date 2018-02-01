describe('Thermostat', function() {
  var thermostat, minTemp;

  beforeEach(function() {
    thermostat = new Thermostat();
    minTemp = 10;
    maxTempPowerSaveOn = 25;
    maxTempPowerSaveOff = 32;
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('increases temperature with up function', function(){
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it('decreases temperature with a down function', function(){
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });
  it('minimum temperature is 10 degrees', function(){
    expect(thermostat.minTemp).toEqual(minTemp);
  });

  it('cannot go below 10 degrees', function(){
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.temperature).toEqual(minTemp);
  });

  it('confirms that power saving mode is on by default', function(){
    expect(thermostat.powerSave).toEqual(true);
  });

  it('maximum temperature is 25 degrees - when power save mode is ON', function(){
    for (var i = 0; i < 10; i++) {
      thermostat.up();
    }
    expect(thermostat.temperature).toEqual(25);
  });

  it('maximum temperature is 32 degrees - when power save mode is OFF', function(){
    thermostat.powerSaveMode(false);
    for (var i = 0; i < 15; i++) {
      thermostat.up();
    }
    expect(thermostat.temperature).toEqual(32);
  });

  it('resets temperature to 20 degrees', function () {
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it('displays low energy usage', function(){
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.currentUsage()).toEqual('Low usage');
  });

  it('displays medium energy usage', function(){
    expect(thermostat.currentUsage()).toEqual('Medium usage');
  });

  it('displays high energy usage', function(){
    thermostat.powerSaveMode(false);
    for (var i = 0; i < 15; i++) {
      thermostat.up();
    }
    expect(thermostat.currentUsage()).toEqual('High usage');
  });

});
