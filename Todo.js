$(document).ready(function(){
  
  $('.fa-check').hide();
  
  $(".list-items").on({
    mouseenter: function () {
        $(this).find('.fa-check').show('fast');
    },
    mouseleave: function () {
        $(this).find('.fa-check').hide('fast');
    }
      
    });
  
$('#submit').click(function(event){
    
    var textInput = $('#text-input').val();
    
    if (textInput==''){
        return;
      
    }else{
     event.preventDefault();
     
     $('ul').add("<li class='list-items'><a href='#'><div                             class='fa fa-check'></div></a> "+textInput+"                           </li>" ).fadeIn().appendTo('ul');
              $('.fa-check').hide();
              
    $(".list-items").on({
    mouseenter: function () {
        $(this).find('.fa-check').show('fast');
    },
    mouseleave: function () {
        $(this).find('.fa-check').hide('fast');
    }
      
    });
      
    $("ul>li>a").click(function(){
      $(this).parent( "li" ).slideUp(200); 
    }); 
      
  }; $('#text-input').val(""); 
  
 });
  
  $("ul>li>a").click(function(){
      $(this).parent( "li" ).slideUp(200); 
  });
  
});