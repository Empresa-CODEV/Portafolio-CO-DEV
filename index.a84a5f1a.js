// Example starter JavaScript for disabling form submissions if there are invalid fields
(()=>{// Fetch all the forms we want to apply custom Bootstrap validation styles to
let e=document.querySelectorAll(".needs-validation");// Loop over them and prevent submission
Array.from(e).forEach(e=>{e.addEventListener("submit",t=>{e.checkValidity()||(t.preventDefault(),t.stopPropagation()),e.classList.add("was-validated")},!1)})})(),document.querySelectorAll(".form-control").forEach(e=>{e.addEventListener("change",()=>{""!==e.value?e.classList.add("complete"):e.classList.remove("complete")})});//# sourceMappingURL=index.a84a5f1a.js.map

//# sourceMappingURL=index.a84a5f1a.js.map
