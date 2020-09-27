<footer>

<?php $time= date("H");
     if($time>23 or $time< 6){?>
        <p>We are now closed!</p>
    <?php }?>
    <?php 
     if($time>6 or $time< 23){?> 
       <p>We are open!</p>
     <?php }?>
    
</footer>


</body>
</html>