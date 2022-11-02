$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 80,
		nav: false,
		responsive: {
			0: {
				items: 3,
				margin: 50,
			},
			640: {
				items: 3,
			},
			768: {
				items: 4,
			},
			1024: {
				items: 4,
			},
			1536: {
				items: 5,
			},
		},
	});
});

window.onscroll = function () {
	const header = document.querySelector('header');
	const offsetTop = header.offsetTop;
	const toTop = document.querySelector('#to-top');
	const hamburgerLine = document.querySelectorAll('#hamburger');
	const navLink = document.querySelectorAll('#nav-link');

	if (window.scrollY > offsetTop) {
		header.classList.add('navbar-fixed');
		hamburgerLine.forEach((element) => {
			element.classList.add('hamburger-onscroll');
			element.classList.remove('hamburger-line');
		});
		navLink.forEach((element) => {
			element.classList.remove('text-slate-300', 'group-hover:text-white');
			element.classList.add('navlink-onscroll');
		});
		toTop.classList.remove('hidden');
	} else {
		header.classList.remove('navbar-fixed');
		hamburgerLine.forEach((element) => {
			element.classList.remove('hamburger-onscroll');
			element.classList.add('hamburger-line');
		});
		navLink.forEach((element) => {
			element.classList.remove('navlink-onscroll');
			element.classList.add('text-slate-300', 'group-hover:text-white');
		});
		toTop.classList.add('hidden');
		// toTop.classList.remove('flex');
	}
};

const hamburgerBtn = document.querySelector('#hamburger-btn');
const navMenu = document.querySelector('#nav-menu');
// Hamburger Toggle
hamburgerBtn.addEventListener('click', () => {
	hamburgerBtn.classList.toggle('hamburger-active');
	navMenu.classList.toggle('hamburger-show');
});

if (window.innerWidth < 1024) {
	const navLi = document.querySelector('.dropdown-hover');
	navLi.classList.add('dropdown-left');
} else {
	navLi.classList.remove('dropdown-left');
}

// Close Hamburger Menu when click outside
window.addEventListener('click', function (e) {
	if (e.target !== hamburgerBtn && e.target !== navMenu) {
		hamburgerBtn.classList.remove('hamburger-active');
		navMenu.classList.remove('hamburger-show');
	}
});

// function getData() {
// 	const response = fetch('dist/api/data.json');
// 	return response.then((response) => response.json());
// }

// async function getNameData() {
// 	try {
// 		const data = await getData();
// 		console.log(data);
// 		return data.nama;
// 	} catch (error) {
// 		console.log(error.message);
// 	}
// }

// getNameData().then((resp) => (document.querySelector('.data').textContent = resp));
