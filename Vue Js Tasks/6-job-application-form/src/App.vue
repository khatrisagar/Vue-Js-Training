<template>
    <div class="button-container">
        <button @click="changeView('form')">View Form</button>
        <button @click="changeView('formList')">View List</button>
    </div>
    <div :style="{ display: currentView === 'form' ? 'block' : 'none' }">
        <jobApplicationForm
            :formDataObject="formData"
            @submitForm="submitForm"
        />
    </div>
    <div :style="{ display: currentView === 'formList' ? 'block' : 'none' }">
        <formList
            :formsDataObject="formsData"
            @editFormData="editFormData"
            @deleteFormData="deleteFormData"
        />
    </div>
</template>

<script>
import jobApplicationForm from "./components/jobApplicationForm.vue";
import formList from "./components/formList.vue";
export default {
    name: "App",
    components: {
        jobApplicationForm,
        formList,
    },
    data() {
        return {
            currentView: "form",
            // initial phase to reset a form
            formInitialPhase: {
                basicInfo: {
                    firstName: null,
                    lastName: null,
                    designation: null,
                    primaryAddress: null,
                    email: null,
                    secondaryAddress: null,
                    phoneNumber: null,
                    state: null,
                    zipcode: null,
                    city: null,
                    age: null,
                    dateOfBitrh: null,
                    gender: null,
                    relationStatus: null,
                },
                educationInfo: {
                    courseName: [null],
                    universityName: [null],
                    passingYear: [null],
                    score: [null],
                },
                experienceInfo: {
                    companyName: [null],
                    designation: [null],
                    startDate: [null],
                    endDate: [null],
                },
                languagesInfo: {
                    languageName: [],
                    read: [],
                    write: [],
                    speak: [],
                },
                technologiesInfo: {
                    technologyName: [],
                    technologyKnowledge: [],
                },
                referencesInfo: {
                    referenceName: [null],
                    referenceContact: [null],
                    referenceRelation: [null],
                },
                prefrencesInfo: {
                    preferedLocation: null,
                    department: null,
                    curentCtc: null,
                    expectedCtc: null,
                    noticePeriod: null,
                },
            },
            // passed as a props
            formData: {
                basicInfo: {
                    firstName: null,
                    lastName: null,
                    designation: null,
                    primaryAddress: null,
                    email: null,
                    secondaryAddress: null,
                    phoneNumber: null,
                    state: null,
                    zipcode: null,
                    city: null,
                    age: null,
                    dateOfBitrh: null,
                    gender: null,
                    relationStatus: null,
                },
                educationInfo: {
                    courseName: [null],
                    universityName: [null],
                    passingYear: [null],
                    score: [null],
                },
                experienceInfo: {
                    companyName: [null],
                    designation: [null],
                    startDate: [null],
                    endDate: [null],
                },
                languagesInfo: {
                    languageName: [],
                    read: [],
                    write: [],
                    speak: [],
                },
                technologiesInfo: {
                    technologyName: [],
                    technologyKnowledge: [],
                },
                referencesInfo: {
                    referenceName: [null],
                    referenceContact: [null],
                    referenceRelation: [null],
                },
                prefrencesInfo: {
                    preferedLocation: null,
                    department: null,
                    curentCtc: null,
                    expectedCtc: null,
                    noticePeriod: null,
                },
            },

            // form data from local storage
            formsData: null,
        };
    },
    created() {
        this.formsData = JSON.parse(localStorage.getItem("formData")) ?? [];
    },
    methods: {
        changeView(view) {
            this.currentView = view;
            this.formData = this.formInitialPhase;
        },
        editFormData(formId) {
            this.formData = this.formsData.find(
                (form) => form.formId === formId
            );
            this.currentView = "form";
        },
        deleteFormData(formId) {
            const deleteIndex = this.formsData.findIndex(
                (form) => form.formId === formId
            );
            this.formsData.splice(deleteIndex, 1);
            localStorage.setItem("formData", JSON.stringify(this.formsData));
        },
        submitForm(formData) {
            if (formData.formId) {
                const formIndex = this.formsData.findIndex(
                    (form) => form.formId === formData.formId
                );
                this.formsData[formIndex] = formData;
            } else {
                this.formsData.push({
                    formId: new Date().toISOString(),
                    ...formData,
                });
            }
            localStorage.setItem("formData", JSON.stringify(this.formsData));
            this.currentView = "formList";
            this.formData = this.formInitialPhase;
        },
    },
};
</script>

<style scoped>
.button-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding-top: 2rem;
}
</style>
