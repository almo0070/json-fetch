let url = 'https://picsum.photos/v2/list?limit=8';

fetch(url)
.then(response=>response.json())
.then(data=>{
    /** //console.log(data);
    console.log(data[0].download_url);
    console.log(data[0].width);
    console.log(data[0].height);
    let img = document.createElement('img');**/
    
        for(let i=0; i<8; i++){
        let img = document.createElement('img');
        let img_url = data[i].download_url;
        img_url =img_url.replace(data[i].width, "400");
        img_url =img_url.replace(data[i].height, "300");
        img.src = img_url;
        img.alt = data[i].author
        document.body.appendChild(img);
        }
        
    /** 
    
    **/
    
})

.catch(err => {
            let nm = err.name;  //Error Type
            let msg = err.message;  //The error message
            alert(`CATCH: ${nm} ${msg}`);
})
