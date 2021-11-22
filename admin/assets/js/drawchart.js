const cxt_admission = document.getElementById('admission-chart').getContext('2d');
const admission_chart = new Chart(cxt_admission, {
    type: 'line',
    data: {
        labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', ' Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
        datasets: [{
                label: 'Số học sinh nhập học mới',
                data: [0, 15, 40, 33, 21, 10, 12, 30, 190, 174, 30, 13],
                fill: false,
                borderColor: 'blue',
                tension: 0.1,
                yAxisID: 'y1'
            },
            {
                label: 'Lượt truy cập home page',
                data: [225, 446, 337, 523, 342, 113, 191, 786, 1141, 1220, 512, 124],
                fill: false,
                borderColor: 'red',
                tension: 0.1,
                yAxisID: 'y2'
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                id: 'y1',
                type: 'linear',
                position: 'left',
                ticks: {
                    beginAtZero: true
                }
            }, {
                id: 'y2',
                type: 'linear',
                position: 'right',
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

const cxt_revenue = document.getElementById('revenue-chart').getContext('2d');
const revenue_chart = new Chart(cxt_revenue, {
    type: 'line',
    data: {
        labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', ' Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
        datasets: [{
                label: 'Tổng thu (triệu đồng): ',
                data: [64, 853, 776, 991, 767, 24, 21, 32, 1294, 1533, 886, 747],
                fill: false,
                borderColor: 'blue',
                tension: 0.1,
                yAxisID: 'y1'
            },
            {
                label: 'Tổng chi (triệu đồng):',
                data: [71, 521, 417, 611, 334, 70, 84, 121, 749, 799, 531, 474],
                fill: false,
                borderColor: 'red',
                tension: 0.1,
                yAxisID: 'y2'
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                id: 'y1',
                type: 'linear',
                position: 'left',
                ticks: {
                    beginAtZero: true,
                    max: 1800,
                    min: 0
                }
            }, {
                id: 'y2',
                type: 'linear',
                position: 'right',
                ticks: {
                    beginAtZero: true,
                    max: 1800,
                    min: 0
                }
            }]
        }
    }
});