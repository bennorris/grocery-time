$(document).ready(function() {

      $('#submitButton').on('click', function() {
        var putOnList = $('#addList').val();

        //need and want both selected
        if ($('.checkbox[value=need]').is(':checked') && $('.checkbox[value=want]').is(':checked')) {
          $('#errorBox').append('<h4>Life is full of tough decisions.<br>Please choose only one option.</h4>');
        }
        //need and dont need both selected
        else if ($('.checkbox[value=need]').is(':checked') && $('.checkbox[value=dontneed]').is(':checked')) {
          $('#errorBox').append('<h4>Life is full of tough decisions.<br>Please choose only one option.</h4>');
        }
        //want and shouldnt buy selected
        else if ($('.checkbox[value=want]').is(':checked') && $('.checkbox[value=dontneed]').is(':checked')) {
          $('#errorBox').append('<h4>Life is full of tough decisions.<br>Please choose only one option.</h4>');

        }

        //only need selected
        else if ($('.checkbox[value=need]').is(':checked')) {

          $('.grocery1').empty();
          $(".groceriesAdded").append('<li><button class="btn newItemList" type="submit">' + putOnList + '</button></li>');
          $('#titleRow2').effect('bounce', {
            times: 4
          }, 'slow');

        }
        //only want selected
        else if ($('.checkbox[value=want]').is(':checked')) {
          $('.grocery2').empty();
          $(".wantAdded").append('<li><button class="btn  newItemList">' + putOnList + '</button></li>');
          $('#titleRow2').effect('bounce', {
            times: 4
          }, 'slow');
        }

        //only dont need selected
        else if ($('.checkbox[value=dontneed]').is(':checked')) {
          $('.grocery3').empty();
          $('.dontNeedAdded').append('<li><button class="btn  newItemList">' + putOnList + '</button></li>');
          $('#titleRow2').effect('bounce', {
            times: 4
          }, 'slow');
        }

        //reset entry field
        $('#addList').val('');
      });

      //remove checked off items

      $('body').on('click', '.newItemList', function() {
        $(this).effect('fade');

      });
  $('body').on('click', '.newItemList', function() {
        $(this).fadeOut('normal', function() {
          $(this).remove;
           
        
        });
    

      });
 
  
  
});