$(document).ready(function() {

  var charCount = 140;
  var charCountColor = $('#char-count').css('color');
  $('#tweet-submit').prop('disabled', true);

  $('#char-count').html(charCount);

  $('#tweet-controls').css('display', 'none');

  $('.tweet-compose').on('focus', function() {
    $(this).css({'height': '5.0em'});
    $('#tweet-controls').show();
  });
  //
  // $('.tweet-compose').on('blur', function() {
  //   $(this).css({'height': '2.5em'})
  // });

  $('.tweet-compose').on('keyup', function() {
    var textEntered = $(this).val().length
    var count = charCount - textEntered;
    $('#char-count').html(count);

    if (count < 10) {
      $('#char-count').css('color', 'red');
    } else {
      $('#char-count').css('color', charCountColor);
    }

    if (count === 140 || count < 0) {
      $('#tweet-submit').prop('disabled', true);
     } else {
       $('#tweet-submit').prop('disabled', false);
     }

  })

  $('#tweet-submit').on('click', function() {
		var tweetWords = $('.tweet-compose').val();
		var newTweet = $('.tweet').first().clone();
		var myName = $('#profile-summary p').html();
		var picture = $('#profile-summary .avatar').attr('src');

		newTweet.find('.tweet-text').html(tweetWords);
		newTweet.find('.fullname').html(myName);
		newTweet.find('.avatar').attr('src', picture);
    newTweet.find('.username').html('@freshtweets');
    newTweet.find('.stats .retweets .num-retweets').html(0);
    newTweet.find('.stats .favorites .num-favorites').html(0);


    $('#stream').prepend(newTweet);

	});

  $('.tweet-actions').on('hover', function() {
    (this).css('display: block');
  })



})
