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

  var images = [];
  var team = 25;

  for (var i = 0; i < team; i++) {
    images.push("assets/images/" + i + ".jpg");
  }
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

    //

    $("#player" + i).append(
      images[i - 1],
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
