function checkStatus() {
		$.ajax({
			type: 'GET',
			url: "https://api.twitch.tv/helix/streams?user_id=xproto_live",
			headers: {
				'Client-ID': '796pe2sozf7b012pyalq29tn1cfdmu'
			},
			success: function(newData) {
			
			if (newData.data.length === 0) {
				window.alert("offline");

				} else {
                    window.alert("online");
                }}}