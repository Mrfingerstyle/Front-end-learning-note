<template>
    <div>
        {{n}}
        {{n + 1}}
        {{this.n}}
        <button @click='add'>+ 1</button>
        <div v-pre>{{n}}</div>
        <div v-html="x"></div>
        <img v-bind:src="src" alt="test img"/>
        <div :style="{border: '1px solid red', width: '100px', height: '100px'}"></div>

        <button v-on:click='add'>+ 1</button>
        <button v-on:click='add(1)'>+ 1</button>
        <button v-on:click='n += 1'>+ 1</button>
        <div v-if="n > 0">
            n &gt; 0
        </div>
        <div v-else-if="n === 0">
            x === 0
        </div>
        <div v-else>
            x &lt; 0
        </div>
        <ul>
            <li v-for="(u, index) in users" :key="index">index: {{index}} value: {{u.name}}</li>
        </ul>
        <ul>
            <li v-for="(value, name) in obj" :key="name">
                name: {{name}} value: {{value}}
            </li>
        </ul>

        <div v-show="n % 2 === 0">n是偶数</div>
        <div v-bind:style="{display: n % 2 === 0 ? 'block': 'none'}">n是偶数</div>

        <a @click.prevent='xxx' href="https://www.baidu.com">baidu</a>
        <input @keypress.enter="y" />
        

    </div>


</template>
<script>
    export default {
        data() {
                return {
                    n: 0,
                    x: '<strong>hi</strong>',
                    src: require('./assets/logo.png'),
                    users: [
                        {name: 'l1'},
                        {name: 'l2'},
                        {name: 'l3'},
                    ],
                    obj: {
                        name1: 'l1',
                        name2: 'l2',
                        name3: 'l3',
                    }
                }
            },
            methods: {
                add() {
                    this.n += 1
                },
                xxx() {
                    console.log('x');
                },
                y(){
                    console.log('用户点击enter');
                }
            }
    }
</script>

<style>
div{
    font-size: 30px
}
</style>
