$( document ).ready(function() {

    thermostat = new Thermostat();
    $('#currentTemp').html(thermostat.temperature);
    $('#powerSaveStatus').html(thermostat.powerSaveStatus);

    $('#increaseTemp').click(function(){
      thermostat.up();
      $('#currentTemp').html(thermostat.temperature);
    });

    $('#decreaseTemp').click(function(){
      thermostat.down();
      $('#currentTemp').html(thermostat.temperature);
    });

  $('#powerSaveOn').click(function(){
      thermostat.powerSaveMode(true);
      $('#powerSaveStatus').html(thermostat.powerSaveStatus);
  });

  $('#powerSaveOff').click(function(){
      thermostat.powerSaveMode(false);
      $('#powerSaveStatus').html(thermostat.powerSaveStatus);
  });

});
