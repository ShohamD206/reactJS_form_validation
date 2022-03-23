1. create 2 components to show the people and the planet
2. in the people component (and route), fetch all the characters in swapi.
3. build a card for each one containing:
    a. the image of the character
    b. some basic data
    c. a link button to the second route displaying the home world
    d. when redirecting to the homeworld route, get the route param containing the homeworld id
    e. display some data related to the home world with the home world image* use axios to fetch the data* use useParams to the url param (the home world id in the planets route)