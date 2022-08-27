let body = ['https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w1920-q80/cbs_page_attribute/latam_upsell_hero1_weblandscape_2560x960_050422.jpg','https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w3200-q80/cbs_page_attribute/uk_ie_upsell_hero2_weblandscape_2560x960_060922_1.jpg','https://wwwimage-intl.pplusstatic.com/thumbnails/photos/w3200-q80/cbs_page_attribute/16/52/image_2843f892-4464-4923-841c-7b424751fdf4.jpg']
let bodyall = document.querySelector('body')



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
logo.setAttribute('src','assets/img/logo.png')
logo.setAttribute('width','120')
logo.setAttribute('height','30')
logo.setAttribute('alt','')
logo.className = 'd-inline-block align-text-top'
aicon.appendChild(logo)

let btnhamburguesa = document.createElement('button')
btnhamburguesa.setAttribute('data-bs-toggle','collapse')
btnhamburguesa.setAttribute('data-bs-target','#navbarSupportedContent')
btnhamburguesa.setAttribute('aria-controls','navbarSupportedContent')
btnhamburguesa.setAttribute('aria-expanded','false')
btnhamburguesa.setAttribute('aria-label','Toggle navigation')
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
formIni.setAttribute('role','search')
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
aForm.setAttribute('href','#')
aForm.textContent = 'INICIAR SESIÓN'
div2.appendChild(aForm)



body.forEach(img => {
    let contenedor2 = document.createElement('div')

    function background(){
        contenedor2.setAttribute('style', `background-image: url(${img})`)
            contenedor2.style.width = '100%'
            contenedor2.style.height = '100vh'
            contenedor2.style.backgroundSize = 'cover'
            contenedor2.style.backgroundPosition = 'center'
            contenedor2.style.backgroundRepeat = 'no-repeat'
    }

    if(img == body[0]){
        background()
        bodyall.appendChild(contenedor2)
        //NAVBAR
    

        //CONTENT

        let h = document.createElement('p')

    }else if(img == body[1]){
        background()
        bodyall.appendChild(contenedor2)

        const p = document.createElement('p')
        p.textContent = 'contenido secundario'
        contenedor2.appendChild(p)
        
    }else if(img == body[2]){
        background()

        bodyall.appendChild(contenedor2)
        const p = document.createElement('p')
        p.textContent = 'contenido terciario'
        contenedor2.appendChild(p)
        
    }
})

