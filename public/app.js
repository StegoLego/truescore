$( document ).ready(function() {

// get two comparisons at page load
 $.get('/nextBattlePairs', function(data){
   $('#divA').append(data[0].name);
   $('#imgA').attr('src', data[0].imageUrl);
   $('#divB').append(data[1].name);
   $('#imgB').attr('src', data[1].imageUrl);
 });


  $('#buttonA').on('click', function(){
    //post results to server
    $.post('/updateDBwithResultOfBattle', {winner: "left"} );

    //update rank list
    $.get('/getRankList', function(data){
      $('#currentRank').html("");
      $('#currentRank').append(JSON.stringify(data));
    });

    // clear existing text
    $('#divA').html("");
    $('#divB').html("");

    // request new battle and populate
    $.get('/nextBattlePairs', function(data){
      $('#divA').append(data[0].name);
      $('#divB').append(data[1].name);
    });
  });



  $('#buttonB').on('click', function(){
    //post results to server
    $.post('/updateDBwithResultOfBattle', {winner: "right"});

    //update rank list
    $.get('/getRankList', function(data){
      $('#currentRank').html("");
      $('#currentRank').append(JSON.stringify(data));
    });

    // clear existing text
    $('#divA').html("");
    $('#divB').html("");

    // request new battle and populate
    $.get('/nextBattlePairs', function(data){
      $('#divA').append(data[0].name);
      $('#divB').append(data[1].name);
    });
});

});
