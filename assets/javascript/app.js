$(document).ready(function(){

// Elements ///////////////////////////////////////////////////////////
    var $submit = $('#submit');
    var $realmInput = $('#realmInput');
    var $characterInput = $('#characterInput')

// Variables //////////////////////////////////////////////////////////
    // WoW Community API query variables /////////////////////////
    var baseURL = 'https://us.api.battle.net/wow/character/'
    var apiKey = '&apikey=hfydd3d2bjkn44c3hadasg88tzvtbsqr'
    var locale = '?locale=en_US'


// On Click Functions /////////////////////////////////////////////////
    $submit.on('click', function(){

        realm = $realmInput.val().trim();
        character = $characterInput.val().trim();

        var queryURL = baseURL + realm +'/' + character + locale + apiKey

        $.ajax({url: queryURL, method: 'GET'}).done(function(response) {

            console.log(response);

            var character = response;



        })


    })

});
