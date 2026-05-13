
const bookChart = document.getElementsByClassName('book-chart');
const nonBookChart = document.getElementsByClassName('non-book-chart');
const periodicalChart = document.getElementsByClassName('periodical-chart');

//도서
const bookData = {
  labels: [
    '일반',
    '어린이',
    '참고',
    '원서',
    '점자'
  ],
  datasets: [{
    data: [165573, 75916, 2457, 15364, 112],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(255,100,20)',
      'rgb(255,50,120)',
    ],
    borderColor:'rgb(233,233,233)',
    hoverOffset: 2
  }]
};
//비도서
const nonBookData = {
  labels: [
    'DVD',
  ],
  datasets: [{
    data: [3689],
    backgroundColor: [
      'rgb(255, 99, 132)',
    ],
    borderColor:'rgb(233,233,233)',
    // hoverOffset: 2
  }]
};
//정기간행물
const periodicalData = {
  labels: [
    '일반잡지',
    '어린이',
  ],
  datasets: [{
    data: [76, 10],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
    ],
    borderColor:'rgb(233, 233, 233)',
    hoverOffset: 2
  }]
};

//차트 생성 구역
new Chart(bookChart, {
    type: 'doughnut',
    data: bookData,
    options: {
        plugins: {
            legend: {
            display: false // 상단 라벨이 완전히 사라집니다.
            },
            tooltip: {
                enabled: true
            }
            }
        }
});

new Chart(nonBookChart, {
    type: 'doughnut',
    data: nonBookData,
    options: {
        plugins: {
            legend: {
            display: false // 상단 라벨이 완전히 사라집니다.
            },
            tooltip: {
                enabled: true
            }
            }
        }
});
new Chart(periodicalChart, {
    type: 'doughnut',
    data: periodicalData,
    options: {
        plugins: {
            legend: {
            display: false // 상단 라벨이 완전히 사라집니다.
            },
            tooltip: {
                enabled: true
            }
            }
        }
});

