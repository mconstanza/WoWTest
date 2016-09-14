$(document).ready(function(){

// Elements ///////////////////////////////////////////////////////////
    var $submit = $('#submit');
    var $realmInput = $('#realmInput');
    var $characterInput = $('#characterInput')
    var $characterInfoDiv = $('#characterInfo')

// Variables //////////////////////////////////////////////////////////
    // WoW Community API query variables /////////////////////////
    var baseURL = 'https://us.api.battle.net/wow/character/'
    var apiKey = '&apikey=hfydd3d2bjkn44c3hadasg88tzvtbsqr'
    var locale = '?locale=en_US'


// On Click Functions /////////////////////////////////////////////////

    // submit button under player's realm and character name
    $submit.on('click', function(){

        realm = $realmInput.val().trim();
        character = $characterInput.val().trim();

        var queryURL = baseURL + realm +'/' + character + locale + apiKey

        $.ajax({url: queryURL, method: 'GET'}).done(function(response) {

            console.log(response);

            // set the JSON object to a variable, character
            var character = response;

            var $avatar = $('<img>');
            $avatar.attr('src', 'https://us.battle.net/static-render/us/' + character.thumbnail )

            var $name = $('<h1>');
            $name.text(character.name);

            var $realm = $('<h2>');
            $realm.text(character.realm);

            var $level = $('<h2>');
            $level.text(character.level);

            var $class = $('<h2>');
            $class.text(convertClassNumber(character.class));

            // append character info to div
            $characterInfoDiv.append($avatar, $name, $realm, $level, $class)
        });
    });

// General functions ////////////////////////////////////////
    // Takes a class number from Blizzard's API and changes it to a string of the class name
    function convertClassNumber(classNumber){

        switch(classNumber){
            case 1:
                return 'Warrior';
            case 2:
                return 'Paladin';
            case 3:
                return 'Hunter';
            case 4:
                return 'Rogue';
            case 5:
                return 'Priest';
            case 6:
                return 'DeathKnight';
            case 7:
                return 'Shaman';
            case 8:
                return 'Mage';
            case 9:
                return 'Warlock';
            case 10:
                return 'Monk';
            case 11:
                return 'Druid';
        };

    };

});
