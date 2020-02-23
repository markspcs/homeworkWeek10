module.exports = {
	main(e) {
		return `<!DOCTYPE html>
		    <html lang="en-us">
			<head>

			<meta charset="UTF-8">
			<title>My Team</title>
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        		integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
			<link rel="stylesheet" href="../style.css">
		</head>
		<body>
			<div class="header d-flex align-items-center justify-content-center">
				<h1>My Team</h1>
			</div>
			<div class="container mt-5">
				<div id="main" class="row row-cols-1 row-cols-md-3">
					${e}
				</div>
			</div>
		</body>
		</html>`;
	},
};
