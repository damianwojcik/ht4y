<!DOCTYPE html>
<html lang="en">

<head>

	<!-- Basic Page Needs
	================================================== -->
	<meta charset="<?php bloginfo('charset'); ?>" />
	<title><?php wp_title(); ?></title>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<link rel="icon" href="<?= THEME_URL; ?>/favicon.ico" type="image/png">
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />


	<!-- HTML 5 SUPPORT
	================================================== -->
	<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->


	<?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>

	<header class="header">
		<div class="top-panel">
			<div class="container">
				<div class="left">
					<p><a href="tel: 01304201029">01304201029</a></p>
					<p><a href="mailto: holistictherapy4you@gmail.com">holistictherapy4you@gmail.com</a></p>
					<p>Tuesday - Saturday 10:00 - 18:00</p>
				</div>
				<div class="right">
					<ul>
						<li><a href="https://www.facebook.com/holstictherapy/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></i></a></li>
						<li><a href="https://www.instagram.com/holistictherapy4you/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a></li>
					</ul>
				</div>
			</div>
			<!-- /.container -->
		</div>
		<div class="nav">
			<div class="container">
				<h1 class="logo">
					<a href="<?= SITE_URL; ?>">Holistic Therapy</a>
				</h1>
				<ul>
					<li><a href="#about">About</a></li>
					<li><a href="#massages">Massages</a></li>
					<li><a href="#benefits">Benefits</a></li>
					<li><a href="#prices">Prices</a></li>
					<li><a href="#gallery">Gallery</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
				<div class="toggle">
					<span class="toggle__line"></span>
					<span class="toggle__line"></span>
					<span class="toggle__line"></span>
				</div>
				<a href="https://www.fresha.com/providers/ostrowiec85-b7ske4tt?pId=415941" class="btn btn-cta" target="_blank" rel="noopener noreferrer">Book now!</a>
			</div>
			<!-- /.container -->
		</div>
	</header>