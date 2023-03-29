// About me

const tab = document.querySelectorAll('.tablink')
const tabcontent = document.querySelectorAll('.tabcontent')


tab.forEach((item) => {
  if (item.classList.contains('skill')) item.classList.add('tab')
  tabcontent[0].style.display = 'block'

  item.addEventListener('click', (e) => {
    remove()
    tabcon()
    if (e.target === tab[1]) {
      tabcontent[1].style.display = 'block'
    }
    else if (e.target === tab[2]) {
      tabcontent[2].style.display = 'block'
    }
    else {
      tabcontent[0].style.display = 'block'
    }
    item.classList.add('active');
  })
})

function remove() {
  tab.forEach((item) => {
    item.classList.remove('active')
  })
}

function tabcon() {
  tabcontent.forEach((tabcon) => {
    tabcon.style.display = 'none'
  })
}

