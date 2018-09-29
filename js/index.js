with(document.index){
	onsubmit = function(e){
		e.preventDefault();
		ok = true;
		if(ok && username.value==""){
			ok=false;
			alert("Debe escribir un nombre");
			username.focus();
		}
		if(ok && email.value==""){
			ok=false;
			alert("Debe escribir su email");
			email.focus();
		}
		if(ok && comment.value==""){
			ok=false;
			alert("Debe escribir su mensaje");
			comment.focus();
		}
		if(ok){  }
	}
}
