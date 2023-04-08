<?php 
// Use in the "Post-ReceiveURLs" section of your GitHub repo.
if ( $_POST['payload'] ) {
    shell_exec('cd ~/public_html && git pull');
}
