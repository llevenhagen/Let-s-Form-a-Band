$(()=> {
  // make icon array representing both src and value (to match later)
const icons = [
{src: 'images/bass-guitar-pic.png', value: 'bass'},
{src: 'images/guitar.jpg', value: 'guitar'},
{src: 'images/keys-icon.png', value: 'keys'},
{src: 'images/mic-pic.png', value: 'mic'},
{src: 'images/drums.jpg', value: 'drums'},
{src: 'images/bass-guitar-pic.png', value: 'bass'},
{src: 'images/guitar.jpg', value: 'guitar'},
{src: 'images/keys-icon.png', value: 'keys'},
{src: 'images/mic-pic.png', value: 'mic'},
{src: 'images/drums.jpg', value: 'drums'},

{src: 'images/bass-guitar-pic.png', value: 'bass'},
{src: 'images/guitar.jpg', value: 'guitar'},
{src: 'images/keys-icon.png', value: 'keys'},
{src: 'images/mic-pic.png', value: 'mic'},
{src: 'images/drums.jpg', value: 'drums'},
{src: 'images/bass-guitar-pic.png', value: 'bass'},
{src: 'images/guitar.jpg', value: 'guitar'},
{src: 'images/keys-icon.png', value: 'keys'},
{src: 'images/mic-pic.png', value: 'mic'},
{src: 'images/drums.jpg', value: 'drums'},
{src: 'images/cash_pic.jpg', value: 'cash'},
{src: 'images/cash_pic.jpg', value: 'cash'},
{src: 'images/cash_pic.jpg', value: 'cash'},
{src: 'images/cash_pic.jpg', value: 'cash'},
{src: 'images/cash_pic.jpg', value: 'cash'},
{src: 'images/cash_pic.jpg', value: 'cash'},
{src: 'images/cash_pic.jpg', value: 'cash'},
{src: 'images/cash_pic.jpg', value: 'cash'},
{src: 'images/lazybandmate.png', value: 'bandmate'},
{src: 'images/lazybandmate.png', value: 'bandmate'},
{src: 'images/demanding-boss.jpg', value: 'boss'}
];
// loop randomly through array to populate grid with images paired with class.
// let randomIcon = icons[Math.floor(Math.random()*icons.length)];
let randomIcon = icons[Math.floor(Math.random()*icons.length)];
const newRandomIcon = () => {
  randomIcon = icons[Math.floor(Math.random()*icons.length)];
};
// console.log(randomIcon);

// add image tag to each square
$('.square').append('<img>');

// function to assign random image paired with class to <img> tags
const assignRandomIconAndClass = () => {
for (i =0; i<64; i++) {
  let $single = $('img').eq(i);
  // console.log($single);
   $single.addClass(randomIcon.value);
   $single.attr('src', randomIcon.src);
   newRandomIcon();
}}

// assignRandomIconAndClass();
// console.log($(column1[7]).hasClass('cash'));


// =============MAKE ARRAY FOR EACH COLUMN AND ROW:============

// ======================COLUMNS:=============================

// ==================COLUMN 1==================================
let column1 = [$('img').eq(0), $('img').eq(1), $('img').eq(2), $('img').eq(3), $('img').eq(4), $('img').eq(5), $('img').eq(6), $('img').eq(7)];
// ====================COLUMN 2===============================
let column2 = [$('img').eq(8), $('img').eq(9), $('img').eq(10), $('img').eq(11), $('img').eq(12), $('img').eq(13), $('img').eq(14), $('img').eq(15)];
// ===================COLUMN 3===============================
let column3 = [$('img').eq(16), $('img').eq(17), $('img').eq(18), $('img').eq(19), $('img').eq(20), $('img').eq(21), $('img').eq(22), $('img').eq(23)];
// ==================Column 4================================
let column4 = [$('img').eq(24), $('img').eq(25), $('img').eq(26), $('img').eq(27), $('img').eq(28), $('img').eq(29), $('img').eq(30), $('img').eq(31)];
// ==================Column 5================================
let column5 = [$('img').eq(32), $('img').eq(33), $('img').eq(34), $('img').eq(35), $('img').eq(36), $('img').eq(37), $('img').eq(38), $('img').eq(39)];
// ====================COLUMN 6=================================
let column6 = [$('img').eq(40), $('img').eq(41), $('img').eq(42), $('img').eq(43), $('img').eq(44), $('img').eq(45), $('img').eq(46), $('img').eq(47)];
// =======================Column 7=============================
let column7 = [$('img').eq(48), $('img').eq(49), $('img').eq(50), $('img').eq(51), $('img').eq(52), $('img').eq(53), $('img').eq(54), $('img').eq(55)];
// ====================COLUMN 8==============================
let column8 = [$('img').eq(56), $('img').eq(57), $('img').eq(58), $('img').eq(59), $('img').eq(60), $('img').eq(61), $('img').eq(62), $('img').eq(63)];

// ====================ROWS:===================================

// ======================ROW 1==========================================
let row1 = [$('img').eq(0), $('img').eq(9), $('img').eq(17), $('img').eq(25), $('img').eq(33), $('img').eq(41), $('img').eq(49), $('img').eq(57)];
// ======================ROW 2==========================================
let row2 = [$('img').eq(2), $('img').eq(10), $('img').eq(18), $('img').eq(26), $('img').eq(34), $('img').eq(42), $('img').eq(50), $('img').eq(58)];
// // ======================ROW 3==========================================
let row3 = [$('img').eq(3), $('img').eq(11), $('img').eq(19), $('img').eq(27), $('img').eq(35), $('img').eq(43), $('img').eq(51), $('img').eq(59)];
// ======================ROW 4==========================================
let row4 = [$('img').eq(4), $('img').eq(12), $('img').eq(20), $('img').eq(28), $('img').eq(36), $('img').eq(44), $('img').eq(52), $('img').eq(60)];
// ======================ROW 5==========================================
let row5 = [$('img').eq(5), $('img').eq(13), $('img').eq(21), $('img').eq(29), $('img').eq(37), $('img').eq(45), $('img').eq(53), $('img').eq(61)];
// ======================ROW 6==========================================
let row6 = [$('img').eq(6), $('img').eq(14), $('img').eq(22), $('img').eq(30), $('img').eq(38), $('img').eq(46), $('img').eq(54), $('img').eq(62)];
// ======================ROW 7==========================================
let row7 = [$('img').eq(7), $('img').eq(15), $('img').eq(23), $('img').eq(31), $('img').eq(39), $('img').eq(47), $('img').eq(55), $('img').eq(63)];
// ======================ROW 8==========================================
let row8 = [$('img').eq(8), $('img').eq(16), $('img').eq(24), $('img').eq(32), $('img').eq(40), $('img').eq(48), $('img').eq(56), $('img').eq(64)];

// ========================FUNCTION FOR IF 3 MATCH=====================
// all are cash:
const allAreCash = (firstIndex) => {
  if (firstIndex.hasClass('cash')) {
    currentCash+= 25;
    // console.log(currentCash);
    $('#amount').text(currentCash)
  }
}
// all are Guitars:
const allAreGuitars = (firstIndex) => {
  if (firstIndex.hasClass('guitar')) {
    // console.log('you have a guitar');
    let image = $('#guitar').children(0)
    // IF YOU ALREADY HAVE A GUITAR SELL FOR 100
    if (image.hasClass('guitar')) {
      // alert('You got another guitar! You only need one, so you can sell this one for $100!')
      // currentCash+=100;
      // $('#amount').text(currentCash)
    }
    else {
    let newImage = $('<img>').addClass('guitar').attr('src', 'images/guitar.jpg');
    $('#guitar').append(newImage);}
}
}
// all are Bass:
const allAreBass = (firstIndex) => {
  if (firstIndex.hasClass('bass')) {
    // console.log('you have a bass');
    let image = $('#bass').children(0)
    if (image.hasClass('bass')) {
      // alert('You got another bass guitar! You only need one, so you can sell this one for $100!')
      // currentCash+=100;
      // $('#amount').text(currentCash)
    }
    else {
    let newImage = $('<img>').addClass('bass').attr('src', 'images/bass-guitar-pic.png');
    $('#bass').append(newImage);}
  }
}
// all are Keys:
const allAreKeys = (firstIndex) => {
  if (firstIndex.hasClass('keys')) {
    // console.log('you have a keyboard');
    let image = $('#keys').children(0)
    if (image.hasClass('keys')) {
      // alert('You got another keyboard! You only need one, so you can sell this one for $100!')
      // currentCash+=100;
      // $('#amount').text(currentCash)
    }
    else {
    let newImage = $('<img>').addClass('keys').attr('src', 'images/keys-icon.png');
    $('#keys').append(newImage);}
  }
}
// all are Mic:
const allAreMic = (firstIndex) => {
  if (firstIndex.hasClass('mic')) {
    // console.log('you have a mic');
    let image = $('#mic').children(0)
    if (image.hasClass('mic')) {
      // alert('You got another mic! You only need one, so you can sell this one for $100!')
      // currentCash+=100;
      // $('#amount').text(currentCash)
    }
    else {
    let newImage = $('<img>').addClass('mic').attr('src', 'images/mic-pic.png');
    $('#mic').append(newImage);}
  }
}
// all are drums:
const allAreDrums = (firstIndex) => {
  if (firstIndex.hasClass('drums')) {
    // console.log('you have a drumset');
    let image = $('#drums').children(0)
    if (image.hasClass('drums')) {
      // alert('You got another drumset! You only need one, so you can sell this one for $100!')
      // currentCash+=100;
      // $('#amount').text(currentCash)
    }
    else {
    let newImage = $('<img>').addClass('drums').attr('src', 'images/drums.jpg');
    $('#drums').append(newImage);}
  }
}

// =====================DECLARE INITIAL CASH====================
let currentCash = 0;
// ============TEST EACH COLUMN AND ROW FOR MATCHES=========================
const checkColumnorRow = (columnOrRow) => {

  // check for columnOrRow[0-2]
  if (columnOrRow[0].attr('class')=== columnOrRow[1].attr('class') && columnOrRow[0].attr('class')=== columnOrRow[2].attr('class')) {
    //
    let firstMatch = columnOrRow[0];
    let secondMatch = columnOrRow[1];
    let thirdMatch = columnOrRow[2];
    // ==============REMOVE THE MATCHING 3======================
    const replaceMatch = () => {
    newRandomIcon();
    // console.log(firstMatch.attr('class'));
    firstMatch.removeClass().addClass(randomIcon.value)
    firstMatch.attr('src', randomIcon.src);
    newRandomIcon();
    secondMatch.removeClass().addClass(randomIcon.value)
    secondMatch.attr('src', randomIcon.src);
    newRandomIcon();
    thirdMatch.removeClass().addClass(randomIcon.value)
    thirdMatch.attr('src', randomIcon.src);
    newRandomIcon();
    setTimeout(CheckAllColumnsAndRows, 3000);
    }
    let stockInventory = () => {
    allAreCash(columnOrRow[0]);
    allAreGuitars(columnOrRow[0]);
    allAreBass(columnOrRow[0]);
    allAreKeys(columnOrRow[0]);
    allAreMic(columnOrRow[0]);
    allAreDrums(columnOrRow[0])
  }
  setTimeout(stockInventory, 2000);
  setTimeout(replaceMatch, 2050);

  }
  // check for column or row index 1-3
  if (columnOrRow[1].attr('class')=== columnOrRow[2].attr('class') && columnOrRow[1].attr('class')=== columnOrRow[3].attr('class')) {
      let firstMatch = columnOrRow[1];
      let secondMatch = columnOrRow[2];
      let thirdMatch = columnOrRow[3];
      const replaceMatch = () => {
      newRandomIcon();
      // console.log(firstMatch.attr('class'));
      firstMatch.removeClass().addClass(randomIcon.value);
      firstMatch.attr('src', randomIcon.src);
      newRandomIcon();
      secondMatch.removeClass().addClass(randomIcon.value);
      secondMatch.attr('src', randomIcon.src);
      newRandomIcon();
      thirdMatch.removeClass().addClass(randomIcon.value);
      thirdMatch.attr('src', randomIcon.src);
      newRandomIcon();
      // console.log(firstMatch.attr('class'));
      // console.log(secondMatch.attr('class'));
      // console.log(thirdMatch.attr('class'));
      setTimeout(CheckAllColumnsAndRows, 3000);
      }
      let stockInventory = () => {
      allAreCash(columnOrRow[1]);
      allAreGuitars(columnOrRow[1]);
      allAreBass(columnOrRow[1]);
      allAreKeys(columnOrRow[1]);
      allAreMic(columnOrRow[1]);
      allAreDrums(columnOrRow[1]);
    }
    setTimeout(stockInventory, 2000);
    setTimeout(replaceMatch, 2050);
    }
    // check for column or row index 2-4
  if (columnOrRow[2].attr('class')=== columnOrRow[3].attr('class') && columnOrRow[2].attr('class')=== columnOrRow[4].attr('class')) {
  let firstMatch = columnOrRow[2];
  let secondMatch = columnOrRow[3];
  let thirdMatch = columnOrRow[4];
  const replaceMatch = () => {
  newRandomIcon();
  // console.log(firstMatch.attr('class'));
  firstMatch.removeClass().addClass(randomIcon.value);
  firstMatch.attr('src', randomIcon.src);
  newRandomIcon();
  secondMatch.removeClass().addClass(randomIcon.value);
  secondMatch.attr('src', randomIcon.src);
  newRandomIcon();
  thirdMatch.removeClass().addClass(randomIcon.value);
  thirdMatch.attr('src', randomIcon.src);
  newRandomIcon();
  // console.log(firstMatch.attr('class'));
  // console.log(secondMatch.attr('class'));
  // console.log(thirdMatch.attr('class'));
  setTimeout(CheckAllColumnsAndRows, 3000);
  }
  let stockInventory = () => {
  allAreCash(columnOrRow[2]);
  allAreGuitars(columnOrRow[2]);
  allAreBass(columnOrRow[2]);
  allAreKeys(columnOrRow[2]);
  allAreMic(columnOrRow[2]);
  allAreDrums(columnOrRow[2]);
}
setTimeout(stockInventory, 2000);
setTimeout(replaceMatch, 2050);
}
 // check for column or row index 3-5
  if (columnOrRow[3].attr('class')=== columnOrRow[4].attr('class') && columnOrRow[3].attr('class')=== columnOrRow[5].attr('class')) {
    let firstMatch = columnOrRow[3];
    let secondMatch = columnOrRow[4];
    let thirdMatch = columnOrRow[5];
    const replaceMatch = () => {
    newRandomIcon();
    // console.log(firstMatch.attr('class'));
    firstMatch.removeClass().addClass(randomIcon.value);
    firstMatch.attr('src', randomIcon.src);
    newRandomIcon();
    secondMatch.removeClass().addClass(randomIcon.value);
    secondMatch.attr('src', randomIcon.src);
    newRandomIcon();
    thirdMatch.removeClass().addClass(randomIcon.value);
    thirdMatch.attr('src', randomIcon.src);
    newRandomIcon();
    // console.log(firstMatch.attr('class'));
    // console.log(secondMatch.attr('class'));
    // console.log(thirdMatch.attr('class'));
    setTimeout(CheckAllColumnsAndRows, 3000);
    }
    let stockInventory = () => {
    allAreCash(columnOrRow[3]);
    allAreGuitars(columnOrRow[3]);
    allAreBass(columnOrRow[3]);
    allAreKeys(columnOrRow[3]);
    allAreMic(columnOrRow[3]);
    allAreDrums(columnOrRow[3]);
  }
  setTimeout(stockInventory, 2000);
  setTimeout(replaceMatch, 2050);
  }
   // check for column or row index 4-6
  if (columnOrRow[4].attr('class')=== columnOrRow[5].attr('class') && columnOrRow[4].attr('class')=== columnOrRow[6].attr('class')) {
    let firstMatch = columnOrRow[4];
    let secondMatch = columnOrRow[5];
    let thirdMatch = columnOrRow[6];
    const replaceMatch = () => {
    newRandomIcon();
    // console.log(firstMatch.attr('class'));
    firstMatch.removeClass().addClass(randomIcon.value);
    firstMatch.attr('src', randomIcon.src);
    newRandomIcon();
    secondMatch.removeClass().addClass(randomIcon.value);
    secondMatch.attr('src', randomIcon.src);
    newRandomIcon();
    thirdMatch.removeClass().addClass(randomIcon.value);
    thirdMatch.attr('src', randomIcon.src);
    newRandomIcon();
    // console.log(firstMatch.attr('class'));
    // console.log(secondMatch.attr('class'));
    // console.log(thirdMatch.attr('class'));
    setTimeout(CheckAllColumnsAndRows, 3000);
    }
    let stockInventory = () => {
    allAreCash(columnOrRow[4]);
    allAreGuitars(columnOrRow[4]);
    allAreBass(columnOrRow[4]);
    allAreKeys(columnOrRow[4]);
    allAreMic(columnOrRow[4]);
    allAreDrums(columnOrRow[4]);
  }
  setTimeout(stockInventory, 2000);
  setTimeout(replaceMatch, 2050);
  }
   // check for column or row index 5-7.
  if (columnOrRow[5].attr('class')=== columnOrRow[6].attr('class') && columnOrRow[5].attr('class')=== columnOrRow[7].attr('class')) {
    let firstMatch = columnOrRow[5];
    let secondMatch = columnOrRow[6];
    let thirdMatch = columnOrRow[7];
    const replaceMatch = () => {
    newRandomIcon();
    // console.log(firstMatch.attr('class'));
    firstMatch.removeClass().addClass(randomIcon.value);
    firstMatch.attr('src', randomIcon.src);
    newRandomIcon();
    secondMatch.removeClass().addClass(randomIcon.value);
    secondMatch.attr('src', randomIcon.src);
    newRandomIcon();
    thirdMatch.removeClass().addClass(randomIcon.value);
    thirdMatch.attr('src', randomIcon.src);
    newRandomIcon();
    // console.log(firstMatch.attr('class'));
    // console.log(secondMatch.attr('class'));
    // console.log(thirdMatch.attr('class'));
    setTimeout(CheckAllColumnsAndRows, 3000);
    }
    let stockInventory = () => {
    allAreCash(columnOrRow[5]);
    allAreGuitars(columnOrRow[5]);
    allAreBass(columnOrRow[5]);
    allAreKeys(columnOrRow[5]);
    allAreMic(columnOrRow[5]);
    allAreDrums(columnOrRow[5]);
  }
  setTimeout(stockInventory, 2000);
  setTimeout(replaceMatch, 2050);
  }
}
// }
// {
//   console.log('this also worked');
// }
CheckAllColumnsAndRows = () => {
  console.log('checking all columns and rows');
  checkForFullInventory();
  checkColumnorRow(column1);
  checkColumnorRow(column2);
  checkColumnorRow(column3);
  checkColumnorRow(column4);
  checkColumnorRow(column5);
  checkColumnorRow(column6);
  checkColumnorRow(column7);
  checkColumnorRow(column8);
  checkColumnorRow(row1);
  checkColumnorRow(row2);
  checkColumnorRow(row3);
  checkColumnorRow(row4);
  checkColumnorRow(row5);
  checkColumnorRow(row6);
  checkColumnorRow(row7);
  checkColumnorRow(row8);
}


// FUNCTION FOR CALCULATING NEIGHBOR OF EACH IMG/VAL:
const makeNeighborsClickable = () => {
  // call other function on every row and column
  checkSingleArrayForNeighbors(column1);
  checkSingleArrayForNeighbors(column2);
  checkSingleArrayForNeighbors(column3);
  checkSingleArrayForNeighbors(column4);
  checkSingleArrayForNeighbors(column5);
  checkSingleArrayForNeighbors(column6);
  checkSingleArrayForNeighbors(column7);
  checkSingleArrayForNeighbors(column8);
  checkSingleArrayForNeighbors(row1);
  checkSingleArrayForNeighbors(row2);
  checkSingleArrayForNeighbors(row3);
  checkSingleArrayForNeighbors(row4);
  checkSingleArrayForNeighbors(row5);
  checkSingleArrayForNeighbors(row6);
  checkSingleArrayForNeighbors(row7);
  checkSingleArrayForNeighbors(row8);
}

// make function for checking single column or row for neighbors:

const checkSingleArrayForNeighbors = (array) => {
  // use for loop to call our each img in array
  for (item of array) {
    // console.log(array);
    // find index of item in array, in order to identify neighbors
      let itemIndex = array.indexOf(item);
      // when you click on a specific image in grid:
      // const limitClickOnItems = () => {
    $(item).on('click', (event) => {
      // console.log(itemIndex);
      // find class and source of current image:
      let $current, $upOne, $downOne;
      let downOne = array[itemIndex +1];
      $current = $(event.currentTarget);
      // if ($current.attr('class') !== 'boss' && $current.attr('class') !== 'bandmate') {
      //   $current.addClass('click-border-red');}
      let upOne = array[itemIndex -1];
      let currentClass = $current.attr('class');
      let currentSrc = $current.attr('src');
      console.log(currentClass);
      console.log(currentSrc);
        // debugger;
      // find image right after current image:
      // let downOne = array[itemIndex +1]
      // console.log(downOne);
        // debugger;
      // when you've clicked on first image, and then click on next image:
      // but not if it's bandmate or boss
      if ($(downOne).attr('class') === 'boss' || $(downOne).attr('class') === 'bandmate' || $current.attr('class') === 'boss' || $current.attr('class') === 'bandmate') { console.log('this is a boss or bandmate');
      }
      else {
      $(downOne).off('click');
      $(downOne).on('click', ()=> {
        // $current.removeClass('click-border-red');
        // if ($(downOne).attr('class') !== 'boss' && $(downOne).attr('class') !== 'bandmate') {
        //   $(downOne).addClass('click-border-blue');}
        // console.log('this is working');
        // find class and source of next image:
        // $downOne = $(event.currentTarget);
        let downOneClass = $(downOne).attr('class');
        let downOneSrc = $(downOne).attr('src');
        console.log(downOneClass);
        console.log(downOneSrc);
          // debugger;
        // remove downOnes class and image
        $(downOne).removeClass();
        $(downOne).removeAttr('src');
          // debugger;
        // give DownOne the image and src of class of current
        $(downOne).addClass(currentClass);
        $(downOne).attr('src', currentSrc);
          // debugger;
          let newDownOneClass = $(downOne).attr('class');
          let newDownOneSrc = $(downOne).attr('src');
        console.log(newDownOneClass);
        console.log(newDownOneSrc);
          // debugger;
        // remove current class and image
        $current.removeClass();
        $current.removeAttr('src');
          // debugger;
        // give current the image and src of next
        $current.addClass(downOneClass);
        $current.attr('src', downOneSrc);
          // debugger;
        // $(downOne).off('click');
        // $(upOne).off('click');
        CheckAllColumnsAndRows();
          // debugger;
      })
      }
      // let upOne = array[itemIndex -1];
      if ($(upOne).attr('class') === 'boss' || $(upOne).attr('class') === 'bandmate' || $current.attr('class') === 'boss' || $current.attr('class') === 'bandmate')
      { console.log('this is a boss or bandmate');
      }
      else {
      $(upOne).off('click');
      $(upOne).on('click', ()=> {
        // $current.removeClass('click-border-red');
        // if ($(upOne).attr('class') !== 'boss' && $(upOne).attr('class') !== 'bandmate') {
        //   $(upOne).addClass('click-border-green');
        // }
        // let upOne = event.currentTarget;
        // console.log('this also works'+ upOne);
        // find class and source of image right before current:
        // $upOne = $(event.currentTarget);
        let upOneClass = $(upOne).attr('class');
        let upOneSrc = $(upOne).attr('src');
        console.log(upOneClass);
        console.log(upOneSrc);
          // debugger;
        // remove class and src of upOne
        $(upOne).removeClass();
        $(upOne).removeAttr('src');
          // debugger;
        // give upOne the image and src of class of current
        $(upOne).addClass(currentClass);
        $(upOne).attr('src', currentSrc);
      //   upOneClass = $(upOne).attr('class');
      // upOneSrc = $(upOne).attr('src');
      //   console.log(upOneClass);
      //   console.log(upOneSrc);
          // debugger;
          let newUpOneClass = $(upOne).attr('class');
          let newUpOneSrc = $(upOne).attr('src');
          console.log(newUpOneClass);
          console.log(newUpOneSrc);
        // debugger;
        // remove current class and image
        $current.removeClass();
        $current.removeAttr('src');
          // debugger;
        // give current the image and src of next
        $current.addClass(upOneClass);
        $current.attr('src', upOneSrc);
        let newCurrentClass = $current.attr('class');
        let newCurrentSrc = $current.attr('src');
        console.log(newCurrentClass);
        console.log(newCurrentSrc);
          // debugger;
        // $(upOne).off('click');
        // $(downOne).off('click');
          // debugger;
          // $(upOne).off('click');
        CheckAllColumnsAndRows();
      })
    }
    // CheckAllColumnsAndRows();
  })
  }

  // limitClickOnItems(item);
  // limitClickOnItems(item);
  // limitClickOnItems(item);
  // limitClickOnItems(item);
  // limitClickOnItems(item);
  // limitClickOnItems(item);
  // limitClickOnItems(item);
  // limitClickOnItems(item);
  // }
}
const clearInventory = () => {
  let guitarImage = $('#guitar').children(0);
  let keysImage = $('#keys').children(0);
  let drumsImage = $('#drums').children(0);
  let micImage = $('#mic').children(0);
  let bassImage = $('#bass').children(0);
  $(guitarImage).remove();
  $(keysImage).remove();
  $(drumsImage).remove();
  $(micImage).remove();
  $(bassImage).remove();
  currentCash = 0;
  $('#amount').text(currentCash);
}
// =======================RELOAD GRID FOR NEW PLAYER FUNCTION========
const reloadGridAndInventory = () => {
  $('img').removeClass();
  $('img').removeAttr('src');
  assignRandomIconAndClass();
  clearInventory();
}

const restartGame = () => {
  seconds = 0;
  minutes = 0;
  // $('.player-time').text('');
  reloadGridAndInventory();
  makeNeighborsClickable();
  console.log('restart game function called');
  setTimeout(CheckAllColumnsAndRows, 3000);
}


// ==============================WIN FUNCTION ===========================
let player1Minutes = 0;
let player1Seconds = 0;
let player2Minutes = 0;
let player2Seconds = 0;

const $modal3 = $('#modal3');
const openModal3 = () => {
    $modal3.show('slow');
}
const winnerFunction = () => {
  minutes = 0;
  seconds = 0;
  if (player1Minutes < player2Minutes) {
    console.log('player one wins');
    $('#modal3Text').text('Player one Wins! Great job, enjoy your fame and fortune. Want to try again?')
  }
  else if (player1Minutes > player2Minutes) {
    console.log('player two wins');
    $('#modal3Text').text('Player two Wins!Great job, enjoy your fame and fortune. Want to try again?')
  }
  else if (player1Minutes === player2Minutes) {
    if (player1Seconds < player2Seconds) {
      console.log('player one wins');
      $('#modal3Text').text('Player one Wins!Great job, enjoy your fame and fortune. Want to try again?')
    }
    else if (player1Seconds > player2Seconds) {
      console.log('player two wins');
      $('#modal3Text').text('Player two Wins!Great job, enjoy your fame and fortune. Want to try again?')
    }
    else if (player1Seconds === player2Seconds) {
      console.log('it is a tie');
      $('#modal3Text').text('It is a tie! Want to try again?')
    }
  };
openModal3();
// $('.player-time').eq(0).text('');
// $('.player-time').eq(1).text('');
}

const checkForFullInventory = () => {
  let guitarInventory = $('#guitar').children(0);
  let micInventory = $('#mic').children(0);
  let keysInventory = $('#keys').children(0);
  let bassInventory = $('#bass').children(0);
  let drumsInventory = $('#drums').children(0);
  if (guitarInventory.hasClass('guitar') && micInventory.hasClass('mic') && keysInventory.hasClass('keys') && bassInventory.hasClass('bass') && drumsInventory.hasClass('drums') && currentCash >= 100) {
    let player1Time = $('.player-time').eq(0);
    let player2Time = $('.player-time').eq(1);
    if ($(player1Time).text()=== '') {
      // log player one seconds and minutes into variable for comparison
      player1Minutes = minutes;
      player1Seconds = seconds;
      // console.log(player1Minutes, player1Seconds);
    $(player1Time).text(minutes + ':' + seconds);
    // seconds = 0;
    // minutes = 0;
    $(secondsInfo).text(seconds);
    $(minutesInfo).text(minutes);
    restartGame();
    // reloadGridAndInventory();
    // startGame();
    // CheckAllColumnsAndRows();
    // setTimeout(CheckAllColumnsAndRows, 3000);
  }
  else {
    $(player2Time).text(minutes + ':' + seconds);
    // log player two seconds and minutes into variable for comparison
    player2Minutes = minutes;
    player2Seconds = seconds;
    // console.log(player2Minutes, player2Seconds);
    // console.log(player1Minutes, player1Seconds);
    winnerFunction();
  }
  }
}
const resetPage = () => {
  $('#modal3').hide('slow');
  minutes = 0;
  seconds = 0;
  player1Minutes = 0;
  player1Seconds = 0;
  player2Minutes = 0;
  player2Seconds = 0;
  $('.player-time').eq(0).text('');
  $('.player-time').eq(1).text('');
  // setTimeout(CheckAllColumnsAndRows, 3000);
  // setTimeout(startTimer, 3000);
  restartGame();
  openModal();

}

// MODAL Functions:
// Code to move input box values into player 1 and player 2 divs:
const clickSubmit = () => {
const $inputBox1 = $('#input-box');
const $inputBox2 = $('#input-box2');
const $playerOneName = $inputBox1.val();
const $playerTwoName = $inputBox2.val();
$('#player1').text($playerOneName);
$('#player2').text($playerTwoName);
closeModal1();
}


// Modal itself:
const $modal = $('#modal1');
const $modal2 = $('#modal2');
  const $closeBtn1 = $('#submit-btn');
  const $closeBtn2 = $('#submit-btn2');
  // event handlers
  const openModal = () => {
    $modal.show('slow');
  }
  const openModal2 = () => {
    $modal2.show('slow');
    // $closeBtn2.on('click', openGame)
  }
  const closeModal1 = () => {
    $modal.hide('slow');
    openModal2();
  }
  const closeModal2 = () => {
    $modal2.hide('slow');
    setTimeout(CheckAllColumnsAndRows, 3000);
    setTimeout(startTimer, 3000);

  }

    // include function CheckAllColumnsAndRows to start game, after 5 seconds:
      // setTimeout(CheckAllColumnsAndRows, 3000);
      // setTimeout(startTimer, 3000);
  // }
  // event listener for click on submit button
  $closeBtn1.on('click', clickSubmit);
  $('#playButton').on('click', closeModal2);
  $('#playAgainButton').on('click', resetPage);
  // close Modal


// ==================================Timer=================================

let seconds = 0;
let minutes = 0;
let secondsInfo = $('#p1TimerSeconds');
let minutesInfo = $('#p1TimerMinutes');
$(secondsInfo).text(seconds);
$(minutesInfo).text(minutes);
let addSeconds = () => {
// console.log(secondsInfo);
seconds++;
$(secondsInfo).text(seconds);
addMinutes();
}
let addMinutes = () => {
if (seconds === 60) {
  minutes++
  seconds = 0;
  $(minutesInfo).text(minutes)
}
}
// ============================Timer Function==============================
const startTimer = () => {
window.setInterval(addSeconds, 1000);
}

// ============================Start Game Flow===============================
// openModal();
// put Check for Full Inventory at beginning of CheckAllColumnsAndRows
const startGame = () => {
openModal();
assignRandomIconAndClass();
makeNeighborsClickable();}
startGame();
// CheckAllColumnsAndRows();
// --- onlye need this when modal is inactive

// call makeNeighborsClickable - where?

})
