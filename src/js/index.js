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
			name: "Sample", stage: "main", img: "sample.jpg"
		}, {
			name: "Manuals", stage: "main", img: "manuals.jpg"
		}, {
			name: "Milano", stage: "main", img: "milano.jpg"
		}, {
			name: "Hypesquad", stage: "main", img: "hypesquad.jpg"
		}, {
			name: "MTOW", stage: "main", img: "mtow.jpg"
		}, {
			name: "Project A", stage: "main", img: "projecta.jpg"
		}, {
			name: "DJ Jelle", stage: "feest", img: "jelle.jpg"
		}, {
			name: "DB All Music", stage: "feest", img: "allmusic.jpg"
		}, {
			name: "Sawkee", stage: "techno", img: "sawkee.jpg"
		}, {
			name: "Verbov", stage: "techno", img: "verbov.jpg"
		}, {
			name: "Pan & Cook", stage: "techno", img: "pancook.jpg"
		}
	];

	const lineups = {};
	lineups["main"] = document.querySelector("#lineup-main");
	lineups["feest"] = document.querySelector("#lineup-feest");
	lineups["techno"] = document.querySelector("#lineup-techno");
	djs.forEach(dj => {
		const el = document.createElement("div");
		el.innerHTML = `<img src="static/img/dj/${dj.img}" alt="${dj.name}" /><p>${dj.name}</p>`;
		el.className = "lineup-img";
		el.setAttribute("data-aos", "fade-up");
		el.setAttribute("data-aos-placement", "center-bottom");
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
