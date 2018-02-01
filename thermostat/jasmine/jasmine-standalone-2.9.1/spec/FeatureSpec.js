describe('Thermostat', function() {
  var thermostat, minTemp;

  beforeEach(function() {
    thermostat = new Thermostat();
    minTemp = 10;
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
    expect(thermostat.minTemp).toEqual(minTemp)
  });

  it('cannot go below 10 degrees', function(){
    while (thermostat.temperature > minTemp) {
      thermostat.down();
    };
    expect(thermostat.temperature).toEqual(minTemp)
  });
});
