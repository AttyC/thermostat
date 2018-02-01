$( document ).ready(function() {

  thermostat = new Thermostat();
  updateTemperature();

  $('#powerSaveStatus').html(thermostat.powerSaveStatus);

  $('#increaseTemp').click(function(){
    thermostat.up();
    updateTemperature();
  });

  $('#decreaseTemp').click(function(){
    thermostat.down();
    updateTemperature();
  });

  $('#powerSaveOn').click(function()
    thermostat.powerSaveMode(true);
    $('#powerSaveStatus').html(thermostat.powerSaveStatus);
  });

  $('#powerSaveOff').click(function(){
    thermostat.powerSaveMode(false);
    $('#powerSaveStatus').html(thermostat.powerSaveStatus);
  });

  $('#reset').click(function(){
    thermostat.reset();
    updateTemperature();
  });

  function updateTemperature(){
    $('#currentTemp').html(thermostat.temperature);
  };

});
