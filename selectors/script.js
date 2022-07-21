//$('h1#heading1').hide();
//$('h1').hide();
//$('h1.heading1').hide();
//$('p span').css('color', 'red')
//$('*').hide();
/* $('ul#list li:first').css('color', 'red');
$('ul#list li:last').css('color', 'green');
$('ul#list li:even').css('background-color', 'yellow');
$('ul#list li:odd').css('background-color', 'lightblue');
$('ul#list li:nth-child(3n').css('list-style', 'none');

$(':text').hide();
$('[href]').css('color', 'red');
$('a[href="https://www.opera.com/"]').css('color', "green"); */

/* $('#btn1').click(function() {
    alert('hello1')
}) */
/* $('#btn1').on('click', function() {
    alert('Button clicked!')
}) */

/* $('#btn1').on('click', function() {
    // $('.para1').hide();
    $('.para1').toggle();
})

$('#btn2').on('click', function() {
    $('.para1').show();
}) */
/* 
$('#btn1').dblclick(function() {
    $('.para1').toggle()
})
$('#btn1').dblclick(function() {
    $('.para1').toggle()
}) */
/* 
$('#btn1').on('mouseenter', function() {
    $('.para1').toggle()
})
$('#btn1').on('mouseleave', function() {
    $('.para1').toggle()
}) */

/* $('#btn1').on('mousemove', function() {
    $('.para1').toggle()
}) */

/* $('#btn1').on('mousedown', function() {
    $('.para1').toggle()
})
$('#btn1').on('mouseup', function() {
    $('.para1').toggle()
}) */
/* 
$('#btn1').click(function(e) {
    //  alert(e.currentTarget.id);
    //alert(e.currentTarget.innerHTML);
    //alert(e.currentTarget.outerHTML);
    //alert(e.currentTarget.className);

})

$(document).on('mousemove', function(e) {
    $('#coords').html("Coords: Y:" + e.clientY + 'X:' + e.clientX)
}) */
$(document).ready(function() {

    /*  $('input').focus(function() {
         //alert('focus');
         $(this).css('background', 'pink');
     });

     $('input').blur(function() {
         //alert('focus');
         $(this).css('background', 'white');
     }); */

    /*  $('input').keyup(function(e) {
         console.log(e.target.value)
     }) */

    /*  $('select#gender').change(function(e) {
         alert(e.target.value)
     }); */

    /* $('#form').submit(function(e) {
        e.preventDefault();
        var name = $('input#name').val();
        console.log(name);
    }) */
    /*  $('p.para1').css('color', 'red') */
    //$('p.para1').css({ color: 'red', background: 'grey' });
    //$('p.para2').addClass('myClass');
    // $('p.para2').removeClass('myClass');
    /*  $('#btn1').click(function() {
        $('p.para2').toggleClass('myClass');
    });
 */
    //$('#myDiv').text('Hello ');
    /*  $('#myDiv').html('<h3>Hello world </h3> ');
     alert($('#myDiv').text()) */

    /* $('ul').append('<li>List Item</li>');
    $('ul').prepend('<li>List Item</li>');

    $('.para1').appendTo('.para2');
    $('.para1').prependTo('.para2');
    $('ul').before('<h4>Hello</h4>');
    $('ul').after('<h4>World</h4>');
    $("ul").empty();
    $("ul").detach();

    $('a').attr('target', '_blank');

    //alert($('a').attr('href'));
    $('a').removeAttr('target') */
    // $('p').wrap('<h1>');
    // $('p').wrapAll('<h1>');

    /*    $('#newId').keyup(function(e) {
           var code = e.which;
           if (code == 13) {
               e.preventDefault;
               ($('ul').append('<li>' + e.target.value + '</li>'))
           }
       }) */

    /*     var myArr = ['Brad', 'Bob', 'Anna', 'Roma'];
        $.each(myArr, function(i, val) {
            $('#users').append('<li>' + val + '</li>')
        }) */

    /*  var newArr = $('ul#list li').toArray();
     $.each(newArr, function(i, val) {
         console.log(val.innerHTML)
     }) */

    /*  $('#btn1').click(function() {
         $('#box').fadeOut(3000, function() {
             $('#btn1').text('Its GONE')
         });
     });

     $('#btn2').click(function() {
         $('#box').fadeIn(3000);
     });
     $('#btn3').click(function() {
         $('#box').fadeToggle(1000);
     });
     $('#btn4').click(function() {
         $('#box').slideDown(3000);
     });
     $('#btn5').click(function() {
         $('#box').slideUp(3000);
     });
     $('#btn6').click(function() {
         $('#box').slideToggle(3000);
     });
     $('#btn7').click(function() {
         $('#box').stop();
     });
     $('#btn8').click(function() {
         $('#box1').animate({
             left: 500,
             height: '300px',
             width: '300px',
             opacity: '0.5'
         });
     });
     $('#btn9').click(function() {
         $('#box1').animate({
             left: 0,
             height: '100px',
             width: '100px',
             opacity: '1'
         });
     });
     $('#btn0').click(function() {
         var box = $('#box1');
         box.animate({
             left: 300
         })
         box.animate({
             top: 300
         })
         box.animate({
             left: 0,
             top: 300
         })
         box.animate({
             left: 0,
             top: 0,
         })
     }); */


    /*  $('#result').load('test.html', function(
         responseTxt, statusTxt, xhr) {
         if (statusTxt == "success") {
             alert('It WENT FINE')
         } else if (statusTxt == 'error') {
             alert('Error:' + xhr.statusTxt)
         }
     }); */
    /* 
        $.get('test.html', function(data) {
            $('#result').html(data)
        }) */

    /*   $.getJSON('users.json', function(data) {
          $.each(data, function(i, user) {
              $('ul#users').append('<li>' + user.firstName + '</li>')
          })
      }) */

    /*  $.ajax({
         method: 'GET',
         url: "https://jsonplaceholder.typicode.com/posts",
         dataType: 'json'
     }).done(function(data) {
         console.log(data);
         $.map(data, function(post, i) {
             $('#result').append('<h3>' + post.title + "</h3><p>" + post.body + '</p>');
         })
     }) */

    $('#postForm').submit(function(e) {
        e.preventDefault();
        var title = $('#title').val();
        var body = $('#body').val();
        var url = $(this).attr('action');

        $.post(url, { title: title, body: body }).
        done(function(data) {
            console.log('POST SAVED');
            console.log(data);

        })
    })

});