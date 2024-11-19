const cloudName = "dthahjfc5";
const unsignupPresent = "ml_default";

let inputFile = document.getElementById("inputFile");
let gallery = document.getElementById("gallery");

inputFile.addEventListener("change",()=>{
    let file = inputFile.files[0];
    let url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

    let fd = new FormData();
    fd.append("upload_present",unsignupPresent);
    fd.append("file",file);

    fetch(url,{
        method:"POST",
        body:fd
    })

    .then((response)=>response.json)
    .then((data) => {
        let resorseUrl= data.secure_url;
        console.log("upload successfully",resorseUrl);

let img = new Image();
img.src = resorseUrl;
gallery.appendChild(img);


const pdfEmbed = document.createElement("embed")
pdfEmbed.src = resourceURl
pdfEmbed.type = "application/pdf"
gallery.appendChild(pdfEmbed)




    })

    .catch((e) =>{
        console.log(e);
    });
})

let dropover = document.getElementById("dropover");

dropover.addEventListener("dragover",()=>{
    console.log("drag over");
})
dropover.addEventListener("dragleave",()=>{
    console.log("drad leaving")
});
dragover.addEventListener("drop",(event)=>{
event.stopPropagation();
event.preventDefault();
console.log("dropped!");

console.log(event.dataTransfer.files);
});