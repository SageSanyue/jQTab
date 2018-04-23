document.querySelectorAll('.tab .btn').forEach(function(node){
  node.addEventListener('click',function(){
      var index
      this.parentElement.querySelectorAll('.btn').forEach(function(btn,idx){
          btn.classList.remove('active')
          if(node === btn){
              index = idx
          }
      })
      this.classList.add('active')
      this.parentElement.nextElementSibling.querySelectorAll('.panel').forEach(function(panel){
          panel.classList.remove('active')
      })
      this.parentElement.nextElementSibling.querySelectorAll('.panel')[index].classList.add('active')
  })
})