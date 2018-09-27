$(() => {

  // console.log('this is WORKING');
  // make icon array representing both src and value (to match later)
  const icons = [{
      src: 'images/bass-guitar-pic.png',
      value: 'bass'
    },
    {
      src: 'images/guitar.jpg',
      value: 'guitar'
    },
    {
      src: 'images/keys-icon.png',
      value: 'keys'
    },
    {
      src: 'images/mic-pic.png',
      value: 'mic'
    },
    {
      src: 'images/drums.jpg',
      value: 'drums'
    },
    {
      src: 'images/bass-guitar-pic.png',
      value: 'bass'
    },
    {
      src: 'images/guitar.jpg',
      value: 'guitar'
    },
    {
      src: 'images/keys-icon.png',
      value: 'keys'
    },
    {
      src: 'images/mic-pic.png',
      value: 'mic'
    },
    {
      src: 'images/drums.jpg',
      value: 'drums'
    },

    {
      src: 'images/bass-guitar-pic.png',
      value: 'bass'
    },
    {
      src: 'images/guitar.jpg',
      value: 'guitar'
    },
    {
      src: 'images/keys-icon.png',
      value: 'keys'
    },
    {
      src: 'images/mic-pic.png',
      value: 'mic'
    },
    {
      src: 'images/drums.jpg',
      value: 'drums'
    },
    {
      src: 'images/bass-guitar-pic.png',
      value: 'bass'
    },
    {
      src: 'images/guitar.jpg',
      value: 'guitar'
    },
    {
      src: 'images/keys-icon.png',
      value: 'keys'
    },
    {
      src: 'images/mic-pic.png',
      value: 'mic'
    },
    {
      src: 'images/drums.jpg',
      value: 'drums'
    },
    {
      src: 'images/cash_pic.jpg',
      value: 'cash'
    },
    {
      src: 'images/cash_pic.jpg',
      value: 'cash'
    },
    {
      src: 'images/cash_pic.jpg',
      value: 'cash'
    },
    {
      src: 'images/cash_pic.jpg',
      value: 'cash'
    },
    {
      src: 'images/cash_pic.jpg',
      value: 'cash'
    },
    {
      src: 'images/cash_pic.jpg',
      value: 'cash'
    },
    {
      src: 'images/cash_pic.jpg',
      value: 'cash'
    },
    {
      src: 'images/cash_pic.jpg',
      value: 'cash'
    },
    {
      src: 'images/lazybandmate.png',
      value: 'bandmate'
    },
    {
      src: 'images/lazybandmate.png',
      value: 'bandmate'
    },
    {
      src: 'images/demanding-boss.jpg',
      value: 'boss'
    }
  ];
  // loop randomly through array to populate grid with images paired with class.
  // let randomIcon = icons[Math.floor(Math.random()*icons.length)];
  let randomIcon = icons[Math.floor(Math.random() * icons.length)];
  const newRandomIcon = () => {
    randomIcon = icons[Math.floor(Math.random() * icons.length)];
  };
  // console.log(randomIcon);

  // add image tag to each square
  $('.square').append('<img>');

  // function to assign random image paired with class to <img> tags
  const assignRandomIconAndClass = () => {
    for (i = 0; i < 64; i++) {
      let $single = $('img').eq(i);
      // console.log($single);
      $single.addClass(randomIcon.value);
      $single.attr('src', randomIcon.src);
      newRandomIcon();
    }
  }
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



  // make function for checking single column or row for neighbors:
  let columnArray = [column1, column2, column3, column4, column5, column6, column7, column8];

  let $elementWithSwap = document.getElementsByClassName('image-swap');
  let $elementWithNext = document.getElementsByClassName('next-image');
  // console.log($elementWithSwap.length);
  // console.log($elementWithNext.length);

  $elementWithSwap = $('.image-swap');
  $elementWithNext = $('.next-image');
  // console.log($elementWithSwap.length);
  // console.log($elementWithNext.length);
  // debugger;
  // let $current;
  // console.log('this is working');

  // if (elementWithSwap.length === 0 && elementWithNext.length === 0) {
  let $current;
  let $right;
  let currentItemClass;
  let currentItemSrc;
  let $rightImageClass;
  let $rightImageSrc;
  let $newCurrentImageClass;
  let $newCurrentImageSrc;
  let $newrightImageClass;
  let $newrightImageSrc;
  let $imgParent;
  let $parentId;
  let $parentIdNumber;
  let $rightParent;
  let $rightImg;
  let $leftParent;
  let $leftImg;
  let $topParent;
  let $topImg;
  let $bottomParent;
  let $bottomImg;

  $('img').on('click', (event) => {
    if ($elementWithSwap.length === 0 && $elementWithNext.length === 0) {
      $current = $(event.currentTarget);
      $imgParent = $(event.currentTarget).parent();
      // console.log($imgParent);
      $parentId = $imgParent.attr('id');
      $parentIdNumber = Number($parentId);
      // console.log($parentIdNumber);
      // find ID of square to the right, ID + 8
      $rightParent = $('.square').eq($parentIdNumber + 8);
      // console.log($rightParent);
      // find image assigned to Right Square, for right image:
      $rightImg = $($rightParent).children(0);
      $rightImg.attr('id', 'right')
      // $rightImgClass = $(rightImg).attr('class');
      // console.log($($rightImg).attr('class'));
      // find ID of square to the left, ID - 8
      $leftParent = $('.square').eq($parentIdNumber - 8);
      // console.log($leftParent);
      // find image assigned to Left Square
      $leftImg = $($leftParent).children(0);
      $leftImg.attr('id', 'left');
      // console.log($leftImg);
      // find ID of square top, ID -1
      $topParent = $('.square').eq($parentIdNumber - 1);
      // console.log($topParent);
      // find image assigned to top Parent:
      $topImage = $($topParent).children(0);
      $topImage.attr('id', 'top');
      // console.log($topImage);
      // find ID of square bottom, ID+1
      $bottomParent = $('.square').eq($parentIdNumber + 1);
      // console.log($topParent);
      // find image assigned to the square $bottom
      $bottomImg = $($bottomParent).children(0);
      $bottomImg.attr('id', 'bottom');
      // console.log($bottomImg);
      // console.log($($rightImg).attr('class'));
      // console.log('you clicked this item');
      // console.log($current.attr('class'));
      $currentImageClass = $current.attr('class');
      $currentImageSrc = $current.attr('src');
      $current.addClass('image-swap');
      $newCurrentImageClass = $current.attr('class');

      $elementWithSwap = $('.image-swap');
      // console.log(elementWithSwap.length)
      // debugger;
      // console.log($($rightImg).attr('class'));
    } else if ($elementWithSwap.length === 1 && $elementWithNext.length === 0) {
      $next = $(event.currentTarget);
      let $nextImageParent = $next.parent();
      // console.log($nextImageParent);
      // console.log($rightParent);
      console.log('next id is' + $next.attr('id'));
      console.log('right id is' + $rightImg.attr('id'));
      console.log($leftImg);
      console.log($topImage);
      console.log($bottomImg);
      // $nextImageClass = $next.attr('class');
      // $nextImageSrc = $next.attr('src');
      // console.log($rightImg.children());
      // console.log($rightImg.attr('class'));
      // console.log($next.children());
      // console.log($next.attr('class'));
      if ($next.attr('id', 'right') || $next.attr('id', 'left') || $next.attr('id', 'top') || $next.attr('id', 'bottom')) {
        $nextImageClass = $next.attr('class');
        $nextImageSrc = $next.attr('src');
        // console.log($newCurrentImageClass);
        // console.log($nextImageClass);
        // console.log($nextImageSrc);
        $next.addClass('next-image');
        $elementWithNext = $('.next-image');
        $newNextImageClass = $next.attr('class');
        // console.log($newNextImageClass);
        $current.removeClass().removeAttr('src');
        $current.addClass($nextImageClass);
        $current.attr('src', $nextImageSrc);
        // console.log($current.attr('class'));
        $next.removeClass().removeAttr('src');
        $next.addClass($currentImageClass);
        $next.attr('src', $currentImageSrc);
        $elementWithSwap = $('.image-swap');
        $elementWithNext = $('.next-image');
        // $('image').removeAttr('id');
      }
    } else {
      // console.log($next);
      $next = 0;
      console.log($next);
    }
    $('image').removeAttr('id');
  })

  // })

  // Correct way to swap two items:
  // let $current;
  // let $next;
  // let currentItemClass;
  // let currentItemSrc;
  // let $nextImageClass;
  // let $nextImageSrc;
  // let $newCurrentImageClass;
  // let $newCurrentImageSrc;
  // let $newNextImageClass;
  // let $newNextImageSrc;
  // $('img').on('click', (event) => {
  //   if ($elementWithSwap.length === 0 && $elementWithNext.length === 0) {
  //     $current = $(event.currentTarget);
  //     // console.log('you clicked this item');
  //     // console.log($current.attr('class'));
  //     $currentImageClass = $current.attr('class');
  //     $currentImageSrc = $current.attr('src');
  //     $current.addClass('image-swap');
  //     $newCurrentImageClass = $current.attr('class');
  //
  //     $elementWithSwap = $('.image-swap')
  //     // console.log(elementWithSwap.length)
  //     // debugger;
  //   } else if ($elementWithSwap.length === 1 && $elementWithNext.length === 0) {
  //     $next = $(event.currentTarget);
  //     $nextImageClass = $next.attr('class');
  //     $nextImageSrc = $next.attr('src');
  //     // console.log($newCurrentImageClass);
  //     // console.log($nextImageClass);
  //     // console.log($nextImageSrc);
  //     $next.addClass('next-image')
  //     $elementWithNext = $('.next-image');
  //     $newNextImageClass = $next.attr('class');
  //     // console.log($newNextImageClass);
  //     $current.removeClass().removeAttr('src');
  //     $current.addClass($nextImageClass);
  //     $current.attr('src', $nextImageSrc);
  //     console.log($current.attr('class'));
  //     $next.removeClass().removeAttr('src');
  //     $next.addClass($currentImageClass);
  //     $next.attr('src', $currentImageSrc);
  //     $elementWithSwap = $('.image-swap')
  //     $elementWithNext = $('.next-image');
  //   }
  // })
  //



  // ALSO WORKING BUT NOT PUT TOGETHER YET:
  // let $current;
  // let $right;
  // let currentItemClass;
  // let currentItemSrc;
  // let $rightImageClass;
  // let $rightImageSrc;
  // let $newCurrentImageClass;
  // let $newCurrentImageSrc;
  // let $newrightImageClass;
  // let $newrightImageSrc;
  // let $imgParent;
  // let $parentId;
  // let $parentIdNumber;
  // let $rightParent;
  // let $rightImg;
  // let $leftParent;
  // let $leftImg;
  // let $topParent;
  // let $topImg;
  // let $bottomParent;
  // let $bottomImg;
  //
  // $('img').on('click', (event) => {
  //   $imgParent = $(event.currentTarget).parent();
  //   console.log($imgParent);
  //   $parentId = $imgParent.attr('id');
  //   $parentIdNumber = Number($parentId);
  //   // console.log($parentIdNumber);
  //   // find ID of square to the right, ID + 8
  //   $rightParent = $('.square').eq($parentIdNumber + 8);
  //   // console.log($rightParent);
  //   // find image assigned to Right Square, for right image:
  //   $rightImg = $($rightParent).children(0);
  //   // console.log($($rightImg).attr('class'));
  //   // find ID of square to the left, ID - 8
  //   $leftParent = $('.square').eq($parentIdNumber - 8);
  //   // console.log($leftParent);
  //   // find image assigned to Left Square
  //   $leftImg = $($leftParent).children(0);
  //   // console.log($leftImg);
  //   // find ID of square top, ID -1
  //   $topParent = $('.square').eq($parentIdNumber - 1);
  //   // console.log($topParent);
  //   // find image assigned to top Parent:
  //   $topImage = $($topParent).children(0);
  //   // console.log($topImage);
  //   // find ID of square bottom, ID+1
  //   $bottomParent = $('.square').eq($parentIdNumber + 1);
  //   // console.log($topParent);
  //   // find image assigned to the square $bottom
  //   $bottomImg = $($bottomParent).children(0);
  //   // console.log($bottomImg);
  //   if ($elementWithSwap.length === 0 && $elementWithNext.length === 0) {
  //     $current = $(event.currentTarget);
  //     // console.log('you clicked this item');
  //     // console.log($current.attr('class'));
  //     $currentImageClass = $current.attr('class');
  //     $currentImageSrc = $current.attr('src');
  //     $current.addClass('image-swap');
  //     $newCurrentImageClass = $current.attr('class');
  //
  //     $elementWithSwap = $('.image-swap')
  //     // console.log(elementWithSwap.length)
  //     // debugger;
  //
  //   } else if ($elementWithSwap.length === 1 && $elementWithNext.length === 0) {
  //     $next = $(event.currentTarget);
  //     $nextImageClass = $next.attr('class');
  //     $nextImageSrc = $next.attr('src');
  //     // console.log($newCurrentImageClass);
  //     // console.log($nextImageClass);
  //     // console.log($nextImageSrc);
  //     $next.addClass('next-image')
  //     $elementWithNext = $('.next-image');
  //     $newNextImageClass = $next.attr('class');
  //     // console.log($newNextImageClass);
  //     $current.removeClass().removeAttr('src');
  //     $current.addClass($nextImageClass);
  //     $current.attr('src', $nextImageSrc);
  //     console.log($current.attr('class'));
  //     $next.removeClass().removeAttr('src');
  //     $next.addClass($currentImageClass);
  //     $next.attr('src', $currentImageSrc);
  //     $elementWithSwap = $('.image-swap')
  //     $elementWithNext = $('.next-image');
  //   }
  // })
  //
})
