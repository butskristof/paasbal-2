import AOS from "aos";
import "aos/dist/aos.css";

import jump from "jump.js";

import "../style/index.scss";

addEventListener("load", init, false);

function init() {
	AOS.init({
		duration: 1000
	});

	const scrollIndicator = document.querySelector("#scroll-indicator");
	scrollIndicator.addEventListener("click", scrollBeyondHero, false);

	fillYear();
	fillDJs();
	setCollapsibles();
}

function scrollBeyondHero() {
	jump("main", {
		offset: -50
	});
}

function fillYear() {
	document.querySelectorAll(".fill-year")
		.forEach(el => el.textContent = new Date().getFullYear());
}

function fillDJs() {
	const djs = [
		{
			name: "Sample", stage: "main", img: "http://loremflickr.com/500/500?random=1"
		}, {
			name: "Manuals", stage: "main", img: "http://loremflickr.com/500/500?random=2"
		}, {
			name: "Milano", stage: "main", img: "http://loremflickr.com/500/500?random=3"
		}, {
			name: "Hypesquad", stage: "main", img: "http://loremflickr.com/500/500?random=3"
		}, {
			name: "MTOW", stage: "main", img: "http://loremflickr.com/500/500?random=3"
		}, {
			name: "Project A", stage: "main", img: "http://loremflickr.com/500/500?random=3"
		}, {
			name: "DJ Jelle", stage: "feest"
		}, {
			name: "DB All Music", stage: "feest"
		}, {
			name: "Pan & Cook", stage: "techno"
		}, {
			name: "Sawkee", stage: "techno"
		}, {
			name: "Verbov", stage: "techno"
		}
	];

	const lineups = {};
	lineups["main"] = document.querySelector("#lineup-main");
	lineups["feest"] = document.querySelector("#lineup-feest");
	lineups["techno"] = document.querySelector("#lineup-techno");
	djs.forEach(dj => {
		const el = document.createElement("div");
		el.innerHTML = `<img src="http://lorempixel.com/500/500?random=${dj.name}" alt="${dj.name}" /><p>${dj.name}</p>`;
		el.className = "lineup-img";
		el.setAttribute("data-aos", "fade-up");
		lineups[dj.stage].appendChild(el);
	});
}

function setCollapsibles() {
	document.querySelectorAll(".collapsible")
		.forEach(c => {
			c.addEventListener("click", function() {
				const btn = this;
				const content = btn.nextElementSibling;
				const icon = btn.querySelector(".icon");

				btn.classList.toggle("active");

				if (content.style.maxHeight) {
					content.style.maxHeight = null;
					icon.textContent = "+";
				} else {
					content.style.maxHeight = content.scrollHeight + "px";
					icon.textContent = "-";
				}
			}, false);
		});
}
