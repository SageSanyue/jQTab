$('.tab .btn').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active')
    
    $(this).parents('.tab').find('.panel').eq($(this).index()).addClass('active').siblings().removeClass('active')
})