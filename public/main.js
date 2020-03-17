let n = 1;

getPage.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', `/page${n + 1}`)
  request.onreadystatechange = () => {
    if(request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response)
      array.forEach(item => {
        const li = document.createElement('li')
        li.textContent = item.id
        xxx.appendChild(li)
      })
      n+=1
    }
  }
  request.send()
}

getJSON.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/5.json')
  request.onreadystatechange = () => {
    if(request.readyState === 4 && request.status === 200) {
      const object = JSON.parse(request.response)
      myName.textContent = object.name
      console.log(object)
    }
  }
  request.send()
}

getXML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/4.xml')
  request.onreadystatechange = () => {
    if(request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML
      const text = dom.getElementsByTagName('warning')[0].textContent
      console.log(text.trim())
    }
  }
  request.send()
}

getHTML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/3.html')
  request.onreadystatechange = () => {
    if(request.readyState === 4 && request.status === 200) {
      // create div tag
      const div = document.createElement('div')
      // fill in div content
      div.innerHTML = request.response
      // append to body
      document.body.appendChild(div)
    }
  }
  request.send()
}

getJS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/2.js')
  request.onreadystatechange = () => {
    if(request.readyState === 4 && request.status === 200) {
      // create script tag
      const script = document.createElement('script')
      // fill in script content
      script.innerHTML = request.response
      // append to body
      document.body.appendChild(script)
    }
  }
  request.send()
}

getCSS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/style.css') // readyState === 1
  request.onreadystatechange = () => {
    // Downloaded, but don't know it is success 2xx or failed 4xx 5xx
    if(request.readyState === 4) {
      if(request.status >= 200 && request.status < 300) {
        // create style tag
        const style = document.createElement('style')
        // fill in style content
        style.innerHTML = request.response
        // append to head tag
        document.head.appendChild(style)
      } else {
        alert('Failed to load CSS')
      }
    }
  }
  request.send() // readyState === 2
}