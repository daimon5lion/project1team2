var teamRosterURL = "https://statsapi.web.nhl.com/api/v1/teams/15/roster";
$.ajax({
    url: teamRosterURL,
    method: "GET"
}).then(function (response) {
    // Log the queryURL
    console.log(teamRosterURL);
    console.log(response);
    console.log(response.roster[1].person.fullName);
    console.log(response.roster[1].position.name);
    console.log(response.roster[1].jerseyNumber);

    for (var i = 0; i < response.roster.length; i++) {
        var rosterDiv = $("<div>");
        rosterDiv.addClass("rosterdiv");
        rosterDiv.html(
            "<p>Player Name: " +
            response.roster[i].person.fullName +
            "</p> <p> Jersey Number: " +
            response.roster[i].jerseyNumber +
            "</P> <p> Position: " +
            response.roster[i].position.name +
            "</P> <br>"
        );
        $(".roster").append(rosterDiv);
    }
});
Jump
Message Input

Message #project1team2