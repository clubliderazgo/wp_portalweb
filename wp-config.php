<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'clublide_wp' );

/** MySQL database username */
define( 'DB_USER', 'clubliderazgo_wp' );

/** MySQL database password */
define( 'DB_PASSWORD', '4dm1n_clu6l1d3' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'wlGQdVILa>}A09~+(!c_?N^S1~8N9kyrNZg3AA(?ly*@J*^N0+>Ee0=mBT(RO2.M' );
define( 'SECURE_AUTH_KEY',  'u,9ynF1%dl^i?f.9j38.CC0y4t4_8JF/T!Ho_o(*Q<j};z/b,,mY;j< 4d]7w{,;' );
define( 'LOGGED_IN_KEY',    '~Jz&6k)1wg&Kp3#DJt%c2<nHgKT2U?rXq}nTV+jW08!=,@f${Zg0gO^sq<%x+6h?' );
define( 'NONCE_KEY',        '[29K]&DCzE@_=]I]@!{4a)V]dRcY-tzzv` 3_bJ*c|Of&y1B]BioL2o.FGi~cWSs' );
define( 'AUTH_SALT',        'R8~plq4Cuj{6,Ey:u4%!=9;~,J3luPn@soU<{[qn`z3,dozsig:WPQass%0M>4qs' );
define( 'SECURE_AUTH_SALT', 'g_jDfP|kHGPAr9eyU-q}Q$Erw=mkFK5#iSiQ[U6O>k*tfO:&S1,PBH|$(a/h!Q?`' );
define( 'LOGGED_IN_SALT',   'G2@_C-*YH&d2rJ-1b+s!6<}$V`+]quR@WR^rm}`!&iN~B/>q0Jp$c[HN`v<pb~[G' );
define( 'NONCE_SALT',       '(.gC.XZNJnE`;H/e+5k3$Hs8NepR <)-xfj5O*:s8u|u<Zq_jUUt(&HP8+Sei4F:' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_clubliderazgo';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
