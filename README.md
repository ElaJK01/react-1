
# Assignment - React 1

***

## Configuration steps

<details>

* Fork this repository to have this README.md present 
* Set your application with React up - ***WITHOUT CREATE-REACT-APP or similar***

</details>

## Assignment goal

<details>

The goal of this assignment is to set up a functioning React application, utilizing previously written code that now will have to undergo some refactorization, as well as using most of React's basic functionalities.

</details>

## Formal requirements

<details>

***KEEP IN MIND***
This task will require you to use your players/teams code - however, your HTML/CSS tasks are all themed differently. Try to make players/teams fit that theme - be it a team of hockey players, a team of random professions or familiada :)

Your application should utilize ***BOTH*** your HTML/CSS and JS projects, refactored accordingly.



***TECHNICAL REQUIREMENTS***
* your application will be available via **yarn dev**
* your JS assignment code - fake "backend" for this project - should now generate players and teams with information about them - name, surname, description  for players; team name, list of player names, description for teams
  * there should now be 1-3 second delay when requesting players/teams, ***per request, not per team/player***
  * there should be a 20% chance to get an error, ***per request, not per team/player***
  * loading state and error state must be handled appropriately
  * you should use either a short predefined list to generate from, or a specialized module (such as faker)
* upper navbar should contain two links - to a list of players and to a list of teams
  * your application should contain routing to accomodate this
* your application should fetch 2000 players/teams
* left navbar should now be a pagination component, used to navigate the whole list of players/teams, 20 per page for players, 10 per page for teams
 * you should split the whole list into pages locally
* clicking on "details" button should show a modal window with a bigger version of the card that will fit all the details that may be cut off in small-format cards
* Ramda must be utilized wherever possible
* components should be reusable where possible
* try to look for an optimal solution to problems that arise, especially regarding your bundler configuration
* player list should be sorted by player name and surname
* team list should be sorted by team name


</details>
