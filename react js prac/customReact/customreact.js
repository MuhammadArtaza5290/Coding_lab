const { Children } = require("react")

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',

    },
    Children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')
customRender(reactElement, mainContainer)

