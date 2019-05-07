<?php
include '../header.php';
?>
    <div id="app">
      {{ message }}
    </div>
    <div id="app-2">
      <span v-bind:title="message">
        Hover your mouse over me for a few seconds
        to see my dynamically bound title!
      </span>
    </div>
    <div id="app-3">
      <span v-if="seen">Now you see me</span>
    </div>
    <div id="app-4">
      <ol>
        <li v-for="todo in todos">
          {{ todo.text }}
        </li>
      </ol>
    </div>
    <div id="app-7">
      <ol>
        <!--
          Now we provide each todo-item with the todo object
          it's representing, so that its content can be dynamic.
          We also need to provide each component with a "key",
          which will be explained later.
        -->
        <todo-item
          v-for="item in groceryList"
          v-bind:todo="item"
          v-bind:key="item.id"
        ></todo-item>
      </ol>
    </div>

    <div id="app-8">
        <ul>
            <li v-for="name in names" v-text="name"></li>
        </ul>
        <input id="newName" type="text" v-model="newName">
        <button v-on:click="addName">Add Name</button>
    </div>

    <div id="app-9">
        <button :class="{ 'is-loading' : isLoading}" @click="toggleClass">Toggle Me</button>
        <button :disabled="disabled" @click="disableMe">Disable Me</button>
    </div>
    <script src="../js/ep1-5.js"></script>
<?php
include '../footer.php';
?>
