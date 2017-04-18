$(document).ready(function(){
	var xu=0; var a;var tp;
  function lb($obj,tp){
       if(tp=="setInterval"){
         if(xu>=3) xu=0;
            $obj.eq(xu).addClass("hide").fadeout(800); $obj.eq(pand(xu+1)).removeClass("hide").fadein(700);  
            xu++;
            //eq()遍历集合中元素并选择给定下标的前一个
       }
       if(tp=="pre") 
       {
             if(xu>=3) xu=0;
            $obj.eq(xu).addClass("hide");
            $obj.eq(pand(xu-1)).removeClass("hide");  
            xu--;
     	}

 function pand( a){
 	if(a>=3) {
     return a=0;
  }
  else 
    {
      if(a<0) return a=2;
 	    else return a;
   }
 }
 
   // $('.header a').hover(function(e){$(this).css('color','red')});
    $('.user-card-item ').hover(function(e){
       $(".user-card").addClass("user-card-show");
    }).mouseleave(function(){
    	 $(".user-card").removeClass("user-card-show");
    });
       //hannenr 左侧边栏相关的现隐
    $('.menuContent .item').hover(function(){
         var a=$(this).attr("data-id") //返回被选元素属性值 
    	$('.'+a).removeClass("hide");	
    });
     
    $('.menuContent .item').mouseleave(function(){
        var a=$(this).attr("data-id");    
    	$('.'+a).addClass("hide"); 
    });
    $('.submenu ').hover(function(){
    	$(this).removeClass("hide");
    })
     $('.submenu ').mouseleave(function(){
    	$(this).addClass("hide");
    })
   //轮播图部分
    var lunbo=$('.banner-slide');	
   var timer=setInterval(function(){
   	     lb($('.banner-slide'),"setInterval");
   },2000);
    
    $('.banner-anchor .prev').click(function(){
         clearInterval(timer);

    });
    $('.banner-anchor .next').click(function(){
    	
    });
    $('.banner-dots span').click(function(){

    });
});