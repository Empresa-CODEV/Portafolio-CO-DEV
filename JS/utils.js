let inputs = document.querySelectorAll('.form-control')

inputs.forEach(input => {
    input.addEventListener('change', () => {    
        if(input.value!==''){
            input.classList.add('complete')
        }else{
            input.classList.remove('complete')
        }
    })
})