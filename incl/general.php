<?php

	add_theme_support( 'post-thumbnails' );

	add_action( 'wp_enqueue_scripts', 'enqueue_styles' );
	add_action( 'wp_footer', 'enqueue_scripts' );


	function enqueue_styles() {
		// load styles
		wp_enqueue_style( 'roboto', 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', '', NULL);
		wp_enqueue_style( 'pangolin_font', 'https://fonts.googleapis.com/css2?family=Pangolin', '', NULL);
		wp_enqueue_style( 'magnific_popup', THEME_URL .'/assets/css/magnific-popup.css', '', NULL);
		wp_enqueue_style( 'normalize', THEME_URL .'/assets/css/normalize.css', '', NULL);
		wp_enqueue_style( 'site_styles', THEME_URL .'/style.css', '', NULL);
	}


	function enqueue_scripts() {
		// load scripts
		wp_enqueue_script( 'jquery' );
		wp_enqueue_script( 'magnific_popup', THEME_URL .'/assets/js/jquery.magnific-popup.min.js' , '', NULL);
		wp_enqueue_script( 'font_awesome', 'https://kit.fontawesome.com/6e03838b33.js' , '', NULL);
		wp_enqueue_script( 'site_scripts', THEME_URL . '/scripts.js', '', NULL);
	}