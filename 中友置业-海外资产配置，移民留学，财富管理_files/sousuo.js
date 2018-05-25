$(function(){
	$('#ico').click(function(){
		var title = $('#title').val();
		if(title.length == 0){
			alert('请输入关键字关键词');
			return false;
		}
		document.forms.action="chaxuns.html";
		document.forms.submit();
	})
$(".to-top").click(function(){
		$("html,body").animate({scrollTop:0},500);
})
window.onscroll=function(){
	var sTop=document.body.scrollTop+document.documentElement.scrollTop;
	if(sTop>500){
		$('.float-contact').css("opacity",1);
	}else{
		$('.float-contact').css("opacity",0);
	}
};



})