/**
 * 
 */
function a(){
	name = "Aaaa";
}
Person{
	name = "asd";
	Person.prototype.name = new a();
}
a.prop = "aet";
a.prototype= new Person();
a.name = "shit";
a.aaa = "aaasdasda";

$(function(){
	$("#test").html(a.prototype.name);	
})
