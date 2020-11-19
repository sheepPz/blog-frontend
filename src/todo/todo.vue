<template>
    <section class="real-app">
        <template>
        <input
            type="text"
            class="add-input"
            autofocus="autofocus"
            :placeholder="todoMsg"
            @keyup.enter="addTodo"
            :disabled="todos.length >= 10"
        >
        </template>
        <Item
            v-for="todo in filterTodos"
            :todo="todo"
            :key="todo.id"
            @del="deleteTodo"
        />
        <Tabs
            :filter="filter"
            :todos="todos"
            @toggle="toggleFilter"
            @clearAll="clearAllCompletedTodo"
        />
    </section>
</template>

<script>
    import Item from './item.vue';
    import Tabs from './tabs.vue';
    import {constants} from 'crypto';

    let id = 0;

    export default {
        data() {
            return {
                todos: [],
                filter: 'all'
            }
        },
        components: {
            Item,
            Tabs
        },
        computed: {
            filterTodos() {
                if (this.filter === 'all') {
                    return this.todos;
                }
                const filterCompleted = this.filter === 'completed';
                return this.todos.filter(todo => todo.completed === filterCompleted);
            },
            todoMsg() {
                let msg = '接下来做什么';
               if (this.todos.length >= 10) {
                    msg = '要做的事情已经很多了,解决完一些再做安排吧';
               } else if(this.todos.length >= 8) {
                    msg = '要做的事好多啊,接下来要..';
               } else if (this.todos.length >= 6) {
                    msg = '唔.. 还有安排吗';
               } else if (this.todos.length >= 3) {
                    msg = '还有什么要做呢';
               }
               return msg;
            }
        },
        methods: {
            addTodo(e) {
                const value = e.target.value.trim()
                console.log(e);
                if (value) {
                    this.todos.unshift({
                        id: id++,
                        content: e.target.value,
                        completed: false
                    });
                    e.target.value = '';
                }
            },
            deleteTodo(id) {
                this.todos.splice(this.todos.findIndex(todo => id === todo.id), 1);
            },
            toggleFilter(state) {
                console.log(state);
                this.filter = state;
            },
            clearAllCompletedTodo() {
                this.todos = this.todos.filter(todo => todo.completed === false);
            }
        }
    }
</script>

<style lang="less" scoped>
    .real-app {
        width: 600px;
        margin: 0 auto;
        box-shadow: 0 0 5px #666;
    }
    .add-input {
        position: relative;
        margin: 0;
        width: 100%;
        font-size: 24px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.4em;
        border: none;
        outline: none;
        color: inherit;
        box-sizing: border-box;
        font-smoothing: antialiased;
        padding: 16px 16px 16px 36px;
        border: none;
        box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
        background-color: #ffffff;
    }
</style>


