(function(){
    const form = document.querySelector("#formu")
    form.addEventListener('submit',function(e){
        e.preventDefault()
        const msg = document.querySelector('.box')
        const feedback = document.querySelector('.feedback')
        const msgc = document.querySelector('#dyn')

        if(msg.value === ''){
            feedback.classList.add('show')
            setTimeout(function(){
                feedback.classList.remove('show')
            },4000)
        }else{
            msgc.textContent=msg.value
            msg.value=''
        }

    })
})()