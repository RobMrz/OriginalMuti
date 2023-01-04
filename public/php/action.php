<?php
    extract($_REQUEST);
    $file=fopen("D:/xampp/htdocs/Websites/2022/Blog/Assets/Blog/Blog_Posts.php","a");

    fwrite($file,"Blog_Text :");
    fwrite($file, $newBlogText);
    fwrite($file, "," ."\n");

    fclose($file);

    echo "File Stored";
?>