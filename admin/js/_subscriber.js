//var str="";
function addSubscriber()
{
	var tb_no=document.forms['patientAddForm'].elements['tb_no'].value;
	var tb_unit=document.forms['patientAddForm'].elements['tb_unit'].value;
	var nikshaya_no=document.forms['patientAddForm'].elements['nikshaya_no'].value;
	var name_phi=document.forms['patientAddForm'].elements['name_phi'].value;
	
	var subName=document.forms['patientAddForm'].elements['subName'].value;
	var subSex=document.forms['patientAddForm'].elements['subSex'].value;
	var subDOB=document.forms['patientAddForm'].elements['subDOB'].value;
	var subEducation=document.forms['patientAddForm'].elements['subEducation'].value;
	var subOccupation=document.forms['patientAddForm'].elements['subOccupation'].value;
	var subContact=document.forms['patientAddForm'].elements['subContact'].value;
	var subAddress=document.forms['patientAddForm'].elements['subAddress'].value;
	var subCity=document.forms['patientAddForm'].elements['subCity'].value;
	var subState=document.forms['patientAddForm'].elements['subState'].value;
	alert("Subscriber Complete");
	//return false;
	var str="tb_no="+encodeURIComponent(tb_no)+
			"&tb_unit="+encodeURIComponent(tb_unit)+
			"&nikshaya_no="+encodeURIComponent(nikshaya_no)+
			"&name_phi="+encodeURIComponent(name_phi)+
			"&subName="+encodeURIComponent(subName)+
			"&subSex="+subSex+
			"&subDOB="+encodeURIComponent(subDOB)+
			"&subEducation="+subEducation+
			"&subOccupation="+subOccupation+
			"&subAddress="+encodeURIComponent(subAddress)+
			"&subContact="+encodeURIComponent(subContact)+
			"&subCity="+encodeURIComponent(subCity)+
			"&subState="+encodeURIComponent(subState);
			
	contact_person(str);	
	return false;
}
function contact_person(str)
{
	var csubName=document.forms['patientAddForm'].elements['csubName'].value;
	var csubAddress=document.forms['patientAddForm'].elements['csubAddress'].value;
	var csubContact=document.forms['patientAddForm'].elements['csubContact'].value;
	var csubCity=document.forms['patientAddForm'].elements['csubCity'].value;
	var csubState=document.forms['patientAddForm'].elements['csubState'].value;
	var realtionship=document.forms['patientAddForm'].elements['realtionship'].value;
	alert("contact_person complete");
	str=str+"&csubName="+encodeURIComponent(csubName)+
			"&csubAddress="+encodeURIComponent(csubAddress)+
			"&csubContact="+csubContact+
			"&csubCity="+csubCity+"&csubState="+encodeURIComponent(csubState)+"&realtionship="+realtionship;
			
			
	dot_provider(str);
	//return false;
}
function dot_provider(str)
{
	var dsubName=document.forms['patientAddForm'].elements['dsubName'].value;
	var dsubAddress=document.forms['patientAddForm'].elements['dsubAddress'].value;
	var dsubContact=document.forms['patientAddForm'].elements['dsubContact'].value;
	var dsubCity=document.forms['patientAddForm'].elements['dsubCity'].value;
	var dsubState=document.forms['patientAddForm'].elements['dsubState'].value;
	str=str+"&dsubAddress="+encodeURIComponent(dsubAddress)+
			"&dsubName="+dsubName+
			"&dsubContact="+dsubContact+
			"&dsubCity="+encodeURIComponent(dsubCity)+
			"&dsubState="+dsubState;
			
	alert("dot_provider complete");
	medical_details(str);	
}	
function medical_details(str)
{
	var sub_doc=document.forms['patientAddForm'].elements['sub_doc'].value;
	var tb_type=document.forms['patientAddForm'].elements['tb_type'].value;
	var sub_type=document.forms['patientAddForm'].elements['sub_type'].value;
	var subBG=document.forms['patientAddForm'].elements['bg_type'].value;
	var PhaseofTreatment=document.forms['patientAddForm'].elements['PhaseofTreatment'].value;
	var DiseasesClassification=document.forms['patientAddForm'].elements['DiseasesClassification'].value;
	
	str=str+"&sub_doc="+encodeURIComponent(sub_doc)+
			"&tb_type="+tb_type+
			"&sub_type="+encodeURIComponent(sub_type)+
			"&PhaseofTreatment="+PhaseofTreatment+
			"&DiseasesClassification="+encodeURIComponent(DiseasesClassification)+
			"&subBG="+encodeURIComponent(subBG);
	
	alert("medical_details complete");
	str_create(str);

}	
function str_create(str)
{
			//console.log(str);
			//var str="tb_no=1&tb_unit=1&nikshaya_no=11&name_phi=sdvs&subName=jiten&subSex=F&subDOB=2014-12-30&subEducation=Diploma&subOccupation=farmer&subAddress=sdfs&subContact=1&subCity=1&subState=Kerala&csubName=dsf&csubAddress=asf&csubContact=sdfs&csubCity=ascad&csubState=Kerala&realtionship=None&dsubAddress=sdf&dsubName=asad&dsubContact=1&dsubCity=asdas&dsubState=Kerala&sub_doc=DOC0001&tb_type=101&sub_type=101&PhaseofTreatment=new&DiseasesClassification=tb&subBG=a+";
			ajax_create(str);
			return false;
}
function ajax_create(st)
{
		alert(st);
		//
		xml=createAjaxObj();
		alert(xml);
		xml.open("POST","./functions/addSubscriber.php",false);
		xml.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xml.send(st);	
	//	alert("DONE");
		alert(xml.responseText);
	
	//return false;

}
	
	