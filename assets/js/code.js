let body = ['https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w1920-q80/cbs_page_attribute/latam_upsell_hero1_weblandscape_2560x960_050422.jpg', 'https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w3200-q80/cbs_page_attribute/uk_ie_upsell_hero2_weblandscape_2560x960_060922_1.jpg', 'https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w3200-q80/cbs_page_attribute/16/52/image_2843f892-4464-4923-841c-7b424751fdf4.jpg', 'https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w3200-q80/cbs_page_attribute/16/54/image_e46fd8a5-07e2-4a0f-93ef-9b5eaa27001c.jpg']
let bodyall = document.querySelector('body')
let head = document.querySelector('head')

let linkTitle = document.createElement('title')
linkTitle.textContent = 'Paramount+ Colombia - Mira series, películas, contenido original y mucho más'
head.appendChild(linkTitle)

let link1 = document.createElement('link')
link1.setAttribute('rel','shortcut icon')
link1.setAttribute('href','assets/img/favicon.png')
link1.setAttribute('type','image/x-icon')
head.appendChild(link1)

let link2 = document.createElement('link')
link2.setAttribute('rel','stylesheet')
link2.setAttribute('href','assets/css/bootstrap.min.css')
head.appendChild(link2)

let link3 = document.createElement('link')
link3.setAttribute('rel','stylesheet')
link3.setAttribute('href','https://necolas.github.io/normalize.css/8.0.1/normalize.css')
head.appendChild(link3)

let link4 = document.createElement('link')
link4.setAttribute('rel','stylesheet')
link4.setAttribute('href','https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap')
head.appendChild(link4)

let link5 = document.createElement('link')
link5.setAttribute('rel','stylesheet')
link5.setAttribute('href','https://fonts.googleapis.com/css2?family=Figtree:wght@300&display=swap')
head.appendChild(link5)

let nav = document.createElement('nav')
nav.className = 'navbar navbar-expand-lg py-2'
nav.style.padding = '90px'
nav.style.width = '100%'
nav.style.position = 'fixed'
nav.style.zIndex = '1000'
bodyall.appendChild(nav)

let div1 = document.createElement('div')
div1.className = 'container-fluid'
nav.appendChild(div1)


let aicon = document.createElement('a')
aicon.setAttribute('href', 'paramount.html')
aicon.className = 'navbar-brand'
div1.appendChild(aicon)

let logo = document.createElement('img')
logo.setAttribute('src', 'assets/img/logo.png')
logo.setAttribute('width', '120')
logo.setAttribute('height', '30')
logo.setAttribute('alt', '')
logo.className = 'd-inline-block align-text-top'
aicon.appendChild(logo)

let btnhamburguesa = document.createElement('button')
btnhamburguesa.setAttribute('data-bs-toggle', 'collapse')
btnhamburguesa.setAttribute('data-bs-target', '#navbarSupportedContent')
btnhamburguesa.setAttribute('aria-controls', 'navbarSupportedContent')
btnhamburguesa.setAttribute('aria-expanded', 'false')
btnhamburguesa.setAttribute('aria-label', 'Toggle navigation')
btnhamburguesa.className = 'navbar-toggler'
btnhamburguesa.type = 'button'
div1.appendChild(btnhamburguesa)

let spanbtn = document.createElement('span')
spanbtn.className = 'navbar-toggler-icon'
btnhamburguesa.appendChild(spanbtn)

let div2 = document.createElement('div')
div2.className = 'collapse navbar-collapse'
div2.setAttribute('id', 'navbarSupportedContent')
div1.appendChild(div2)

let formIni = document.createElement('form')
formIni.className = 'd-flex'
formIni.setAttribute('role', 'search')
div2.appendChild(formIni)

let ul = document.createElement('ul')
ul.className = 'navbar-nav me-auto mb-2 mb-lg-0'
div2.appendChild(ul)

let li = document.createElement('li')
li.className = 'nav-item d-flex align-items-center px-3'
li.style.borderLeft = '1px solid #eee'
ul.appendChild(li)

let p = document.createElement('p')
p.className = 'm-0'
p.style.fontSize = '14px'
ul.appendChild(p)

let spanA = document.createElement('span')
spanA.style.color = '#bbbbbb'
spanA.textContent = 'HALO: '
p.appendChild(spanA)

let bspanA = document.createElement('b')
bspanA.style.color = '#fff'
bspanA.textContent = 'VER AHORA'
p.appendChild(bspanA)

let form = document.createElement('form')
form.className = 'd-flex'
div2.appendChild(form)

let aForm = document.createElement('a')
aForm.style.fontSize = '14px'
aForm.style.color = '#bbbbbb'
aForm.style.textDecoration = 'none'
aForm.setAttribute('href', '#')
aForm.textContent = 'INICIAR SESIÓN'
div2.appendChild(aForm)



body.forEach(img => {
    let contenedor2 = document.createElement('div')

    function background() {
        contenedor2.setAttribute('style', `background-image: url(${img})`)
        contenedor2.style.width = '100vw'
        contenedor2.style.height = '100vh'
        contenedor2.style.backgroundSize = 'cover'
        contenedor2.style.backgroundPosition = 'center'
        contenedor2.style.backgroundRepeat = 'no-repeat'
    }

    if (img == body[0]) {
        background()
        bodyall.appendChild(contenedor2)

        //CONTENT
        let divcontainer1 = document.createElement('div')
        divcontainer1.className = 'col-8'
        divcontainer1.style.padding = '10% 95px'
        contenedor2.appendChild(divcontainer1)

        let h = document.createElement('p')
        h.className = 'h1 text-white fw-bold'
        h.style.fontSize = '70px'
        h.style.lineHeight = '100%'
        h.style.fontFamily = `'Archivo Black', sans-serif`
        h.textContent = 'HISTORIAS ÚNICAS. ESTRELLAS ICÓNICAS. UNA MONTAÑA DE ENTRETENIMIENTO.'
        divcontainer1.appendChild(h)

        let pcontainer = document.createElement('p')
        pcontainer.textContent = `Suscríbete por $13,900.00 COP al Mes. Cancela en cualquier momento. Únete ahora y obtén 7 días gratis.`
        pcontainer.setAttribute('style', `font-family: 'Figtree', sans-serif;`)
        pcontainer.style.fontSize = '30px'
        pcontainer.style.lineHeight = '120%'
        pcontainer.className = 'col-6 text-white my-5'
        divcontainer1.appendChild(pcontainer)

        let divbtns = document.createElement('div')
        divbtns.className = 'd-flex flex-column'
        divcontainer1.appendChild(divbtns)

        let btnsuscri = document.createElement('button')
        btnsuscri.className = 'btn btn-primary'
        btnsuscri.setAttribute('style', `font-family: 'Figtree', sans-serif;`)
        btnsuscri.style.width = '400px'
        btnsuscri.style.height = '70px'
        btnsuscri.style.borderRadius = '0'
        btnsuscri.style.fontSize = '20px'
        btnsuscri.type = 'button'
        btnsuscri.textContent = 'SUSCRÍBETE A PARAMOUNT+'
        divbtns.appendChild(btnsuscri)

        let btnhave = document.createElement('button')
        btnhave.className = 'btn btn-outline-light my-4'
        btnhave.style.width = '400px'
        btnhave.style.height = '70px'
        btnhave.style.borderRadius = '0'
        btnhave.style.fontSize = '20px'
        btnhave.type = 'button'
        btnhave.textContent = 'YA TENGO PARAMOUNT+'
        divbtns.appendChild(btnhave)

        let btnprovee = document.createElement('button')
        btnprovee.className = 'btn btn-outline-light'
        btnprovee.style.width = '400px'
        btnprovee.style.height = '70px'
        btnprovee.style.borderRadius = '0'
        btnprovee.style.fontSize = '20px'
        btnprovee.type = 'button'
        btnprovee.textContent = 'INICIA SESIÓN CON TU PROVEEDOR'
        divbtns.appendChild(btnprovee)

    } else if (img == body[1]) {
        background()
        bodyall.appendChild(contenedor2)

        //CONTENT
        let divcontainer2 = document.createElement('div')
        divcontainer2.className = 'col-8'
        divcontainer2.style.padding = '10% 95px'
        contenedor2.appendChild(divcontainer2)

        let h2 = document.createElement('p')
        h2.className = 'h1 text-white fw-bold col-9'
        h2.style.fontSize = '70px'
        h2.style.lineHeight = '100%'
        h2.style.fontFamily = `'Archivo Black', sans-serif`
        h2.textContent = 'SOMOS ORIGINALES Y EXCLUSIVOS'
        divcontainer2.appendChild(h2)

        let pcontainer2 = document.createElement('p')
        pcontainer2.textContent = `Disfruta de historias únicas, estrellas icónicas y programas exclusivos que no encontrarás en ningún otro lugar.`
        pcontainer2.setAttribute('style', `font-family: 'Figtree', sans-serif;`)
        pcontainer2.style.fontSize = '30px'
        pcontainer2.style.lineHeight = '120%'
        pcontainer2.className = 'col-6 text-white my-5 col-7'
        divcontainer2.appendChild(pcontainer2)

        //SLIDER

        let divSlider = document.createElement('div')
        contenedor2.appendChild(divSlider)

        let divCarrusel = document.createElement('div')
        divCarrusel.setAttribute('id', 'carouselExampleIndicators')
        divCarrusel.setAttribute('data-bs-ride', 'true')
        divCarrusel.className = 'carousel slide'
        divSlider.appendChild(divCarrusel)

        let divInner = document.createElement('div')
        divInner.className = 'carousel-inner'
        divCarrusel.appendChild(divInner)

        let divItem = document.createElement('div')
        divItem.className = 'carousel-item active d-flex justify-content-center'
        divInner.appendChild(divItem)

        let imgCarrusel = ["https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/halo_s1_poster_1400x2100_nb_022822_2.jpg", "https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/first_lady_s1_poster_1400x2100_nb_032322_2.jpg", "https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/enviados_s1_latam_poster_1400x2100_nb_011822.jpg", "https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/yellowstone_s4_poster_1400x2100_nb_102621_1.jpg", "https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/rupauls_dragrace_s14_poster_1400x2100_nb_012722_0.jpg", "https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/yellowjackets_s1_poster_1400x2100_nb_111021_1.jpg", "https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/killing_eve_s4_poster_1400x2100_021822.jpg", "https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/sproc_salone_poster_1400x2100_nb_121021_0.jpg"]

        imgCarrusel.forEach(img2 => {

            let imageCarr = document.createElement('img')
            imageCarr.setAttribute('src', `${img2}`)
            imageCarr.setAttribute('alt', '...')
            imageCarr.style.width = '220px'
            imageCarr.className = 'd-block mx-1'
            divItem.appendChild(imageCarr)
        })

        let btnPrev = document.createElement('button')
        btnPrev.setAttribute('data-bs-target', '#carouselExampleIndicators')
        btnPrev.setAttribute('data-bs-slide', 'prev')
        btnPrev.className = 'carousel-control-prev'
        btnPrev.type = 'button'
        divInner.appendChild(btnPrev)

        let spanPrev = document.createElement('span')
        spanPrev.setAttribute('aria-hidden', 'true')
        spanPrev.className = 'carousel-control-prev-icon'
        btnPrev.appendChild(spanPrev)

        let spanVisPrev = document.createElement('span')
        spanVisPrev.className = 'visually-hidden'
        spanVisPrev.textContent = 'Previous'
        btnPrev.appendChild(spanVisPrev)

        let btnNext = document.createElement('button')
        btnNext.setAttribute('data-bs-target', '#carouselExampleIndicators')
        btnNext.setAttribute('data-bs-slide', 'next')
        btnNext.className = 'carousel-control-next'
        btnNext.type = 'button'
        divInner.appendChild(btnNext)

        let spanNext = document.createElement('span')
        spanNext.setAttribute('aria-hidden', 'true')
        spanNext.className = 'carousel-control-next-icon'
        btnNext.appendChild(spanNext)

        let spanVisNext = document.createElement('span')
        spanVisNext.className = 'visually-hidden'
        spanVisNext.textContent = 'Next'
        btnNext.appendChild(spanVisNext)

    } else if (img == body[2]) {
        background()
        bodyall.appendChild(contenedor2)

        //CONTENT
        let divcontainer3 = document.createElement('div')
        divcontainer3.className = 'col-8'
        divcontainer3.style.padding = '8% 95px'
        contenedor2.appendChild(divcontainer3)

        let h3 = document.createElement('p')
        h3.className = 'h1 text-white fw-bold col-9'
        h3.style.fontSize = '70px'
        h3.style.lineHeight = '100%'
        h3.style.fontFamily = `'Archivo Black', sans-serif`
        h3.textContent = 'TENEMOS TU CONTENIDO FAVORITO'
        divcontainer3.appendChild(h3)

        let pcontainer3 = document.createElement('p')
        pcontainer3.textContent = `Desde películas taquilleras y series reconocidas a tus programas favoritos, en Paramount+ podrás disfrutarlo todo una y otra vez.`
        pcontainer3.setAttribute('style', `font-family: 'Figtree', sans-serif;`)
        pcontainer3.style.fontSize = '30px'
        pcontainer3.style.lineHeight = '120%'
        pcontainer3.className = 'col-6 text-white my-3 col-7'
        divcontainer3.appendChild(pcontainer3)

        //SLIDER

        let divSlider3 = document.createElement('div')
        contenedor2.appendChild(divSlider3)

        let divCarrusel3 = document.createElement('div')
        divCarrusel3.setAttribute('id', 'carouselExampleIndicators')
        divCarrusel3.setAttribute('data-bs-ride', 'true')
        divCarrusel3.className = 'carousel slide'
        divSlider3.appendChild(divCarrusel3)

        let divInner3 = document.createElement('div')
        divInner3.className = 'carousel-inner'
        divCarrusel3.appendChild(divInner3)

        let divItem3 = document.createElement('div')
        divItem3.className = 'carousel-item active d-flex justify-content-center'
        divInner3.appendChild(divItem3)

        let imgCarrusel3 = ["https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/1883_s1_poster_1400x2100_nb_030722.jpg","https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/paw_patrol_s8a_poster_1400x2100_nb_100521_0.jpg","https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/resistire_s2_poster_1400x2100_032222.jpg","https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/patrick_star_s1_poster_1400x2100_120721.jpg","https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/madame_x_sa_poster_1400x2100_nb_093021_0.jpg","https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/arriba_chef_s1a_poster_1400x2100_nb_070221.jpg","https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/cecilia_s1_poster_1400x2100_nb_121721.jpg"]

        imgCarrusel3.forEach(img3 => {

            let imageCarr3 = document.createElement('img')
            imageCarr3.setAttribute('src', `${img3}`)
            imageCarr3.setAttribute('alt', '...')
            imageCarr3.style.width = '240px'
            imageCarr3.className = 'd-block mx-1'
            divItem3.appendChild(imageCarr3)
        })

    } else if (img == body[3]) {
        background()
        bodyall.appendChild(contenedor2)
        
        let divcontainer4 = document.createElement('div')
        divcontainer4.className = 'd-flex flex-column align-items-center'
        divcontainer4.style.padding = '8% 95px'
        contenedor2.appendChild(divcontainer4)

        let h4 = document.createElement('p')
        h4.className = 'h1 text-white fw-bold'
        h4.style.fontSize = '70px'
        h4.style.lineHeight = '100%'
        h4.style.fontFamily = `'Archivo Black', sans-serif`
        h4.textContent = 'CUANDO QUIERAS, DONDE QUIERAS'
        divcontainer4.appendChild(h4)

        let pcontainer4 = document.createElement('p')
        pcontainer4.textContent = `Suscríbete por $13,900.00 COP al Mes. Cancela en cualquier momento.`
        pcontainer4.setAttribute('style', `font-family: 'Figtree', sans-serif;`)
        pcontainer4.style.fontSize = '30px'
        pcontainer4.style.lineHeight = '120%'
        pcontainer4.className = 'col-4 text-white my-3 text-center'
        divcontainer4.appendChild(pcontainer4)

        let divbtns4 = document.createElement('div')
        divbtns4.className = 'd-flex flex-column'
        divcontainer4.appendChild(divbtns4)

        let btnsuscri4 = document.createElement('button')
        btnsuscri4.className = 'btn btn-primary mt-4'
        btnsuscri4.setAttribute('style', `font-family: 'Figtree', sans-serif;`)
        btnsuscri4.style.width = '400px'
        btnsuscri4.style.height = '70px'
        btnsuscri4.style.borderRadius = '0'
        btnsuscri4.style.fontSize = '20px'
        btnsuscri4.type = 'button'
        btnsuscri4.textContent = 'SUSCRÍBETE A PARAMOUNT+'
        divbtns4.appendChild(btnsuscri4)

        let btnhave4 = document.createElement('button')
        btnhave4.className = 'btn btn-outline-light my-5'
        btnhave4.style.width = '400px'
        btnhave4.style.height = '70px'
        btnhave4.style.borderRadius = '0'
        btnhave4.style.fontSize = '20px'
        btnhave4.type = 'button'
        btnhave4.textContent = 'YA TENGO PARAMOUNT+'
        divbtns4.appendChild(btnhave4)

        let btnprovee4 = document.createElement('button')
        btnprovee4.className = 'btn btn-outline-light'
        btnprovee4.style.width = '400px'
        btnprovee4.style.height = '70px'
        btnprovee4.style.borderRadius = '0'
        btnprovee4.style.fontSize = '20px'
        btnprovee4.type = 'button'
        btnprovee4.textContent = 'INICIA SESIÓN CON TU PROVEEDOR'
        divbtns4.appendChild(btnprovee4)
    }
})

let footer = document.createElement('footer')
footer.className = 'bg-black py-5'
bodyall.appendChild(footer)

let divFooterImg = document.createElement('div')
divFooterImg.className = 'pb-5'
divFooterImg.style.padding = '0 95px'
footer.appendChild(divFooterImg)

let imgFooter = document.createElement('img')
imgFooter.setAttribute('src' , 'assets/img/logo.png')
imgFooter.setAttribute('alt' , '...')
imgFooter.style.width = '120px'
imgFooter.style.height = '30px'
divFooterImg.appendChild(imgFooter)

let divUl = document.createElement('div')
divUl.className = 'd-flex'
divUl.style.padding = '0 95px'
footer.appendChild(divUl)

let ul1 = document.createElement('ul')
ul1.className = 'text-secondary p-0'
ul1.style.listStyle = 'none'
divUl.appendChild(ul1)

let liTitle = document.createElement('li')
liTitle.className = 'fw-bold py-2'
liTitle.style.fontSize = '13px'
liTitle.textContent = 'Navegación del sitio'
ul1.appendChild(liTitle)

let li1 = document.createElement('li')
li1.style.fontSize = '12px'
li1.textContent = 'Paramount+ Colombia'
ul1.appendChild(li1)

let li2 = document.createElement('li')
li2.style.fontSize = '12px'
li2.textContent = 'Paramount+ Global'
ul1.appendChild(li2)

let ul2 = document.createElement('ul')
ul2.className = 'text-secondary px-5'
ul2.style.listStyle = 'none'
divUl.appendChild(ul2)

let liTitle2 = document.createElement('li')
liTitle2.className = 'fw-bold py-2'
liTitle2.style.fontSize = '13px'
liTitle2.textContent = 'Privacidad y términos'
ul2.appendChild(liTitle2)

let li3 = document.createElement('li')
li3.style.fontSize = '12px'
li3.textContent = 'Acuerdo de Suscripción'
ul2.appendChild(li3)

let li4 = document.createElement('li')
li4.style.fontSize = '12px'
li4.textContent = 'Términos de Uso'
ul2.appendChild(li4)

let li5 = document.createElement('li')
li5.style.fontSize = '12px'
li5.textContent = 'Política de privacidad y Política'
ul2.appendChild(li5)

let li6 = document.createElement('li')
li6.style.fontSize = '12px'
li6.textContent = 'Política de cookies'
ul2.appendChild(li6)

let ul3 = document.createElement('ul')
ul3.className = 'text-secondary p-0'
ul3.style.listStyle = 'none'
divUl.appendChild(ul3)

let liTitle3 = document.createElement('li')
liTitle3.className = 'fw-bold py-2'
liTitle3.style.fontSize = '13px'
liTitle3.textContent = 'Soporte'
ul3.appendChild(liTitle3)

let li7 = document.createElement('li')
li7.style.fontSize = '12px'
li7.textContent = 'Ayuda / Contáctanos'
ul3.appendChild(li7)

let li8 = document.createElement('li')
li8.style.fontSize = '12px'
li8.textContent = 'Guia de clasificaciones'
ul3.appendChild(li8)

let divDerechos = document.createElement('div')
divDerechos.className = 'pb-5'
divDerechos.style.padding = '0 95px'
footer.appendChild(divDerechos)

let pDerechos = document.createElement('p')
pDerechos.className = 'text-secondary pt-4'
pDerechos.style.fontSize = '12px'
pDerechos.textContent = '© 2022 Paramount. Todos los derechos reservados.'
divDerechos.appendChild(pDerechos)