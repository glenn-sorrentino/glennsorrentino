<!doctype html>

<html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="author" content="Glenn Sorrentino">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>🧰 Simple Design System</title>
	<link rel="stylesheet" href="https://glenn-sorrentino.github.io/design-system/css/style.css">

	<script src="https://code.jquery.com/jquery-latest.min.js"></script>
	<script src="https://glenn-sorrentino.github.io/design-system/builder/js/builder.js"></script>
	<script src="https://glenn-sorrentino.github.io/design-system/components/chat/js/chat.js"></script>
	<script src="https://glenn-sorrentino.github.io/design-system/js/main.js"></script>
</head>

<body id="builder">

	<section class="canvas">

		<!-- NOTIFICATIONS -->

		<?php include "components/notification/html/notification.html" ?>

		<!-- BODY -->

		<?php include "templates/instructions.php" ?>
		<?php include "templates/home-template.php" ?>
		<?php include "templates/secondary-template.php" ?>
		<?php include "templates/article-template.php" ?>
		<?php include "templates/table-template.php" ?>
		<?php include "templates/chat-template.php" ?>

	</section> <!-- END CANVAS -->

	<!-- FILTERS -->

	<aside>

		<?php include "components/filters/html/filters.html" ?>

	</aside>

</body>

</html>
