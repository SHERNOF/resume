

document.querySelector('.Cognex').addEventListener('click', cognexJD);
document.querySelector('.Sanmina').addEventListener('click', sanminaJD);
document.querySelector('.PCI').addEventListener('click', pciJD);
document.querySelector('.Samsung').addEventListener('click', samsungJD);
document.querySelector('.ionics').addEventListener('click', ionicsJD);

function cognexJD(){

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'json/jd.json', true);
    xhr.onload = function(){
    
        if(this.status === 200){
            const jd = JSON.parse(this.responseText)

            let i, b = "";
            for(i=0; i < jd[0].jobdesc.length; i++){
                b += jd[0].jobdesc[i] + "<br>";
            }
            document.querySelector('.listItems').innerHTML = b;
            document.querySelector('.modal-title').innerHTML = jd[0].company;
            } 
        }
        xhr.send();
    }

    function sanminaJD(){

        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'json/jd.json', true);
        xhr.onload = function(){
        
            if(this.status === 200){
                const jd = JSON.parse(this.responseText)
    
                let i, b = "";
                for(i=0; i < jd[1].jobdesc.length; i++){
                    b += jd[1].jobdesc[i] + "<br>";
                }
                document.querySelector('.listItems').innerHTML = b;
                document.querySelector('.modal-title').innerHTML = jd[1].company;
                } 
            }
            xhr.send();
        }

        function pciJD(){

            const xhr = new XMLHttpRequest();
            xhr.open('GET', 'json/jd.json', true);
            xhr.onload = function(){
            
                if(this.status === 200){
                    const jd = JSON.parse(this.responseText)
        
                    let i, b = "";
                    for(i=0; i < jd[2].jobdesc.length; i++){
                        b += jd[2].jobdesc[i] + "<br>";
                    }
                    document.querySelector('.listItems').innerHTML = b;
                    document.querySelector('.modal-title').innerHTML = jd[2].company;
                    } 
                }
                xhr.send();
            }


