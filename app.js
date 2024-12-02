const cloudName = "dthahjfc5";
const unsignupPreset = "uvp8utxc";

let inputFile = document.getElementById("inputFile");
let gallery = document.getElementById("gallery");

inputFile.addEventListener("change",()=>{
    let file = inputFile.files[0];
    let url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

    let fd = new FormData();
    fd.append("upload_preset",unsignupPreset);
    fd.append("file",file);

    fetch(url,{
        method:"POST",
        body:fd,
    })

    .then((response) => response.json())
    .then((data) => {
        let resourseUrl= data.secure_url;
        // if (!resourseUrl) {
        //     console.error("Upload failed: no secure URL returned.");
        //     return;
        // }

        let transformedUrl = resourseUrl.replace(
            "upload/",
            "upload/h_200,w_200/r_max/c_crop,g_face"

        );
        console.log("upload successfully",resourseUrl);

        console.log(data);


if(data.format == "pdf" || data.format == "mp4" ){
    let iframe = document.createElement("iframe");
    iframe.src = resourseUrl;
    iframe.width = "500px";
    iframe.height = "500px";
    gallery.appendChild(iframe);
    console.log(iframe);
}

else{
    let img = new Image();
    img.src = transformedUrl;
    gallery.appendChild(img);
}
    })

    .catch((e) =>{
        console.log(e);
    });
});




// const pdfEmbed = document.createElement("embed")
// pdfEmbed.src = resourceURl
// pdfEmbed.type = "application/pdf"
// gallery.appendChild(pdfEmbed)

   

let dropArea = document.getElementById("dropArea");

dropArea.addEventListener("dragover",()=>{
    e.preventDefault();
    console.log("drag over");
})
dropArea.addEventListener("dragleave",()=>{
    console.log("drad leaving")
});
dragover.addEventListener("drop",(event)=>{
event.stopPropagation();
event.preventDefault();
console.log("dropped!");

console.log(event.dataTransfer.files);
});