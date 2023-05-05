<template>
    <div class="overlay">
        <div class="overlay-card">
            <div class="overlay-card-text">
                <p>Are You Sure Want to Delete?</p>
            </div>
            <div class="overlay-button-container">
                <button class="custom-green">Yes</button>
                <button class="custom-red">No</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
    padding: 0;
    margin: 0;
}

.overlay {
    min-height: 100vh;
    min-width: 100vw;
    background-color: rgba(0, 0, 0, 0.418);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 999;
}

.overlay-card {
    background-color: white;
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0px 0px 3px rgb(109, 109, 109);
}

.overlay-button-container {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
}

.overlay-card-text {
    font-size: 1.2rem;
}

.overlay-button-container > button {
    border: none;
    width: 100px;
    padding: 4px 8px;
    border-radius: 5px;
    color: white;
    font-size: 20px;
}

.custom-green {
    background-color: green;
}

.custom-red {
    background-color: red;
}

.custom-green:active {
    background-color: rgb(0, 85, 0);
}

.custom-red:active {
    background-color: rgb(146, 0, 0);
}
</style>
