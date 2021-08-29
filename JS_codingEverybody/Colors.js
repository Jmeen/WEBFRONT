var link = {
    setcolor: function (color) {
      // querySelectorAll을 사용하면 문서 내 모든 태그를 리스트로 가져올수 있다.
      // 모든 태그의 스타일 색상을 적용.
      let alist = document.querySelectorAll('a');
      let i = 0;
      while (i < alist.length) {
        alist[i].style.color = color;
        i++;
      }
    }
  };

  var body = {
    setColor: function (color) {
      document.querySelector('body').style.color = color;
    },
    setBackgroundColor: function (color) {
      document.querySelector('body').style.backgroundColor = color;
    }
  }

  function nightDayHander(self) {
    var target = document.querySelector('body');
    // input value가 night이면 배경색과 글자색을 변경.
    if (self.value === 'night') {
      body.setBackgroundColor('black');
      body.setColor('white');
      self.value = 'day';

      link.setcolor('powderblue');

    } else {
      body.setBackgroundColor('white');
      body.setColor('black');
      self.value = 'night';

      link.setcolor('blue');
    }
  }