document.querySelector(".Cognex").addEventListener("click", cognexJD)
document.querySelector(".Sanmina").addEventListener("click", sanminaJD)
document.querySelector(".PCI").addEventListener("click", pciJD)

function cognexJD() {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", "json/jd.json", true)
  xhr.onload = function () {
    if (this.status === 200) {
      const jd = JSON.parse(this.responseText)

      let i,
        b = ""
      for (i = 0; i < jd[0].jobdesc.length; i++) {
        b += jd[0].jobdesc[i] + "<br>"
      }
      document.querySelector(".listItems").innerHTML = b
      document.querySelector(".jd").innerHTML = jd[0].company
      console.log(jd[0].company)
    }
  }
  xhr.send()
}

function sanminaJD() {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", "json/jd.json", true)
  xhr.onload = function () {
    if (this.status === 200) {
      const jd = JSON.parse(this.responseText)

      let i,
        b = ""
      for (i = 0; i < jd[1].jobdesc.length; i++) {
        b += jd[1].jobdesc[i] + "<br>"
      }
      document.querySelector(".listItems").innerHTML = b
      document.querySelector(".jd").innerHTML = jd[1].company
      console.log(jd[1].company)
    }
  }
  xhr.send()
}

function pciJD() {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", "json/jd.json", true)
  xhr.onload = function () {
    if (this.status === 200) {
      const jd = JSON.parse(this.responseText)

      let i,
        b = ""
      for (i = 0; i < jd[2].jobdesc.length; i++) {
        b += jd[2].jobdesc[i] + "<br>"
      }
      document.querySelector(".listItems").innerHTML = b
      document.querySelector(".jd").innerHTML = jd[2].company
    }
  }
  xhr.send()
}

// accomplishments

document.querySelector(".hardSavings").addEventListener("click", hardSavings)

function hardSavings() {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", "json/savings.json", true)
  xhr.onload = function () {
    if (this.status === 200) {
      const acc = JSON.parse(this.responseText)

      let i,
        a = ""
      for (i = 0; i < acc[0].details.length; i++) {
        a += acc[0].details[i] + "<br>"
      }
      // console.log(a)
      document.querySelector(".statsItems").innerHTML = a
      document.querySelector(".acc").innerHTML = acc[0].type
      document.querySelector(".pTotal").innerText = acc[0].unit
    }
  }
  xhr.send()
}

document.querySelector(".modifications").addEventListener("click", modifications)

function modifications() {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", "json/savings.json", true)
  xhr.onload = function () {
    if (this.status === 200) {
      const acc = JSON.parse(this.responseText)

      let i,
        a = ""
      for (i = 0; i < acc[1].details.length; i++) {
        a += acc[1].details[i] + "<br>"
      }
      // console.log(a)
      document.querySelector(".statsItems").innerHTML = a
      document.querySelector(".acc").innerHTML = acc[1].type
      document.querySelector(".pTotal").innerText = acc[1].unit
    }
  }
  xhr.send()
}

document.querySelector(".optimizations").addEventListener("click", optimizations)

function optimizations() {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", "json/savings.json", true)
  xhr.onload = function () {
    if (this.status === 200) {
      const acc = JSON.parse(this.responseText)

      let i,
        a = ""
      for (i = 0; i < acc[2].details.length; i++) {
        a += acc[2].details[i] + "<br>"
      }
      // console.log(a)
      document.querySelector(".statsItems").innerHTML = a
      document.querySelector(".acc").innerHTML = acc[2].type
      document.querySelector(".pTotal").innerText = acc[2].unit
    }
  }
  xhr.send()
}

document.querySelector(".qualifications").addEventListener("click", qualifications)

function qualifications() {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", "json/savings.json", true)
  xhr.onload = function () {
    if (this.status === 200) {
      const acc = JSON.parse(this.responseText)

      let i,
        a = ""
      for (i = 0; i < acc[3].details.length; i++) {
        a += acc[3].details[i] + "<br>"
      }
      // console.log(a)
      document.querySelector(".statsItems").innerHTML = a
      document.querySelector(".acc").innerHTML = acc[3].type
      document.querySelector(".pTotal").innerText = acc[3].unit
    }
  }
  xhr.send()
}
