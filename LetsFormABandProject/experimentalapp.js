$(()=> {

  let isTimer = false;
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
assignRandomIconAndClass();
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




// FUNCTION FOR CALCULATING NEIGHBOR OF EACH IMG/VAL:
// const makeNeighborsClickable = () => {
//   // call other function on every row and column
//   checkSingleArrayForNeighbors(column1);
//   checkSingleArrayForNeighbors(column2);
//   checkSingleArrayForNeighbors(column3);
//   checkSingleArrayForNeighbors(column4);
//   checkSingleArrayForNeighbors(column5);
//   checkSingleArrayForNeighbors(column6);
//   checkSingleArrayForNeighbors(column7);
//   checkSingleArrayForNeighbors(column8);
//   checkSingleArrayForNeighbors(row1);
//   checkSingleArrayForNeighbors(row2);
//   checkSingleArrayForNeighbors(row3);
//   checkSingleArrayForNeighbors(row4);
//   checkSingleArrayForNeighbors(row5);
//   checkSingleArrayForNeighbors(row6);
//   checkSingleArrayForNeighbors(row7);
//   checkSingleArrayForNeighbors(row8);
// }

// make function for checking single column or row for neighbors:
let columnArray = [column1, column2, column3, column4, column5, column6, column7, column8];

const checkSingleColumnforNeighbors = (columnarray) => {
  // call out individual columns:
  for (column of columnarray) {
// find which column it is, index 0-7
    const columnIndex = columnarray.indexOf(column);
    // find column right before it in columnarray
    let columnBefore = columnarray[columnIndex-1];
    // console.log(columnBefore);
    let columnAfter = columnarray[columnIndex+1];
    // console.log(columnAfter);
    // console.log(columnIndex);
    // call out individual images in columns:
    for (image of column) {
      // find index of image in column
      let imageIndex = column.indexOf(image);
      // find previous image in column
      let previousImage = column[imageIndex - 1];
      // find next image in column
      let nextImage = column[imageIndex + 1];
      // Find image with same index but in previous column:
      if (columnBefore) {
        console.log(columnBefore);
      let previousColumnImage = columnBefore[imageIndex];
    }
      // console.log(previousColumnImage);}
      // find image with same index but in next column:
      if (columnAfter) {
      let nextColumnImage = columnAfter[imageIndex];
      // console.log(nextColumnImage);
    }

      // console.log(previousImage);
      // console.log(nextImage);
      // console.log(imageIndex);
      // debugger;
      // let $current;
      let $current;
      $(image).on('click', (event) => {
        console.log(imageIndex);
        // console.log($(nextColumnImage).attr('class'));
        $current = $(event.currentTarget);
        // console.log($current);
        // debugger;
        let currentClass = $current.attr('class');
        let currentSrc = $current.attr('src');
        // console.log(currentClass);
        // console.log(currentSrc);
        // debugger;
        if ($(nextImage).attr('class') === 'boss' || $(nextImage).attr('class') === 'bandmate' || $current.attr('class') === 'boss' || $current.attr('class') === 'bandmate') { console.log('this is a boss or bandmate');
        }
        else {
        $(nextImage).off('click');
        $(nextImage).on('click', ()=> {
          // console.log(nextImage);
          let nextImageClass = $(nextImage).attr('class');
          let nextImageSrc = $(nextImage).attr('src');
          // console.log(nextColumnClass);
          // console.log(nextColumnSrc);
          // debugger;
          $(nextImage).removeClass();
          $(nextImage).removeAttr('src');
            // debugger;
          // give DownOne the image and src of class of current
          $(nextImage).addClass(currentClass);
          $(nextImage).attr('src', currentSrc);
          // debugger;
          let newnextImageClass = $(nextImage).attr('class');
          let newnextImageSrc = $(nextImage).attr('src');
        // console.log(newnextImageClass);
        // console.log(newnextImageSrc);
          // debugger;
        // remove current class and image
        $current.removeClass();
        $current.removeAttr('src');
        $current.addClass(nextImageClass);
        $current.attr('src', nextImageSrc);
        // console.log($current.attr('class'));
        // console.log($current.attr('src'));
        // CheckAllColumnsAndRows();
        })
          }
        if ($(previousImage).attr('class') === 'boss' || $(previousImage).attr('class') === 'bandmate' || $current.attr('class') === 'boss' || $current.attr('class') === 'bandmate')
        { console.log('this is a boss or bandmate');
        }
        else {
        $(previousImage).off('click');
        $(previousImage).on('click', ()=> {
          // console.log(previousImage);
          let previousImageClass = $(previousImage).attr('class');
          let previousImageSrc = $(previousImage).attr('src');
          // console.log(previousColumnClass);
          // console.log(previousColumnSrc);
          // debugger;
          $(previousImage).removeClass();
          $(previousImage).removeAttr('src');
            // debugger;
          // give DownOne the image and src of class of current
          $(previousImage).addClass(currentClass);
          $(previousImage).attr('src', currentSrc);
          // debugger;
          let newPreviousImageClass = $(previousImage).attr('class');
          let newPreviousImageSrc = $(previousImage).attr('src');
        // console.log(newpreviousImageClass);
        // console.log(newpreviousImageSrc);
          // debugger;
        // remove current class and image
        $current.removeClass();
        $current.removeAttr('src');
        $current.addClass(previousImageClass);
        $current.attr('src', previousImageSrc);
        // console.log($current.attr('class'));
        // console.log($current.attr('src'));
        // CheckAllColumnsAndRows();
        })
        }
        if ($(nextColumnImage).attr('class') === 'boss' || $(nextColumnImage).attr('class') === 'bandmate' || $current.attr('class') === 'boss' || $current.attr('class') === 'bandmate')
        { console.log('this is a boss or bandmate');
        }
        else {
        $(nextColumnImage).off('click');
        $(nextColumnImage).on('click', ()=> {
          // console.log(previousImage);
          let nextColumnImageClass = $(nextColumnImage).attr('class');
          let nextColumnImageSrc = $(nextColumnImage).attr('src');
          // console.log(previousColumnClass);
          // console.log(previousColumnSrc);
          // debugger;
          $(nextColumnImage).removeClass();
          $(nextColumnImage).removeAttr('src');
            // debugger;
          // give DownOne the image and src of class of current
          $(nextColumnImage).addClass(currentClass);
          $(nextColumnImage).attr('src', currentSrc);
          // debugger;
          let newNextColumnImageClass = $(nextColumnImage).attr('class');
          let newNextColumnImageSrc = $(nextColumnImage).attr('src');
        // console.log(newpreviousImageClass);
        // console.log(newpreviousImageSrc);
          // debugger;
        // remove current class and image
        $current.removeClass();
        $current.removeAttr('src');
        $current.addClass(nextColumnImageClass);
        $current.attr('src', nextColumnImageSrc);
        // console.log($current.attr('class'));
        // console.log($current.attr('src'));
        // CheckAllColumnsAndRows();
        })}

    })

    }
  }
}
// call the function on column array:
checkSingleColumnforNeighbors(columnArray);



})
