Vue.createApp({
  data() {
    return {
      tasks: [],
      inputValue: "",
      inputValueOnKeyDown: "",
      text: Vue,
      link: "https://vuejs.org/",
      counter: 0,
    };
  },
  methods: {
    updateOnKeyDown(event) {
      // console.log(event.target.value);
      console.log("hello1");
    },
    addTask() {
      this.tasks.push(this.inputValue);
      this.inputValue = "";
      console.log("hello3");
    },
    renderHTMl() {
      // console.log("hello4");
      return `<h1>Helllo rendering HTML</h1>`;
    },

    updateCounter() {
      console.log("hello5");
      this.counter++;
    },
  },
  computed: {
    computedFunction() {
      return this.counter + " " + "Hello from comp";
    },
  },
}).mount("#app");

Vue.createApp({
  data() {
    return {
      secondCounter: 0,
    };
  },
  methods: {
    secondUpdate() {
      this.secondCounter++;
    },
  },
}).mount("#secondApp");

// import {createApp} from 'Vue'
// const app = createApp({
//     data(){
//                 return{
//                     tasks: [],
//                     inputValue: ''
//                 }
//             },
//             methods:{
//                 addTask(){
//                     this.tasks.push(this.inputValue)
//                     this.inputValue = ''
//                 }
//             }
// })

// app.mount('#app')
