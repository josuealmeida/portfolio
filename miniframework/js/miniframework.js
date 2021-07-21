console.info('VOCÊ ESTÁ UTILIZANDO O MINIFRAMEWORK V1.0')

// Loading

const loading = document.querySelector('.loading')
const mensagemProblema = document.querySelector('.loading p')

if (!loading) {
	console.warn('Que tal criar o elemento de loading...')
}

else {
	window.onload = () =>{
		setTimeout(() =>{
			loading.classList.remove('loading-visible')
			mensagemProblema.style.visibility = 'hidden'
		}, 200)
	}

	setTimeout(() =>{
		mensagemProblema.style.visibility = 'visible'
	}, 8000)
}



// Menu lateral, sidebar

const btnMenu = document.querySelector('.btn-menu')
const overlay = document.querySelector('.sidebar-overlay')
const menuMobile = document.querySelector('.sidebar')
const linkMenu = document.querySelectorAll('.sidebar .item')
const close = document.querySelector('.sidebar .bx-x')
const body = document.body

function abrirFechar(delayMenu, delayOverlay){
	menuMobile.style.transitionDelay = delayMenu
	overlay.style.transitionDelay = delayOverlay

	menuMobile.classList.toggle('open')
	overlay ? overlay.classList.toggle('open') : ''
	body.classList.toggle('overflow-hidden')
}

if (btnMenu && menuMobile) {
	// menu button
	btnMenu.onclick = function(){
		abrirFechar('.3s', '0s')
	}

	if (close) {
		// close button
		close.onclick = () =>{
			abrirFechar('0s', '.3s')
		}
		// menu links
		linkMenu.forEach((link) =>{
			link.onclick = () =>{
				abrirFechar('0s', '.3s')
			}
		})
	} 

	else {
		console.info("Ops... você se esqueceu de adicionar <i class='bx bx-x'></i>!")
	}

	if (overlay) {
		// overlay
		overlay.onclick = () =>{
			abrirFechar('0s', '.3s')
		}
	} 

	else{
		console.info('Que tal adicionar o elemento <div class="nav-overlay"></div>')
	}
}



// Modal

const btn_abrir_modal = document.querySelectorAll('.modal-btn')
const modalOverlay = document.querySelectorAll('.modal-overlay')
const modal_close_btn = document.querySelectorAll('.modal-overlay .bx')
const modalCancel = document.querySelectorAll('.modal footer .close')
const modal = document.querySelectorAll('.modal')

btn_abrir_modal.forEach((button, index) =>{
	const overlay = modalOverlay[index]
	const close = modal_close_btn[index]
	const cancel = modalCancel[index]
	const box = modal[index]

	button.onclick = () =>{
		overlay.classList.add('open')
		box.classList.add('open')

		close.style.display = 'block'

		document.body.style.overflow = 'hidden'
	}

	function fecharModal(){
		overlay.classList.remove('open')
		box.classList.remove('open')

		document.body.style.overflow = 'auto'
	}

	close.onclick = () =>{
		fecharModal()
	}

	cancel.onclick = () =>{
		fecharModal()
	}

	overlay.onclick = () =>{
		fecharModal()
	}
})



// Scroll to top

const btnScroll = document.querySelector('.scroll-top')

if (!btnScroll) {
	console.info('Sem rolagem para o topo')
}

else {
	window.onscroll = () =>{
		if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
		 	btnScroll.classList.add('scroll-top-visible')
		}

		else {
			btnScroll.classList.remove('scroll-top-visible')
		}

		btnScroll.onclick = () =>{
			window.scroll({
				top: 0,
				behavior: "smooth"
			})
		}
	}
}