<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'thefoqd0_WPQ8I');

/** Database username */
define('DB_USER', 'thefoqd0_WPQ8I');

/** Database password */
define('DB_PASSWORD', 'W5lck^{FJo%PGz4?j');

/** Database hostname */
define('DB_HOST', 'localhost');

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '83bb7934328fab108fb94486f5eaee86274897e4e622a630c5b7a3ffaf292ad2');
define('SECURE_AUTH_KEY', '9bff104517f63b5c08add5a8fcc203a9a157109ce5ead09b0514941f21226dd3');
define('LOGGED_IN_KEY', '2eb4ba62e3fb975557b6d507cc3f8da985e94b753d6485982397ac15fbc1ebb4');
define('NONCE_KEY', '86f2f1a85054be5acaa2d8f1405095704a0e84e93948989e0faca3431fcb5884');
define('AUTH_SALT', 'a5ce5eaa65b88341d36b5f7fa49d8783bf55c22c08c3a0cd24c4261bda701d09');
define('SECURE_AUTH_SALT', 'f4a34e26ab5ed4eecb7a5d0cd148a6bc01688579afd81f49f94ddf5ab9fd8d48');
define('LOGGED_IN_SALT', '5c700a8fe02301ebd02374a9da7c91ed6894207da3873e1877df44ad2d2c9d6b');
define('NONCE_SALT', 'a52cedc5b2f83b8ed611b58d24835da6c89d25106b3a035fa4c7c678e11c042b');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = '4lA_';
define('WP_CRON_LOCK_TIMEOUT', 120);
define('AUTOSAVE_INTERVAL', 300);
define('WP_POST_REVISIONS', 20);
define('EMPTY_TRASH_DAYS', 7);
define('WP_AUTO_UPDATE_CORE', true);

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
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
