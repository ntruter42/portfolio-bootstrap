// NAVBAR CURRENT SECTION HIGHLIGHT
window.addEventListener('scroll', function() {
	var section1 = document.getElementById('intro-section');
	var section1Top = section1.getBoundingClientRect().top;
	
	if (section1Top < 60 && section1Top > -section1.offsetHeight) {
	  document.querySelector('.nav-link-1').classList.add('active');
	} else {
	  document.querySelector('.nav-link-1').classList.remove('active');
	}
});

window.addEventListener('scroll', function() {
	var section1 = document.getElementById('skills-section');
	var section1Top = section1.getBoundingClientRect().top;
	
	if (section1Top < 60 && section1Top > -section1.offsetHeight) {
	  document.querySelector('.nav-link-2').classList.add('active');
	} else {
	  document.querySelector('.nav-link-2').classList.remove('active');
	}
});

window.addEventListener('scroll', function() {
	var section1 = document.getElementById('projects-section');
	var section1Top = section1.getBoundingClientRect().top;
	
	if (section1Top < 60 && section1Top > -section1.offsetHeight) {
	  document.querySelector('.nav-link-3').classList.add('active');
	} else {
	  document.querySelector('.nav-link-3').classList.remove('active');
	}
});

window.addEventListener('scroll', function() {
	var section1 = document.getElementById('contact-section');
	var section1Top = section1.getBoundingClientRect().top;
	
	if (section1Top < 60 && section1Top > -section1.offsetHeight) {
	  document.querySelector('.nav-link-4').classList.add('active');
	} else {
	  document.querySelector('.nav-link-4').classList.remove('active');
	}
});

window.addEventListener('scroll', function() {
	var section1 = document.getElementById('social-section');
	var section1Top = section1.getBoundingClientRect().top;
	
	if (section1Top < 60 && section1Top > -section1.offsetHeight) {
	  document.querySelector('.nav-link-5').classList.add('active');
	} else {
	  document.querySelector('.nav-link-5').classList.remove('active');
	}
});
