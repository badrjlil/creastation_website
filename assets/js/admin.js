var chart    = document.getElementById('chart').getContext('2d'),
    gradient = chart.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, 'rgba(0, 199, 214, 0.32)');
gradient.addColorStop(0.3, 'rgba(0, 199, 214, 0.1)');
gradient.addColorStop(1, 'rgba(0, 199, 214, 0)');


var data  = {
    labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October', 'November','December' ],
    datasets: [{
			label: 'Applications',
			backgroundColor: gradient,
			pointBackgroundColor: '#00c7d6',
			borderWidth: 1,
			borderColor: '#0e1a2f',
			data: [60, 45, 80, 30, 35, 55,25,80,40,50,80,50]
    }]
};

var options = {
	responsive: true,
	maintainAspectRatio: true,
	animation: {
		easing: 'easeInOutQuad',
		duration: 520
	},
	scales: {
		yAxes: [{
      ticks: {
        fontColor: '#5e6a81'
      },
			gridLines: {
				color: 'rgba(200, 200, 200, 0.08)',
				lineWidth: 1
			}
		}],
    xAxes:[{
      ticks: {
        fontColor: '#5e6a81'
      }
    }]
	},
	elements: {
		line: {
			tension: 0.4
		}
	},
	legend: {
		display: false
	},
	point: {
		backgroundColor: '#00c7d6'
	},
	tooltips: {
		titleFontFamily: 'Poppins',
		backgroundColor: 'rgba(0,0,0,0.4)',
		titleFontColor: 'white',
		caretSize: 5,
		cornerRadius: 2,
		xPadding: 10,
		yPadding: 10
	}
};

var chartInstance = new Chart(chart, {
    type: 'line',
    data: data,
		options: options
});

document.querySelector('.open-right-area').addEventListener('click', function () {
    document.querySelector('.app-right').classList.add('show');
});

document.querySelector('.close-right').addEventListener('click', function () {
    document.querySelector('.app-right').classList.remove('show');
});

document.querySelector('.menu-button').addEventListener('click', function () {
    document.querySelector('.app-left').classList.add('show');
});

document.querySelector('.close-menu').addEventListener('click', function () {
    document.querySelector('.app-left').classList.remove('show');
});




function displayPage(index){
	document.getElementById("dashboard").classList.add("hide");
	document.getElementById("blogs").classList.add("hide");
	document.getElementById("portfolio").classList.add("hide");
	document.getElementById("services").classList.add("hide");
	document.getElementById("inbox").classList.add("hide");

	var navItems = document.querySelectorAll(".nav-list-item");

	for (var i = 0; i < navItems.length; i++) {
		navItems[i].classList.remove("active");
	  }

	const navItem1 = document.getElementById("dashboard-link");
	const navItem2 = document.getElementById("blogs-link");
	const navItem3 = document.getElementById("portfolio-link");
	const navItem4 = document.getElementById("services-link");
	const navItem5 = document.getElementById("inbox-link");


	const page1 = document.getElementById("dashboard");
	const page2 = document.getElementById("blogs");
	const page3 = document.getElementById("portfolio");
	const page4 = document.getElementById("services");
	const page5 = document.getElementById("inbox");

	switch(index){
		case 0:
			page1.classList.remove("hide");
			navItem1.classList.add("active")
			break;
		case 1:
			page2.classList.remove("hide");
			navItem2.classList.add("active")
			break;
		case 2:
			page3.classList.remove("hide");
			navItem3.classList.add("active")
			break;
		case 3:
			page4.classList.remove("hide");
			navItem4.classList.add("active")
			break;
		case 4:
			page5.classList.remove("hide");
			navItem5.classList.add("active")
			break;
	}
}
