$( document ).ready(function() {
    rightDiv = '<br>';
    tweets.forEach(function(tweet) {
        tweetImg = '';
        if ('img' in tweet) {
            tweetImg += '<img class="card-img-top" src="' + tweet.img + '">';
        }
        tweetBody = '';
        if ('title' in tweet || 'text' in tweet || 'date' in tweet) {
            tweetBody += '<div class="card-body">' +
                ('title' in tweet ? '<h5 class="card-title">' + tweet.title + '</h5>' : '') +
                ('text' in tweet ? '<p class="card-text">' + tweet.text + '</p>' : '') +
                ('date' in tweet ? '<p class="card-date">' + tweet.date + '</p>' : '') +
            '</div>';
        }
        if (tweetImg === '' && tweetBody === '') {
            return;
        }
        card = '<div class="card" align="left">' + tweetImg + tweetBody + '</div>';
        rightDiv += card;
    });
    $('#right').html(rightDiv);
});