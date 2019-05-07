<?php
include '../header.php';
?>
    <div id="episode-6">

        <h2>All Tasks</h2>

        <ul>
            <li v-for="task in tasks" v-text="task.description"></li>
        </ul>


        <h2>Complete Tasks</h2>

        <ul>
            <li v-for="task in completeTasks" v-text="task.description"></li>
        </ul>

        <h2>Incomplete Tasks</h2>

        <ul>
            <li v-for="task in incompleteTasks" v-text="task.description"></li>
        </ul>


    </div>
    <script src="../js/ep6.js"></script>
<?php
include '../footer.php';
?>
