var details=new Array();
function sputum_search()
{
	var tb_no=document.forms['sputum'].elements['tb_no'].value;
	search(tb_no);
	document.forms['sputum'].elements['nikshaya_no'].value=details[0];
	document.forms['sputum'].elements['sub_name'].value=details[1];
}
function xray_search() 
{
	var tb_no=document.forms['xray'].elements['tb_no'].value;
	search(tb_no);
	document.forms['xray'].elements['nikshaya_no'].value=details[0];
	document.forms['xray'].elements['sub_name'].value=details[1];
}
function search()
{
	xml=createAjaxObj();
		xml.open("get","./functions/_details.php?tb_no="+encodeURIComponent(tb_no),false);
		xml.send();
		details=split(xml.responseText,"|");
}
function test_sputum()
{
	var tb_no=document.forms['sputum'].elements['tb_no'].value;
	var sub_name=document.forms['sputum'].elements['sub_name'].value;
	var nikshaya_no=document.forms['sputum'].elements['nikshaya_no'].value;
	var date_of_test=document.forms['sputum'].elements['date_of_test'].value;
	var lab_no=document.forms['sputum'].elements['lab_no'].value;
	var dmc=document.forms['sputum'].elements['dmc'].value;
	var weight=document.forms['sputum'].elements['weight'].value;
	var result=document.forms['sputum'].elements['result'].value;
	xml.open("get","./functions/labreport_spuctum.php?tb_no="+encodeURIComponent(tb_no)+"&sub_name="+encodeURIComponent(sub_name)+"&nikshaya_no="+encodeURIComponent(nikshaya_no)+
		"&date_of_test="+encodeURIComponent(date_of_test)+"&dmc="+encodeURIComponent(dmc)+
		"&lab_no="+encodeURIComponent(lab_no)+"&weight="+encodeURIComponent(weight)+
		"&result="+encodeURIComponent(result),false);
	xml.send();
	alert(xml.responseText);
}
function test_xray()
{
	var tb_no=document.forms['xray'].elements['tb_no'].value;
	var sub_name=document.forms['xray'].elements['sub_name'].value;
	var nikshaya_no=document.forms['xray'].elements['nikshaya_no'].value;
	var date_of_test=document.forms['xray'].elements['date_of_test'].value;
	var lab_no=document.forms['xray'].elements['lab_no'].value;
	var weight=document.forms['xray'].elements['weight'].value;
	var dmc=document.forms['xray'].elements['x_ray'].value;
	var result=document.forms['xray'].elements['result'].value;
	xml.open("get","./functions/labreport_xray.php?tb_no="+encodeURIComponent(tb_no)+"&sub_name="+encodeURIComponent(sub_name)+
		"&nikshaya_no="+encodeURIComponent(nikshaya_no)+
		"&date_of_test="+encodeURIComponent(date_of_test)+"&lab_no="+encodeURIComponent(lab_no)+
		"&weight="+encodeURIComponent(weight)+
		"&x_ray="+encodeURIComponent(x_ray)+"&result="+encodeURIComponent(result),false);
	xml.send();
	alert(xml.responseText);
}