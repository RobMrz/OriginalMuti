<!DOCTYPE html>
<html>

<head>
    <title>Blog</title>
    <link rel="stylesheet" type="text/css" href="/public/css/styles.css">

     <!-- Latest compiled and minified CSS -->
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">

     <!-- Latest compiled JavaScript -->
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

</head>

<body>

    <div id="homepage-heading">
        <h1>Blog</h1>
        <h4>Suppliers of Competitive Angling Equipment</h4>
    </div>

    <nav class="navbar navbar-expand-sm bg-light justify-content-center">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="/index.html">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="Inventory.html">Inventory</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="Gallery.html">Gallery</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="Blog.html">Blog</a>
            </li>
        </ul>
    </nav> 
    
    <!-- <div id="home-page-main-text">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptate facere? <br>
            Tenetur dolores, laboriosam assumenda laborum numquam ad corporis, <br>
            sit et debitis vero architecto, inventore totam quae ex delectus possimus! <br>
        </p>
        
    <div id="home-page-image">
        <img src="/Websites/2022/Blog/Assets/Pages/In Water.png" alt="Image Failed to Load">
    </div> -->

    <?php
        $posts = include 'D:/xampp/htdocs/Websites/2022/Blog/Assets/Blog/Blog_Posts.php'; 
        $phparray = array($posts);
        echo "Posts Array: " . $phparray[0];
    ?>


    <form action="/public/php/action.php" method="post">
        <input type="text" name="newBlogText"><br>
         <input type="submit" value="Submit Post">
      </form>

</body>

</html>

