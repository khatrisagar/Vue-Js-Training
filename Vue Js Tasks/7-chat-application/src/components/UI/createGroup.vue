<template>
    <div class="create-group-form-wrapper">
        <div class="form-element">
            <label for="group-name" class="form-label">Group Name</label>
            <input type="text" id="group-name" v-model="groupName" />
        </div>

        <div class="form-element">
            <label for="selected-users">Add User Id</label>
            <div class="flex flex-row">
                <input type="number" id="selected-users" v-model="searchUser" />
                <button @click="setToGroupList">+</button>
            </div>
        </div>
        <div class="form-element">
            Group Users:- {{ groupUserNameList.toString() }}
        </div>
        <div class="form-element">
            <button @click="createGroup">Create Group</button>
            <button @click="closeForm">Cancel</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            groupName: null,
            searchUser: null,
            // having an group users id
            groupUsers: [this.loggedInUserId],
            // having a group user name to show on add
            groupUserNameList: [],
        };
    },
    props: {
        userData: {
            type: Object,
        },
        loggedInUserId: {
            type: String,
        },
    },
    mounted() {
        this.showGroupUsers();
    },
    methods: {
        closeForm() {
            this.$emit("closeForm");
        },
        setToGroupList() {
            if (!this.groupUsers.includes(this.searchUser)) {
                this.groupUsers.push(this.searchUser);
            }
            this.searchUser = null;
            this.showGroupUsers();
        },
        showGroupUsers() {
            for (let groupUser of this.groupUsers) {
                for (let user of this.userData) {
                    this.groupUserNameList = [];
                    if (groupUser === user.id) {
                        setTimeout(() => {
                            this.groupUserNameList.push(user.firstName);
                        }, 0);
                    }
                }
            }
        },
        createGroup() {
            this.$emit("createGroup", this.groupName, this.groupUsers);
            this.groupName = null;
        },
    },
};
</script>

<style scoped>
.create-group-form-wrapper {
    box-shadow: 0px 0px 3px 0.5px black;
    width: 400px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    border-radius: 4px;
}
.form-element {
    display: flex;
    flex-direction: column;
    gap: 4px;
}
</style>
