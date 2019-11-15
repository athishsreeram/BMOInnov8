function wentto() {
            window.location = "file:////Users/anharay/IdeaProjects/BMOInnov8/wantto.html" ;
}

function simplePost(){
		/**$.ajax({
			type : "POST",
			//the url where you want to sent the userName and password to
			url : appurl+"circles.php",
			dataType : 'json',
			async : false,
			//json object to sent to the authentication url
			data : {
				userdetail : '{"username": "' + userName + '", "password" : "'
						+ password + '"}',
				login : "yes"
			},
			success : function(data) {
				if (data.username != "") {
					$.mobile.loading("hide");
					console.timeEnd("concatenation");
					window.localStorage.setItem("userdetail", JSON
							.stringify(data));
					navigator.app
							.loadUrl("file:///android_asset/www/home.html");
				}
			},
			error : function(data) {
				$.mobile.loading("hide");
				console.log(data);
				if (typeof data.responseText != 'undefined') {
					$("#error").html("Error in login " + data.responseText);
				} else {
					$("#error").html("Trun On Your Internet");
				}
			}
		})*/
}