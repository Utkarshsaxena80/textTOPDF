
import {PDFDocument,rgb} from 'pdf-lib';
document.getElementById('btn').addEventListener('click',async()=>{

    const data=document.getElementById('pdf').value;
    if(!data){
        alert("enter something");
    }
 const pdfdoc= await PDFDocument.create();
 const page= pdfdoc.addPage([500,700]);
 page.drawText(data, {
    x: 50,
    y: 350,
    size: 25,
    color: rgb(0, 0, 0),
});
const pdfBytes= await pdfdoc.save();
console.log(pdfBytes);
const base64String = btoa(String.fromCharCode(...new Uint8Array(pdfBytes)));
    const dataUrl = `data:application/pdf;base64,${base64String}`;

    // Trigger download
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'output.pdf';
    document.body.appendChild(link); 
    link.click();
    document.body.removeChild(link);
//
return true;

});