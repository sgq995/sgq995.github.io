const body = document.body

const sidebar = body.querySelector('#sidebar')
const expandButton = body.querySelector('#sidebar-toggler')
const overlay = body.querySelector('.sidebar-overlay')
const sidebarMenu = body.querySelector('#sidebar-menu')

const collapseButton = expandButton.cloneNode(true)
collapseButton.setAttribute('id', '#sidebar-collapse')

const setAriaExpanded = (items, value) => {
  items.forEach(item => item.setAttribute('aria-expanded', value))
}

const hideSidebar = () => {
  body.classList.remove('sidebar-is-shown')
  sidebar.classList.remove('toggled')
  setAriaExpanded([sidebar, expandButton, collapseButton], false)
}

const showSidebar = () => {
  body.classList.add('sidebar-is-shown')
  sidebar.classList.add('toggled')
  setAriaExpanded([sidebar, expandButton, collapseButton], true)
  sidebar.focus()
}

const initSidebarMenu = () => {
  let itemsWithSubmenu = sidebarMenu.querySelectorAll('.item.has-children')

  itemsWithSubmenu.forEach(item => {
    let toggler = item.querySelector('button')
    let submenu = item.querySelector('.sub-menu')

    setAriaExpanded([submenu, toggler], false)

    toggler.addEventListener('click', () => {
      let toggled = item.classList.contains('toggled')

      item.classList[toggled ? 'remove' : 'add']('toggled')
      setAriaExpanded([submenu, toggler], !toggled)
    })
  })
}

export const initSidebar = () => {
  sidebar.setAttribute('tabindex', '-1')
  sidebar.insertBefore(collapseButton, sidebar.children[1])

  setAriaExpanded([sidebar, expandButton, collapseButton], false)

  expandButton.addEventListener('click', showSidebar)
  collapseButton.addEventListener('click', hideSidebar)
  overlay.addEventListener('click', hideSidebar)

  if (sidebarMenu) initSidebarMenu()
}
