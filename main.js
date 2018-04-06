$(document).ready(function(){
  //setto una variabile per alternare la X al O
  var isX = false;
  //genero la griglia 3x3
  generateGrid();
  //creo una variabile per salvare il nome della classe;
  var elementsClass ;
  $('.grid-items').click(function(){
    var cellbox = $(this);
    if(cellbox.hasClass('grid-items')){
      if(!isX){
        cellbox.html('X');
        cellbox.removeClass('grid-items');
        elementsClass = 'x-items';
        cellbox.addClass(elementsClass);
        isX = true;
      }
      else{
        cellbox.html('O');
        cellbox.removeClass('grid-items');
        elementsClass = 'o-items';
        cellbox.addClass(elementsClass);
        isX = false;
      }
    }
    if(isWon(elementsClass)){
      if(elementsClass == 'x-items'){
        $('#winTitle').html('Player1 won!');
      }
      else{
        $('#winTitle').html('Player2 won!');
      }
    }
  });
});

//funzione per generare griglia 3x3
function generateGrid(){
  for (var i = 0; i < 9; i++) {
    $('#tris-cnt').append('<div>' + '</div>');
    $('#tris-cnt').children('div:nth-child('+ (i + 1) + ')').attr('id','num' + (i + 1));
    $('#tris-cnt').children('div:nth-child(' + (i + 1) + ')').addClass('grid-items');
  }
}
//funzione per controllare la vittoria
function isWon(className){
  //controllo se la vittoria è orizzontale
  if(($('#num1').hasClass(className) && $('#num2').hasClass(className) && $('#num3').hasClass(className))){
    return true;
  }
  if(($('#num4').hasClass(className) && $('#num5').hasClass(className) && $('#num6').hasClass(className))){
    return true;
  }
  if(($('#num7').hasClass(className) && $('#num8').hasClass(className) && $('#num9').hasClass(className))){
    return true;
  }
  //controllo se la vittoria è verticale
  if(($('#num1').hasClass(className) && $('#num4').hasClass(className) && $('#num7').hasClass(className))){
    return true;
  }
  if(($('#num2').hasClass(className) && $('#num5').hasClass(className) && $('#num8').hasClass(className))){
    return true;
  }
  if(($('#num3').hasClass(className) && $('#num6').hasClass(className) && $('#num9').hasClass(className))){
    return true;
  }
  //controllo se la vittoria è in diagonale
  if(($('#num1').hasClass(className) && $('#num5').hasClass(className) && $('#num9').hasClass(className))){
    return true;
  }
  if(($('#num3').hasClass(className) && $('#num5').hasClass(className) && $('#num7').hasClass(className))){
    return true;
  }
  return false;
}
