const  customRender=(reactElement, container)=>{
    
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    // container.appendChild(domElement)
    

   const domele=document.createElement(reactElement.type);
   domele.innerHTML=reactElement.children;
   for (const prop in reactElement.props) {
     if(prop==='children') continue;
     domele.setAttribute(prop,reactElement.props[prop]);
   }
   container.appendChild(domele)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)