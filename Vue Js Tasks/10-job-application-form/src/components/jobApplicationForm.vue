<template>
    <div class="from-wrapper">
        <form action="" @submit.prevent="submitForm">
            {{ v$.formData.basicInfo }}
            <div class="form-container">
                <!-- basic -->
                <table>
                    <h2 class="section-heading">Basic Details</h2>
                    <tr>
                        <td>
                            <div class="form-elements">
                                <label for="first-name" class="form-label"
                                    >First Name</label
                                >
                                <input
                                    class="form-input"
                                    type="text"
                                    id="first-name"
                                    v-model="formData.basicInfo.firstName"
                                    @blur="
                                        v$.formData.basicInfo.firstName.$touch
                                    "
                                />
                            </div>
                            <div
                                v-if="v$.formData.basicInfo.firstName.$error"
                                class="warning-container"
                            >
                                <p
                                    v-for="error of v$.formData.basicInfo
                                        .firstName.$errors"
                                    :key="error.$uid"
                                    class="warning"
                                >
                                    {{ error.$message }} for this Field*.
                                </p>
                            </div>
                        </td>
                        <td>
                            <div class="form-elements">
                                <label for="last-name" class="form-label"
                                    >Last Name</label
                                >
                                <input
                                    class="form-input"
                                    type="text"
                                    id="last-name"
                                    v-model="formData.basicInfo.lastName"
                                    @blur="
                                        v$.formData.basicInfo.lastName.$touch
                                    "
                                />
                            </div>
                            <div
                                v-if="v$.formData.basicInfo.lastName.$error"
                                class="warning-container"
                            >
                                <p
                                    v-for="error of v$.formData.basicInfo
                                        .lastName.$errors"
                                    :key="error.$uid"
                                    class="warning"
                                >
                                    {{ error.$message }} for this Field*.
                                </p>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div class="form-elements">
                                <label
                                    for="basic-info-designation"
                                    class="form-label"
                                    >Designation</label
                                >
                                <input
                                    class="form-input"
                                    type="text"
                                    id="basic-info-designation"
                                    v-model="formData.basicInfo.designation"
                                    @blur="
                                        v$.formData.basicInfo.designation.$touch
                                    "
                                />
                            </div>
                            <div
                                v-if="v$.formData.basicInfo.designation.$error"
                                class="warning-container"
                            >
                                <p
                                    v-for="error of v$.formData.basicInfo
                                        .designation.$errors"
                                    :key="error.$uid"
                                    class="warning"
                                >
                                    {{ error.$message }}*
                                </p>
                            </div>
                        </td>
                        <td>
                            <div class="form-elements">
                                <label for="primary-address" class="form-label"
                                    >Address</label
                                >
                                <textarea
                                    class="form-input"
                                    id="primary-address"
                                    v-model="formData.basicInfo.primaryAddress"
                                    @blur="
                                        v$.formData.basicInfo.primaryAddress
                                            .$touch;
                                    "
                                    cols="10"
                                ></textarea>
                            </div>
                            <div
                                v-if="
                                    v$.formData.basicInfo.primaryAddress.$error
                                "
                                class="warning-container"
                            >
                                <p
                                    v-for="error of v$.formData.basicInfo
                                        .primaryAddress.$errors"
                                    :key="error.$uid"
                                    class="warning"
                                >
                                    {{ error.$message }}*.
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="form-elements">
                                <label for="email" class="form-label"
                                    >Email</label
                                >
                                <input
                                    class="form-input"
                                    type="text"
                                    id="email"
                                    v-model="formData.basicInfo.email"
                                    @blur="v$.formData.basicInfo.email.$touch"
                                />
                            </div>
                            <div
                                v-if="v$.formData.basicInfo.email.$error"
                                class="warning-container"
                            >
                                <p
                                    v-for="error of v$.formData.basicInfo.email
                                        .$errors"
                                    :key="error.$uid"
                                    class="warning"
                                >
                                    {{ error.$message }}*
                                </p>
                            </div>
                        </td>
                        <td>
                            <div class="form-elements">
                                <label
                                    for="secondary-address"
                                    class="form-label"
                                    >Address 2</label
                                >
                                <textarea
                                    class="form-input"
                                    id="secondary-address"
                                    v-model="
                                        formData.basicInfo.secondaryAddress
                                    "
                                    @blur="
                                        v$.formData.basicInfo.secondaryAddress
                                            .$touch;
                                    "
                                    cols="10"
                                ></textarea>
                            </div>
                            <div
                                v-if="
                                    v$.formData.basicInfo.secondaryAddress
                                        .$error
                                "
                                class="warning-container"
                            >
                                <p
                                    v-for="error of v$.formData.basicInfo
                                        .secondaryAddress.$errors"
                                    :key="error.$uid"
                                    class="warning"
                                >
                                    {{ error.$message }}*.
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="form-elements">
                                <label for="phone-number" class="form-label"
                                    >Phone Number</label
                                >
                                <input
                                    class="form-input"
                                    type="text"
                                    id="phone-number"
                                    v-model="formData.basicInfo.phoneNumber"
                                    @blur="
                                        v$.formData.basicInfo.phoneNumber.$touch
                                    "
                                />
                            </div>
                            <div
                                v-if="v$.formData.basicInfo.phoneNumber.$error"
                                class="warning-container"
                            >
                                <p
                                    v-for="error of v$.formData.basicInfo
                                        .phoneNumber.$errors"
                                    :key="error.$uid"
                                    class="warning"
                                >
                                    {{ error.$message }}*
                                </p>
                            </div>
                        </td>
                        <td>
                            <div class="form-elements">
                                <label for="state" class="form-label"
                                    >state</label
                                >
                                <select
                                    class="form-input"
                                    name=""
                                    id="state"
                                    v-model="formData.basicInfo.state"
                                    @blur="v$.formData.basicInfo.state.$touch"
                                >
                                    <option
                                        value="null"
                                        selected
                                        disabled
                                        hidden
                                    >
                                        Select Your State
                                    </option>
                                    <option
                                        v-for="state in stateData"
                                        :key="state.id"
                                        :value="state.name"
                                    >
                                        {{ state.name }}
                                    </option>
                                </select>
                            </div>
                            <div
                                v-if="v$.formData.basicInfo.state.$error"
                                class="warning-container"
                            >
                                <p
                                    v-for="error of v$.formData.basicInfo.state
                                        .$errors"
                                    :key="error.$uid"
                                    class="warning"
                                >
                                    {{ error.$message }}*.
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="form-elements">
                                <label for="zipcode" class="form-label"
                                    >Zipcode</label
                                >
                                <input
                                    class="form-input"
                                    type="text"
                                    id="zipcode"
                                    v-model="formData.basicInfo.zipcode"
                                    @blur="v$.formData.basicInfo.zipcode.$touch"
                                />
                            </div>
                            <div
                                v-if="v$.formData.basicInfo.zipcode.$error"
                                class="warning-container"
                            >
                                <p
                                    v-for="error of v$.formData.basicInfo
                                        .zipcode.$errors"
                                    :key="error.$uid"
                                    class="warning"
                                >
                                    {{ error.$message }}*
                                </p>
                            </div>
                        </td>
                        <td>
                            <div class="form-elements">
                                <label for="city" class="form-label"
                                    >City</label
                                >
                                <select
                                    class="form-input"
                                    name=""
                                    id="city"
                                    v-model="formData.basicInfo.city"
                                    @blur="v$.formData.basicInfo.city.$touch"
                                >
                                    <option
                                        value="null"
                                        selected
                                        disabled
                                        hidden
                                    >
                                        Select Your City
                                    </option>
                                    <option
                                        v-for="city in cityData"
                                        :key="city"
                                        value="city"
                                    >
                                        {{ city }}
                                    </option>
                                </select>
                            </div>
                            <div
                                v-if="v$.formData.basicInfo.city.$error"
                                class="warning-container"
                            >
                                <p
                                    v-for="error of v$.formData.basicInfo.city
                                        .$errors"
                                    :key="error.$uid"
                                    class="warning"
                                >
                                    {{ error.$message }}*.
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="form-elements">
                                <label for="age" class="form-label">Age</label>
                                <input
                                    class="form-input"
                                    type="text"
                                    id="age"
                                    v-model="formData.basicInfo.age"
                                    @blur="v$.formData.basicInfo.age.$touch"
                                />
                            </div>
                            <div
                                v-if="v$.formData.basicInfo.age.$error"
                                class="warning-container"
                            >
                                <p
                                    v-for="error of v$.formData.basicInfo.age
                                        .$errors"
                                    :key="error.$uid"
                                    class="warning"
                                >
                                    {{ error.$message }}*
                                </p>
                            </div>
                        </td>
                        <td>
                            <div class="form-elements">
                                <label for="dob" class="form-label"
                                    >Date of birth</label
                                >
                                <input
                                    class="form-input"
                                    type="date"
                                    id="dob"
                                    v-model="formData.basicInfo.dateOfBitrh"
                                    @input="
                                        v$.formData.basicInfo.dateOfBitrh.$touch
                                    "
                                />
                            </div>
                            <div
                                v-if="v$.formData.basicInfo.dateOfBitrh.$error"
                                class="warning-container"
                            >
                                <p
                                    v-for="error of v$.formData.basicInfo
                                        .dateOfBitrh.$errors"
                                    :key="error.$uid"
                                    class="warning"
                                >
                                    {{
                                        error.$message
                                            ? error.$message
                                            : "Age Soud Be greater Than 18"
                                    }}*.
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="form-elements">
                                <label for="gender" class="form-label"
                                    >gender</label
                                >
                                <div class="flex flex-row">
                                    <div>
                                        <input
                                            type="radio"
                                            id="male"
                                            name="gender"
                                            value="male"
                                            v-model="formData.basicInfo.gender"
                                        />
                                        <label for="male" class="form-label"
                                            >Male</label
                                        >
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            id="female"
                                            name="gender"
                                            value="female"
                                            v-model="formData.basicInfo.gender"
                                        />
                                        <label for="female" class="form-label"
                                            >Female</label
                                        >
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            id="other"
                                            name="gender"
                                            value="other"
                                            v-model="formData.basicInfo.gender"
                                        />
                                        <label for="other" class="form-label"
                                            >Other</label
                                        >
                                    </div>
                                </div>
                            </div>
                            <div
                                v-if="v$.formData.basicInfo.gender.$error"
                                class="warning-container"
                            >
                                <p
                                    v-for="error of v$.formData.basicInfo.gender
                                        .$errors"
                                    :key="error.$uid"
                                    class="warning"
                                >
                                    {{ error.$message }}*
                                </p>
                            </div>
                        </td>
                        <td>
                            <div class="form-elements">
                                <label for="dob" class="form-label"
                                    >Relation Status</label
                                >
                                <select
                                    class="form-input"
                                    name="relation-status"
                                    id="relation-status"
                                    v-model="formData.basicInfo.relationStatus"
                                    @blur="
                                        v$.formData.basicInfo.relationStatus
                                            .$touch;
                                    "
                                >
                                    <option value="unmarried">Unmarried</option>
                                    <option value="married">Married</option>
                                </select>
                            </div>
                            <div
                                v-if="
                                    v$.formData.basicInfo.relationStatus.$error
                                "
                                class="warning-container"
                            >
                                <p
                                    v-for="error of v$.formData.basicInfo
                                        .relationStatus.$errors"
                                    :key="error.$uid"
                                    class="warning"
                                >
                                    {{ error.$message }}*
                                </p>
                            </div>
                        </td>
                    </tr>
                </table>
                <!-- education -->
                <table>
                    <tr>
                        <h2 class="section-heading">Education Details</h2>
                        <button
                            class="primary-btn"
                            @click="
                                addFormField('educationInfo', 'educationObject')
                            "
                            type="button"
                        >
                            +
                        </button>
                    </tr>

                    <tr
                        v-for="(education, index) in formData.educationInfo"
                        :key="index"
                    >
                        <td class="row-4">
                            <div class="row-4 form-elements">
                                <label for="course-name" class="form-label"
                                    >Course Name</label
                                >
                                <input
                                    class="form-input"
                                    type="text"
                                    id="course-name"
                                    v-model="
                                        formData.educationInfo[index].courseName
                                    "
                                />
                            </div>
                            <p>
                                {{ v$.formData.educationInfo.$each }}
                            </p>
                            <div
                                v-if="
                                    v$.formData.educationInfo.$each.$response
                                        .$errors[index].courseName
                                "
                                class="warning-container"
                            >
                                <p
                                    v-for="error of v$.formData.educationInfo
                                        .$each.$response.$errors[index]
                                        .courseName"
                                    :key="error.$uid"
                                    class="warning"
                                >
                                    {{ error.$message }}*
                                </p>
                            </div>
                        </td>
                        <td class="row-4">
                            <div class="row-4 form-elements">
                                <label for="university-name" class="form-label"
                                    >University Name</label
                                >
                                <input
                                    class="form-input"
                                    type="text"
                                    id="university-name"
                                    v-model="
                                        formData.educationInfo[index]
                                            .universityName
                                    "
                                />
                            </div>
                        </td>
                        <td class="row-4">
                            <div class="row-4 form-elements">
                                <label for="passing-year" class="form-label"
                                    >Passing Year</label
                                >
                                <input
                                    class="form-input"
                                    type="text"
                                    id="passing-year"
                                    v-model="
                                        formData.educationInfo[index]
                                            .passingYear
                                    "
                                />
                            </div>
                        </td>
                        <td class="row-4">
                            <div class="row-4 form-elements">
                                <label for="score" class="form-label"
                                    >Score</label
                                >
                                <input
                                    class="form-input"
                                    type="text"
                                    id="score"
                                    v-model="
                                        formData.educationInfo[index].score
                                    "
                                />
                            </div>
                        </td>
                        <td>
                            <div class="row-4 form-elements">
                                <button
                                    class="primary-btn"
                                    @click="
                                        removeFormField('educationInfo', index)
                                    "
                                    type="button"
                                >
                                    -
                                </button>
                            </div>
                        </td>
                    </tr>
                </table>
                <!-- experience -->
                <table>
                    <tr>
                        <h2 class="section-heading">Experience Details</h2>
                        <button
                            class="primary-btn"
                            @click="
                                addFormField(
                                    'experienceInfo',
                                    'experienceObject'
                                )
                            "
                            type="button"
                        >
                            +
                        </button>
                    </tr>
                    <tr
                        v-for="(company, index) in formData.experienceInfo"
                        :key="index"
                    >
                        <td class="row-4">
                            <label for="compamy-name" class="form-label"
                                >Company Name</label
                            >
                            <input
                                class="form-input"
                                type="text"
                                id="company-name"
                                v-model="
                                    formData.experienceInfo[index].companyName
                                "
                            />
                        </td>
                        <td class="row-4">
                            <label for="company-desination" class="form-label"
                                >Designation</label
                            >
                            <input
                                class="form-input"
                                type="text"
                                id="company-desination"
                                v-model="
                                    formData.experienceInfo[index].designation
                                "
                            />
                        </td>
                        <td class="row-4">
                            <label for="start-date" class="form-label"
                                >Start Date</label
                            >
                            <input
                                class="form-input"
                                type="date"
                                id="start-date"
                                v-model="
                                    formData.experienceInfo[index].startDate
                                "
                            />
                        </td>
                        <td class="row-4">
                            <label for="end-date" class="form-label"
                                >End Date</label
                            >
                            <input
                                class="form-input"
                                type="date"
                                id="end-date"
                                v-model="formData.experienceInfo[index].endDate"
                            />
                        </td>
                        <td>
                            <button
                                class="primary-btn"
                                @click="
                                    removeFormField('experienceInfo', index)
                                "
                                type="button"
                            >
                                -
                            </button>
                        </td>
                    </tr>
                </table>
                <!-- language known -->
                <table>
                    <h2 class="section-heading">Languages Known</h2>
                    <tr v-for="(language, index) in languagesData" :key="index">
                        <td>
                            <div>
                                <input
                                    type="checkbox"
                                    :id="`language-name${index}`"
                                    :name="`language${index}`"
                                    :value="language"
                                    v-model="
                                        formData.languagesInfo.languageName
                                    "
                                />
                                <label
                                    :for="`language-name${index}`"
                                    class="form-label"
                                    >{{ language }}</label
                                >
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    :id="`read${index}`"
                                    :name="`languageValue${index}`"
                                    value="read"
                                    v-model="formData.languagesInfo.read[index]"
                                />
                                <label :for="`read${index}`" class="form-label"
                                    >Read</label
                                >
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    :id="`write${index}`"
                                    :name="`languageValue${index}`"
                                    value="write"
                                    v-model="
                                        formData.languagesInfo.write[index]
                                    "
                                />
                                <label :for="`write${index}`" class="form-label"
                                    >Write</label
                                >
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    :id="`speak${index}`"
                                    :name="`languageValue${index}`"
                                    value="speak"
                                    v-model="
                                        formData.languagesInfo.speak[index]
                                    "
                                />
                                <label :for="`speak${index}`" class="form-label"
                                    >Speak</label
                                >
                            </div>
                        </td>
                    </tr>
                </table>
                <!-- Tech known -->
                <table>
                    <h2 class="section-heading">Technology Details</h2>
                    <tr
                        v-for="(technology, index) in technologiesData"
                        :key="index"
                    >
                        <td>
                            <div>
                                <input
                                    type="checkbox"
                                    :id="`technologyName${index}`"
                                    name="technologyName"
                                    :value="technology"
                                    v-model="
                                        formData.technologiesInfo.technologyName
                                    "
                                />
                                <label
                                    :for="`technologyName${index}`"
                                    class="form-label"
                                    >{{ technology }}</label
                                >
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    :id="`beginer${index}`"
                                    :name="`techValue${index}`"
                                    value="beginer"
                                    v-model="
                                        formData.technologiesInfo
                                            .technologyKnowledge[index]
                                    "
                                />
                                <label
                                    :for="`beginer${index}`"
                                    class="form-label"
                                    >Beginer</label
                                >
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    :id="`mediator${index}`"
                                    :name="`techValue${index}`"
                                    value="mediator"
                                    v-model="
                                        formData.technologiesInfo
                                            .technologyKnowledge[index]
                                    "
                                />
                                <label
                                    :for="`mediator${index}`"
                                    class="form-label"
                                    >Mediator</label
                                >
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    :id="`expert${index}`"
                                    :name="`techValue${index}`"
                                    value="expert"
                                    v-model="
                                        formData.technologiesInfo
                                            .technologyKnowledge[index]
                                    "
                                />
                                <label
                                    :for="`expert${index}`"
                                    class="form-label"
                                    >Expert</label
                                >
                            </div>
                        </td>
                    </tr>
                </table>
                <!-- references -->
                <table>
                    <tr>
                        <h2 class="section-heading">References</h2>
                        <button
                            class="primary-btn"
                            @click="
                                addFormField(
                                    'referencesInfo',
                                    'referencesObject'
                                )
                            "
                            type="button"
                        >
                            +
                        </button>
                    </tr>
                    <tr
                        v-for="(reference, index) in formData.referencesInfo"
                        :key="index"
                    >
                        <td class="row-4">
                            <label for="reference-name" class="form-label"
                                >Reference Name</label
                            >
                            <input
                                class="form-input"
                                type="text"
                                id="reference-name"
                                v-model="
                                    formData.referencesInfo[index].referenceName
                                "
                            />
                        </td>
                        <td class="row-4">
                            <label for="reference-contact" class="form-label"
                                >Reference Contact</label
                            >
                            <input
                                class="form-input"
                                type="text"
                                id="reference-contact"
                                v-model="
                                    formData.referencesInfo[index]
                                        .referenceContact
                                "
                            />
                        </td>
                        <td class="row-4">
                            <label for="reference-relation" class="form-label"
                                >Relation</label
                            >
                            <input
                                class="form-input"
                                type="text"
                                id="reference-relation"
                                v-model="
                                    formData.referencesInfo[index]
                                        .referenceRelation
                                "
                            />
                        </td>
                        <td>
                            <button
                                class="primary-btn"
                                @click="
                                    removeFormField('referencesInfo', index)
                                "
                                type="button"
                            >
                                -
                            </button>
                        </td>
                    </tr>
                </table>
                <!-- preferences -->
                <table>
                    <tr>
                        <h2 class="section-heading">Preferences</h2>
                    </tr>
                    <tr>
                        <td>
                            <label for="prefered-location" class="form-label"
                                >Prefered Location</label
                            >
                            <select
                                name=""
                                id="prefered-location"
                                class="form-input"
                                v-model="
                                    formData.prefrencesInfo.preferedLocation
                                "
                            >
                                <option value="null" selected disabled hidden>
                                    Select Prefered Location
                                </option>
                                <option value="ahmedabad">Ahmedabad</option>
                                <option value="surat">Surat</option>
                                <option value="rajkot">Rajkot</option>
                                <option value="gandhinagar">Gandhinagar</option>
                            </select>
                        </td>
                        <td>
                            <label for="department" class="form-label"
                                >Department</label
                            >
                            <select
                                name=""
                                id="department"
                                class="form-input"
                                v-model="formData.prefrencesInfo.department"
                            >
                                <option value="null" selected disabled hidden>
                                    Select Prefered Department
                                </option>
                                <option value="designing">Designing</option>
                                <option value="marketing">Marketing</option>
                                <option value="development">Development</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="current-ctc" class="form-label"
                                >Current CTC(in Lacs)</label
                            >
                            <input
                                type="text"
                                class="form-input"
                                v-model="formData.prefrencesInfo.curentCtc"
                            />
                        </td>
                        <td>
                            <label for="expected-ctc" class="form-label"
                                >Expected CTC(in Lacs)</label
                            >
                            <input
                                type="text"
                                class="form-input"
                                v-model="formData.prefrencesInfo.expectedCtc"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="notice-period" class="form-label"
                                >Notice Period (in days)</label
                            >
                            <input
                                type="number"
                                class="form-input"
                                v-model="formData.prefrencesInfo.noticePeriod"
                            />
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td><button class="submit-button">Submit</button></td>
                    </tr>
                </table>
            </div>
        </form>
    </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import {
    required,
    email,
    minLength,
    maxLength,
    numeric,
    helpers,
} from "@vuelidate/validators";

export default {
    setup() {
        return { v$: useVuelidate() };
    },
    data() {
        return {
            languagesData: ["Gurati", "Hindi", "English"],
            technologiesData: ["JavaScript", "Node.js", "Vue.js", "React.js"],
            stateData: [
                {
                    id: "1",
                    name: "Gujrat",
                    cities: ["Ahmedabad", "Surat", "Rajkot", "Junagadh"],
                },
                {
                    id: "2",
                    name: "Maharashtra",
                    cities: ["Pune", "Mumbai", "Nanded", "Nasik"],
                },
                {
                    id: "3",
                    name: "Rajsthan",
                    cities: ["Jaipur", "Ajmer", "Jaisalmer", "Udaipur"],
                },
            ],
            formData: null,
            educationObject: {
                courseName: null,
                universityName: null,
                passingYear: null,
                score: null,
            },
            experienceObject: {
                companyName: null,
                designation: null,
                startDate: null,
                endDate: null,
            },
            referencesObject: {
                referenceName: null,
                referenceContact: null,
                referenceRelation: null,
            },
        };
    },
    props: {
        formDataObject: {
            type: Object,
        },
    },
    created() {
        this.formData = this.formDataObject;
    },
    updated() {
        this.formData = this.formDataObject;
    },
    validations() {
        return {
            formData: {
                basicInfo: {
                    firstName: { required },
                    lastName: { required },
                    designation: { required },
                    primaryAddress: {
                        required,
                    },
                    secondaryAddress: {
                        required,
                    },
                    email: { required, email },
                    phoneNumber: {
                        required,
                        minLength: minLength(10),
                        maxLength: maxLength(10),
                        numeric,
                    },
                    zipcode: {
                        required,
                        minLength: minLength(6),
                        maxLength: maxLength(6),
                        numeric,
                    },
                    age: {
                        required,
                        numeric,
                    },
                    state: {
                        required,
                    },
                    city: {
                        required,
                    },
                    dateOfBitrh: {
                        required,
                        maxValue: (value) => {
                            const dateDiff =
                                new Date().getFullYear() -
                                new Date(value).getFullYear();
                            if (dateDiff >= 18) {
                                return true;
                            } else {
                                return false;
                            }
                        },
                    },
                    gender: {
                        required,
                    },
                    relationStatus: {
                        required,
                    },
                },
                educationInfo: {
                    $each: helpers.forEach({
                        courseName: { required },
                        universityName: { required },
                        passingYear: { required },
                        score: { required },
                    }),
                },
            },
        };
    },
    methods: {
        addFormField(fieldName, fieldObject) {
            this.formData[fieldName].push(
                JSON.parse(JSON.stringify(this[fieldObject]))
            );
        },
        removeFormField(fieldName, index) {
            this.formData[fieldName].splice(index, 1);
        },
        async submitForm() {
            if (await this.v$.$validate()) {
                this.$emit("submitForm", this.formData);
            } else {
                return false;
            }
        },
    },
    computed: {
        cityData() {
            let cities = "";
            const selectedStateObject = this.stateData.find((state) => {
                if (state.name === this.formData.basicInfo.state) {
                    return state;
                }
            });

            cities = selectedStateObject?.cities;

            return cities;
        },
    },
};
</script>

<style scoped>
.form-container {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    border: 1px solid black;
    width: 1040px;
    margin-inline: auto;
    padding: 1rem;
    flex-direction: column;
    gap: 2rem;
}
.warning-container {
    padding: 0 2rem 0.3rem;
}
.warning {
    color: red;
}
tr {
    display: flex;
    flex-direction: row;
}
td {
    width: 500px;
}
textarea {
    resize: none;
}
.form-elements {
    display: flex;
    justify-content: space-between;
    padding: 0.3rem 2rem;
}
.primary-btn {
    width: 30px;
    height: 30px;
    border: 1px solid rgb(129, 129, 129);
    border-radius: 4px;
}
.primary-btn:active {
    border: 1px solid black;
}
.form-label {
    margin-right: 0.5rem;
}

.form-input {
    border: 1px solid rgb(51, 51, 51);
    padding: 2px;
    width: 200px;
    height: 20px;
}
.section-heading {
    padding-inline: 2rem;
    padding-bottom: 4px;
}
.row-4 {
    width: 230px;
    display: flex;
    flex-direction: column;
}
.submit-button {
    padding: 4px 7px;
}
</style>
