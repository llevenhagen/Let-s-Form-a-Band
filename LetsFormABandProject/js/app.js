$(()=> {
  // make icon array representing both src and value (to match later)
const icons = [
{src: 'images/bass-guitar-pic.png', value: 'bass'},
{src: 'images/guitar.jpg', value: 'guitar'},
{src: 'images/keys-icon.png', value: 'keys'},
{src: 'images/mic-pic.png', value: 'mic'},
{src: 'images/drums.jpg', value: 'drums'},
{src: 'images/cash_pic.jpg', value: 'cash'},
{src: 'images/cash_pic.jpg', value: 'cash'},
{src: 'images/cash_pic.jpg', value: 'cash'},
{src: 'images/cash_pic.jpg', value: 'cash'},
{src: 'images/lazybandmate.png', value: 'bandmate'},
{src: 'images/demanding-boss.jpg', value: 'boss'},
{src: 'images/lazybandmate.png', value: 'bandmate'},
{src: 'images/demanding-boss.jpg', value: 'boss'}
];
// loop randomly through array to populate grid with images paired with class.
let randomIcon = icons[Math.floor(Math.random()*icons.length)];
const newRandomIcon = () => {
  randomIcon = icons[Math.floor(Math.random()*icons.length)];
};
// console.log(randomIcon);
// add image tag to each square
$('.square').append('<img>');
// assign random image paired with class to <img> tags
const assignRandomIconAndClass = () => {
for (i =0; i<64; i++) {
  let $single = $('img').eq(i);
  // console.log($single);
   $single.addClass(randomIcon.value);
   $single.attr('src', randomIcon.src);
   newRandomIcon();
}}
assignRandomIconAndClass();
// console.log($(column1[7]).hasClass('cash'));
// assign id to each square CHECK
// =============MAKE ARRAY FOR EACH COLUMN AND ROW:============
// ======================COLUMNS:
// ==================COLUMN 1==================================
const column1 = [$('img').eq(0), $('img').eq(1), $('img').eq(2), $('img').eq(3), $('img').eq(4), $('img').eq(5), $('img').eq(6), $('img').eq(7)];
// ====================COLUMN 2===============================
const column2 = [$('img').eq(8), $('img').eq(9), $('img').eq(10), $('img').eq(11), $('img').eq(12), $('img').eq(13), $('img').eq(14), $('img').eq(15)];
// ===================COLUMN 3===============================
const column3 = [$('img').eq(16), $('img').eq(17), $('img').eq(18), $('img').eq(19), $('img').eq(20), $('img').eq(21), $('img').eq(22), $('img').eq(23)];
// ==================Column 4================================
const column4 = [$('img').eq(24), $('img').eq(25), $('img').eq(26), $('img').eq(27), $('img').eq(28), $('img').eq(29), $('img').eq(30), $('img').eq(31)];
// ==================Column 5================================
const column5 = [$('img').eq(32), $('img').eq(33), $('img').eq(34), $('img').eq(35), $('img').eq(36), $('img').eq(37), $('img').eq(38), $('img').eq(39)];
// ====================COLUMN 6=================================
const column6 = [$('img').eq(40), $('img').eq(41), $('img').eq(42), $('img').eq(43), $('img').eq(44), $('img').eq(45), $('img').eq(46), $('img').eq(47)];
// =======================Column 7=============================
const column7 = [$('img').eq(48), $('img').eq(49), $('img').eq(50), $('img').eq(51), $('img').eq(52), $('img').eq(53), $('img').eq(54), $('img').eq(55)];
// ====================COLUMN 8==============================
const column8 = [$('img').eq(56), $('img').eq(57), $('img').eq(58), $('img').eq(59), $('img').eq(60), $('img').eq(61), $('img').eq(62), $('img').eq(63)];
// ====================ROWS:===================================
// ======================ROW 1==========================================
const row1 = [$('img').eq(0), $('img').eq(9), $('img').eq(17), $('img').eq(25), $('img').eq(33), $('img').eq(41), $('img').eq(49), $('img').eq(57)];
// ======================ROW 2==========================================
const row2 = [$('img').eq(2), $('img').eq(10), $('img').eq(18), $('img').eq(26), $('img').eq(34), $('img').eq(42), $('img').eq(50), $('img').eq(58)];
// // ======================ROW 3==========================================
const row3 = [$('img').eq(3), $('img').eq(11), $('img').eq(19), $('img').eq(27), $('img').eq(35), $('img').eq(43), $('img').eq(51), $('img').eq(59)];
// ======================ROW 4==========================================
const row4 = [$('img').eq(4), $('img').eq(12), $('img').eq(20), $('img').eq(28), $('img').eq(36), $('img').eq(44), $('img').eq(52), $('img').eq(60)];
// ======================ROW 5==========================================
const row5 = [$('img').eq(5), $('img').eq(13), $('img').eq(21), $('img').eq(29), $('img').eq(37), $('img').eq(45), $('img').eq(53), $('img').eq(61)];
// ======================ROW 6==========================================
const row6 = [$('img').eq(6), $('img').eq(14), $('img').eq(22), $('img').eq(30), $('img').eq(38), $('img').eq(46), $('img').eq(54), $('img').eq(62)];
// ======================ROW 7==========================================
const row7 = [$('img').eq(7), $('img').eq(15), $('img').eq(23), $('img').eq(31), $('img').eq(39), $('img').eq(47), $('img').eq(55), $('img').eq(63)];
// ======================ROW 8==========================================
const row8 = [$('img').eq(8), $('img').eq(16), $('img').eq(24), $('img').eq(32), $('img').eq(40), $('img').eq(48), $('img').eq(56), $('img').eq(64)];

// ========================IF 3 MATCH======================
// all are cash:
const allAreCash = (firstIndex) => {
  if (firstIndex.hasClass('cash')) {
    currentCash+= 50;
    // console.log(currentCash);
    $('#amount').text(currentCash)
  }
}
// all are Guitars:
const allAreGuitars = (firstIndex) => {
  if (firstIndex.hasClass('guitar')) {
    console.log('you have a guitar');
    let image = $('#guitar').children(0)
    if (image.hasClass('guitar')) {
      alert('You got another guitar! You only need one, so you can sell this one for $100!')
      currentCash+=100;
    }
    else {
    let newImage = $('<img>').addClass('guitar').attr('src', 'images/guitar.jpg');
    $('#guitar').append(newImage);}
}
}
// all are Bass:
const allAreBass = (firstIndex) => {
  if (firstIndex.hasClass('bass')) {
    console.log('you have a bass');
    let image = $('#bass').children(0)
    if (image.hasClass('bass')) {
      alert('You got another bass guitar! You only need one, so you can sell this one for $100!')
      currentCash+=100;
    }
    else {
    let newImage = $('<img>').addClass('bass').attr('src', 'images/bass-guitar-pic.png');
    $('#bass').append(newImage);}
  }
}
// all are Keys:
const allAreKeys = (firstIndex) => {
  if (firstIndex.hasClass('keys')) {
    console.log('you have a keyboard');
    let image = $('#keys').children(0)
    if (image.hasClass('keys')) {
      alert('You got another keyboard! You only need one, so you can sell this one for $100!')
      currentCash+=100;
    }
    else {
    let newImage = $('<img>').addClass('keys').attr('src', 'images/keys-icon.png');
    $('#keys').append(newImage);}
  }
}
// all are Mic:
const allAreMic = (firstIndex) => {
  if (firstIndex.hasClass('mic')) {
    console.log('you have a mic');
    let image = $('#mic').children(0)
    if (image.hasClass('mic')) {
      alert('You got another mic! You only need one, so you can sell this one for $100!')
      currentCash+=100;
    }
    else {
    let newImage = $('<img>').addClass('mic').attr('src', 'images/mic-pic.png');
    $('#mic').append(newImage);}
  }
}
// all are drums:
const allAreDrums = (firstIndex) => {
  if (firstIndex.hasClass('drums')) {
    console.log('you have a drumset');
    let image = $('#drums').children(0)
    if (image.hasClass('drums')) {
      alert('You got another drumset! You only need one, so you can sell this one for $100!')
      currentCash+=100;
    }
    else {
    let newImage = $('<img>').addClass('drums').attr('src', 'images/drums.jpg');
    $('#drums').append(newImage);}
  }
}

// =====================DECLARE INITIALCASH====================
let currentCash = 0;
// ============TEST EACH COLUMN AND ROW FOR MATCHES=========================
const checkColumnorRow = (columnOrRow) => {
// for (i=0; i<) {
  // check for columnOrRow[0-2]
  if (columnOrRow[0].attr('class')=== columnOrRow[1].attr('class') && columnOrRow[0].attr('class')=== columnOrRow[2].attr('class')) {
    //
    let firstMatch = columnOrRow[0];
    let secondMatch = columnOrRow[1];
    let thirdMatch = columnOrRow[2];
    allAreCash(columnOrRow[0]);
    allAreGuitars(columnOrRow[0]);
    allAreBass(columnOrRow[0]);
    allAreKeys(columnOrRow[0]);
    allAreMic(columnOrRow[0]);
    allAreDrums(columnOrRow[0])
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
    window.setTimeout(CheckAllColumnsAndRows, 2000);
    }
    window.setTimeout(replaceMatch, 3000);
  }
  if (columnOrRow[1].attr('class')=== columnOrRow[2].attr('class') && columnOrRow[1].attr('class')=== columnOrRow[3].attr('class')) {
      allAreCash(columnOrRow[1]);
      allAreGuitars(columnOrRow[1]);
      allAreBass(columnOrRow[1]);
      allAreKeys(columnOrRow[1]);
      allAreMic(columnOrRow[1]);
      allAreDrums(columnOrRow[1]);
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
      window.setTimeout(CheckAllColumnsAndRows, 2000);
      }
      window.setTimeout(replaceMatch, 3000);
    }
  if (columnOrRow[2].attr('class')=== columnOrRow[3].attr('class') && columnOrRow[2].attr('class')=== columnOrRow[4].attr('class')) {
  allAreCash(columnOrRow[2]);
  allAreGuitars(columnOrRow[2]);
  allAreBass(columnOrRow[2]);
  allAreKeys(columnOrRow[2]);
  allAreMic(columnOrRow[2]);
  allAreDrums(columnOrRow[2]);
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
  window.setTimeout(CheckAllColumnsAndRows, 2000);
  }
  window.setTimeout(replaceMatch, 3000);
}
  if (columnOrRow[3].attr('class')=== columnOrRow[4].attr('class') && columnOrRow[3].attr('class')=== columnOrRow[5].attr('class')) {
    allAreCash(columnOrRow[3]);
    allAreGuitars(columnOrRow[3]);
    allAreBass(columnOrRow[3]);
    allAreKeys(columnOrRow[3]);
    allAreMic(columnOrRow[3]);
    allAreDrums(columnOrRow[3]);
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
    window.setTimeout(CheckAllColumnsAndRows, 2000);
    }
    window.setTimeout(replaceMatch, 3000);
  }
  if (columnOrRow[4].attr('class')=== columnOrRow[5].attr('class') && columnOrRow[4].attr('class')=== columnOrRow[6].attr('class')) {
    allAreCash(columnOrRow[4]);
    allAreGuitars(columnOrRow[4]);
    allAreBass(columnOrRow[4]);
    allAreKeys(columnOrRow[4]);
    allAreMic(columnOrRow[4]);
    allAreDrums(columnOrRow[4]);
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
    window.setTimeout(CheckAllColumnsAndRows, 2000);
    }
    window.setTimeout(replaceMatch, 3000);
  }
  if (columnOrRow[5].attr('class')=== columnOrRow[6].attr('class') && columnOrRow[5].attr('class')=== columnOrRow[7].attr('class')) {
    allAreCash(columnOrRow[5]);
    allAreGuitars(columnOrRow[5]);
    allAreBass(columnOrRow[5]);
    allAreKeys(columnOrRow[5]);
    allAreMic(columnOrRow[5]);
    allAreDrums(columnOrRow[5]);
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
    window.setTimeout(CheckAllColumnsAndRows, 2000);
    }
    window.setTimeout(replaceMatch, 3000);
  }
}
// }
// {
//   console.log('this also worked');
// }
CheckAllColumnsAndRows = () => {
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

// CheckAllColumnsAndRows();



// Open MODAL

const $modal = $('#modal');
  const $closeBtn = $('#submit-btn');
  // event handlers
  const openModal = () => {
    $modal.show('slow');
  }
  const closeModal = () => {
    $modal.hide('slow');
      window.setTimeout(CheckAllColumnsAndRows, 5000);
  }
  // event listeners
  $closeBtn.on('click', closeModal);
  // close Modal
  openModal();


// assignRandomIconAndClass();
// console.log($(column1[7]).hasClass('cash'));
})
