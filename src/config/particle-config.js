const particlesConfig = {
	particles: {
		number: {
			value: 150,
			density: {
				enable: true,
				value_area: 1183.721462448409
			}
		},
		color: {
			value: '#b1e2ff'
		},
		shape: {
			type: 'circle',
			stroke: {
				width: 0,
				color: '#01a2ff'
			},
			polygon: {
				nb_sides: 5
			},
			image: {
				src: 'img/github.svg',
				width: 100,
				height: 100
			}
		},
		opacity: {
			value: 0.5,
			random: false,
			anim: {
				enable: false,
				speed: 1,
				opacity_min: 0.1,
				sync: false
			}
		},
		size: {
			value: 1.5,
			random: true,
			anim: {
				enable: false,
				speed: 7.192807192807193,
				size_min: 0.1,
				sync: false
			}
		},
		line_linked: {
			enable: true,
			distance: 180,
			color: '#84d2ff',
			opacity: 0.4088700755207083,
			width: 1.5
		},
		move: {
			enable: true,
			speed: 3,
			direction: 'none',
			random: true,
			straight: false,
			out_mode: 'out',
			bounce: false,
			attract: {
				enable: true,
				rotateX: 600,
				rotateY: 1200
			}
		}
	},
	interactivity: {
		detect_on: 'window',
		events: {
			onhover: {
				enable: true,
				mode: 'repulse'
			},
			onclick: {
				enable: false,
				mode: 'push'
			},
			resize: true
		},
		modes: {
			grab: {
				distance: 400,
				line_linked: {
					opacity: 1
				}
			},
			bubble: {
				distance: 400,
				size: 40,
				duration: 2,
				opacity: 8,
				speed: 3
			},
			repulse: {
				distance: 97.44926547616141,
				duration: 0.4
			},
			push: {
				particles_nb: 4
			},
			remove: {
				particles_nb: 2
			}
		}
	},
	retina_detect: true
};

export default particlesConfig;
