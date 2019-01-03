//getting data from NHL API
var teamRosterURL = "https://statsapi.web.nhl.com/api/v1/teams/15/roster";
$.ajax({
  url: teamRosterURL,
  method: "GET"
}).then(function(response) {
  // Log the queryURL
  console.log(teamRosterURL);
  console.log(response);
  console.log(response.roster[1].person.fullName);
  console.log(response.roster[1].position.name);
  console.log(response.roster[1].jerseyNumber);

  var card = $("<div>");
  card.addClass("card");
  $(".rostercards").append(card);

  var images = [
    "assets/images/0.jpg",
    "assets/images/1.jpg",
    "assets/images/2.jpg",
    "assets/images/3.jpg",
    "assets/images/4.jpg",
    "assets/images/5.jpg",
    "assets/images/6.jpg",
    "assets/images/7.jpg",
    "assets/images/8.jpg",
    "assets/images/9.jpg",
    "assets/images/10.jpg",
    "assets/images/11.jpg",
    "assets/images/12.jpg",
    "assets/images/13.jpg",
    "assets/images/14.jpg",
    "assets/images/15.jpg",
    "assets/images/16.jpg",
    "assets/images/17.jpg",
    "assets/images/18.jpg",
    "assets/images/19.jpg",
    "assets/images/20.jpg",
    "assets/images/21.jpg",
    "assets/images/22.jpg",
    "assets/images/23.jpg",
    "assets/images/24.jpg"
    //"assets/images/24.jpg"
  ];

  for (var i = 0; i < images.length; i++) {
    images[i] = '<img src="' + images[i] + '">';
  }

  //
  //for loop for creating roster log
  for (var i = 0; i < response.roster.length; i++) {
    var cardHeader = $("<div>");
    cardHeader.addClass("card-header");
    cardHeader.attr({
      id: "header" + i
    });
    $(".card").append(cardHeader);

    var buttonLink = $("<a>");
    buttonLink.addClass("card-link");
    buttonLink.attr({
      id: "player" + i
    });
    $("#header" + i).append(buttonLink);

    //
    /* for (var i = 0; i < images.length; i++) {
      $("#player" + i).append(images[i]);
    }
    */
    //

    $("#player" + i).append(
      images[i-1],
      playerName,
      "<br>",
      jerseyNumber,
      "&nbsp;" + "&nbsp;" + "&nbsp;" + "&nbsp;",
      positionName,
      "&nbsp;" + "&nbsp;" + "&nbsp;" + "&nbsp;",
      positionType
    );

    var name = "Player Name: ";

    var number = "Jersey Number: ";

    var position = "Position Name: ";

    var type = "Position Type: ";

    var playerName = name + response.roster[i].person.fullName;
    var jerseyNumber = number + response.roster[i].jerseyNumber;
    var positionName = position + response.roster[i].position.name;
    var positionType = type + response.roster[i].position.type;
  }
});
