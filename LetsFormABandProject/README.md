# llevenhagen.github.io

                                 Ready Me :

Live site link: https://llevenhagen.github.io/LetsFormABandProject/


##Technologies used:
  HTML, CSS, JS, and Jquery.

##Approach Taken:

###HTML
  - I outlined the grid and the inventory first. I decided how to make the grid by considering the goal functionality of the game. I would need to be able to move images between squares on an 8 x 8 grid.
  - I decided to hardcode the 64 squares, organized into columns of 8. Although I knew I could make the process more efficient by creating the grid with jQuery, I wanted to have the HTML hard coded in front of me so I could conceptualize it better when writing functions that would influence it.

###JS

####icons array (lines 8-111)
  - I made an array of objects, each object having an image class and source (ie: guitar image paired with guitar class). This was so that the computer could ust the classes to look for matches in the checkColumnorRow function (line 303).

####randomIcon Function / assignRandomIconandClass Function   (lines 152-169)

  - I made a function to take the 8 images I had gathered and randomize them to fill out the grid. I used jQuery to append an image tag to each square in the grid (line 158).

####checkColumnorRow function (lines 303 - 550)
  - I knew I needed the program to look for matches of three not only in the column (y) axis, but also the row (x) axis, so I made 16 arrays - 8 arrays for each column and 8 arrays for each row. In each array, I listed the <img> div for indexes 0 - 8. (Lines 179 - 214)

  - The checkColumnorRow function then examines each column or row's index[0], index[1], and index[2]. It would also compare index[1] with index[2] and index[3]. I had the computer continue with this all the way until index[5], index[6], and index[7]. That way, the computer had checked each item in the row or column with the two before and after it.
*thoughts*
  I wrote this part of the code once, copied and pasted it, and planned on making it into a function I could call later. I didn't find the time, and now it really bothers me to look at because it is the opposite of DRY.

#### stockInventory function (335, 377, 418, 459, 500, 541, )
  -Once a match was found, I needed to know if those matches were all either: cash, guitar, bass, keys, drums, or mics.
  -This function called the AllAreCash(), allAreGuitars(), allAreBass(), allAreKeys(), allAreMic(), and allAreDrums().

#### AllAre...etc functions (lines 216 - 299)
  -If the matches were all cash, the money inventory would add 25 dollars to currentCash, which had been set globally to begin with to equal 0.
  -If all the matches were an instrument, I would append the src associated with that match to the instrument inventory.

####CheckAllColumnsAndRows() (line 557 - 576)
  -called checkColumnorRow on every individual column or row. I called this function after every click event in the game and periodically throughout the game to check for matches and replace them.

####Click events  

**Difficulties**


  -This was the hardest part of the project for me. I spent hours upon hours, days upon days, trying to make the code work.

  -I originally used the *makeNeighborsClickable* function. (lines 723 - 884). This function would run through each row and column and identify it's closest neighbor, and so when you clicked on the first item, the program identified the image to the left, right, top, and bottom.

  **There were a ton of bugs- seemingly endless amounts of bugs**
######I had written the function as one click event with another click event nested into it.
  I intended for that to register as click one and click two.         
  -Unfortunately, click two was registering as not only click two, but also as another click one.
  -Also, if you clicked the first item, and then your second click was on the one of the neighbors in the row axis, the click events set on the column axis would remain, and cause complete chaos when you clicked it later on. Images randomly changed and nothing worked correctly.

####Matt told me to scale back
  -He told me to make a simpler function to make it so that the player could switch *any* two images, rather than only neighbors.
  -I really didn't want to do this, since I felt it would make the game pointless. Any player could win in seconds!
  -My time was running out, however, so two days before the deadline, I started working on a new function to accomplish this.
**improvements** (lines 580 - 717)
  Things I wanted to avoid this time around:
  1 -no click event nested within another click event.
  2 -I remembered how click two kept registering as another click one.

  So:
  - I wrote *one click function* that applied to every image on the grid.  
  - I created an if/else statement within the click event.
  - I created a .class (image-swap) that would get assigned to the first click.
  - The if/else statement determined:
  - *if* no image on the grid had the class 'image-swap', the first click would be treated as a first click.
  - however, if any image on the grid currently had the class 'image-swap'- meaning it had been clicked - then the click event would move forward with the *else* statement:
  - the *else* statement contained the 'second click' parameters.
  *The one thing that I kept from my first try:*
  - on second click, I switched the two images' sources and classes so that they would retain their source/class match, but visually they would switch places
===============================
**how I improved**
  Once I had the 'simpler' code written, I realized that this approach was much better and actually could be built on to achieve what I had originally wanted- to select only the first image's neighbors for the second click.

- I wrote parameters into the first click that would:
  -identify the ID of the parent'.square' of that image,
  -find it's neighboring squares and their children (the images next door),
  -assign an ID to the neighbors (right, left, top, bottom)
  -make the second click only possible on those images, rather than all the images.

**What I learned from this**
It was better to start with the simplest outline of what I wanted to do, and build from there. I also learned how important it is to be able to accept when your code isn't working and start fresh, EVEN if you have spent days and days on the first draft. The second draft will go better, because you can't help but learn from the mistakes of the first draft.

=================================
##Modal one and Two (lines 1024 - 1047)
-I programmed a modal to:
  -introduce the concept for the game
  -offer an input so that the two players could enter their names, which would be sent to the aside to log each player's time once they had completed the game. -- *clickSubmit function* (lines 1012 - 1019)
  -The second modal explains the instructions on how the game was played.

##Timer Function (lines 2 - 4)
  - programmed to log the first player's time, restart with second player, and then log the second player's time.
  -I researched how to make a timer, but I'm afraid the logic to make a legitimate timer with zeros and everything was a bit above my head at this point, so I decided to do it my own way.
  - I made a timer by using a setInterval on an *addSeconds function* (line 1068-1080)
  -added one second every second, and once the seconds got to 60, the seconds would go back to zero and the minute would go up.

##CheckForfullInventory Function (lines 953 - 987)
  - called after every match.
  - checked the inventory to see if it held all the images (guitar, etc) and $1000. if it did:
  - logged player one's time into the aside (lines 970-971)
    - called *restartGame function*:
      - brought seconds/minutes back to 0
      - called *reloadGridAndInventory function*
        - removed all images from the grid and replaced them with new random images.
        - cleared the inventory for the next player
  - reset timer for player two's turn.
  - if player one's text wasn't empty, it would log the time into player two's time and call the *Winner Function*

##Winner Function (lines 928 - 951)
  -compared player one's minutes to player two's minutes, and if they were even, compared seconds.
  -made sure and set parameter for tie.
  -declared winner in *Modal 3*

##Modal 3
  -contained congratulations and *Play again Button*


##Unsolved problems:

  - when a player clicks one item, they need to click a neighbor before they can click anywhere else. I would like to find a way to program it so that if you don't click a neighbor but click somewhere else, the click event starts over on click one and just forgets about the last click event even though it wasn't fulfilled.  
  - I want to make the ratios more consistent. Sometimes you start out with a ton of cash and no instruments, or you start out with every instrument and no cash.

##Things I wish I could add/change:

  - add another modal after the first player is done, announcing that it is the second player's turn. I definitely could do this, but unfortunately didn't have enough time.
  - make it so that when you get a guitar (or any instrument) but already have a guitar (or that particular instrument, if not a guitar) in your inventory, you can 'sell' the extra guitar for money added to your inventory.
  - make it so that when three 'bosses' or 'lazy bandmates' line up, they detract money (in the boss' case) or instruments from your inventory (in the case of the lazy bandmate).
  - offer a 'one player' game.

  ==================================
  **Thoughts**

  **New Things I learned / Ways I've grown**
  - animation for clicking items and rotating the vinyl in the upper right.
  - Modals
  - I now know a lot more about css
  - set interval / clear setInterval
  - setTimeout()
  - if/else statements within click events

  - using css to affect classes/IDs so I can get visuals on if my code is working correctly.
  - pseudocode! When you are coding one program for a week, you need to be able to look back and know what you were doing.
    - You may have energy and brainpower to keep up with the code when you start for the day, but some functions take all day to write, and when you're tired it's easy to lose track of what you had planned and get confused.
  - console.log(EVERYTHING). Things very often do not work the way you expect, and you will waste a lot of time if you build a whole function off of a snippet that isn't even working the way you need it to.
  - give yourself breaks. I spent a lot of time at the computer when I was useless, making mistakes and messing up code I had written.
  - I learned how much of a creative process this can be. There are so many ways to go about anything you're trying to do, and the endless amount of possibilities was inspiring and motivating. I loved this project, even when it made me want to cry from frustration!
