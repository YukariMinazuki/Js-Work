function checkName() {
	var uName = document.getElementById("name");

	if(uName.value.trim().length == 0) {
		alert("用户昵称不能为空！");
		uName.focus();
		return false;
	}
	if(uName.value.trim().length < 4 || uName.value.trim().length > 16) {
		alert("昵称无效，应该是4-16个字符");
		return false;
	}

	return true;
}

function checkPasswork() {
	var uPasswork = document.getElementById("password");
	var uPasswork2 = document.getElementById("password2");

	if(uPasswork.value.trim().length == 0) {
		alert("密码不能为空！");
		uPasswork.focus();
		return false;
	}
	if(uPasswork.value.trim().length < 6 || uPasswork.value.trim().length > 16) {
		alert("密码无效，应该是6-16个字符");
		return false;
	}
	if(uPasswork.value.trim() != uPasswork2.value.trim()) {
		alert("密码不一致！");
		return false;
	}

	return true;
}

function checkemail() {
	var uEmail = document.getElementById("email");
    var reg = /^\w+@\w+\.\w+[(com)|(cn)]$/;
    
    if(uEmail.value.trim().length == 0) {
		alert("邮箱不能为空！");
		uEmail.focus();
		return false;
	}   
    
	if (reg.test(uEmail.value)==false) {
		alert("邮箱格式不对！");
		uEmail.focus();
		return false;
	}
	
	return true;
}

function checkAll() {
	if(!checkName() || !checkPasswork() || !checkemail()) {
		return false;
	} else {
		return true;
	}
}