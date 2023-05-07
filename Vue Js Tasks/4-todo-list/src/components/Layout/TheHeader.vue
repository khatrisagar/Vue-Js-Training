<template>
    <header class="header-wrappper">
        <div class="header-container">
            <nav class="navbar">
                <ul class="list-container">
                    <li class="listLink" :class="addUserBtn"  @click="addUser" >Add User</li>
                    <li class="listLink" :class="viewDataBtn" @click="viewData" >View Data</li>
                </ul>
            </nav>
        </div>
    </header>
</template>


<script>
    export default {
        props:['addUserBtn' , 'viewDataBtn'],
        methods:{
            addUser(){
                this.$emit('addUser')
            },
            viewData(){
                this.$emit('viewData')
            },
        }
    }

</script>

<style scoped>

*{
        margin:0;
        padding: 0;
        box-sizing: border-box;
       }
       li{
        list-style: none;
       }
       .header-container{
        /* background-color: #e2e2e2; */
        justify-content: flex-end;
        margin-right: 1rem;
        height: 50px;
        display: flex;
        align-items: center;

       }
       .list-container{
        display: flex;
        flex-direction: row;
        column-gap: 1rem;
       }

       .listLink{
        border: 1px solid white;
        font-size: 20px;
        width: 150px;
        text-align: center;
        padding: 4px 6px;
        border-radius: 4px;
        font-weight: 700;
        background: linear-gradient(to right, #2ebdff, #076aff);    
        color:white;    
        box-shadow: 0px 0px 3px rgb(129, 129, 129);
        cursor: pointer;
        display: block;
       }
       .listLink:active{
        border: 1px solid black
       }
       .active{
        display: none;
       }
</style>