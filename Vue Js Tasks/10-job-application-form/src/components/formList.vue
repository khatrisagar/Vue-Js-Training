<template>
    <div>
        <table>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>State</th>
                <th>City</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>

            <tr v-for="form in formData" :key="form.formId">
                <td>{{ form.basicInfo.firstName }}</td>
                <td>{{ form.basicInfo.lastName }}</td>
                <td>{{ form.basicInfo.email }}</td>
                <td>{{ form.basicInfo.phoneNumber }}</td>
                <td>{{ form.basicInfo.state }}</td>
                <td>{{ form.basicInfo.city }}</td>
                <td>
                    <button @click="editFormData(form.formId)">Edit</button>
                </td>
                <td>
                    <button @click="deleteFormData(form.formId)">Delete</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: null,
        };
    },
    props: {
        formsDataObject: {
            type: Object,
        },
    },
    created() {
        this.formData = this.formsDataObject;
    },
    methods: {
        editFormData(formId) {
            this.$emit("editFormData", formId);
        },
        deleteFormData(formId) {
            this.$emit("deleteFormData", formId);
        },
    },
};
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
}
td,
th {
    border: 1px solid black;
}
</style>
