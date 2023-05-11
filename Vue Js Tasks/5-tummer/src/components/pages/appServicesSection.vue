<template>
    <div class="service-wrapper container">
        <div>
            <serviceSidebar
                :serviceData="serviceData"
                @exploreService="exploreService"
            />
        </div>

        <div>
            <serviceDetail :serviceCategorydata="serviceCategorydata" />
        </div>
    </div>
</template>

<script>
import serviceSidebar from "../Layout/serviceSidebar.vue";
import serviceDetail from "../Layout/serviceDetail.vue";

export default {
    components: {
        serviceSidebar,
        serviceDetail,
    },
    data() {
        return {
            serviceData: [
                {
                    id: "1",
                    name: "Klantenservice",
                    serviceCategory: [
                        {
                            id: "1",
                            name: "Ruilen & Retourneren",
                            detail: `Hoe verzend ik mijn te retourneren producten? 
                                 Kan ik alle producten retourneren? 
                                 Ik wil graag een product retourneren, kan dit? `,
                        },
                        {
                            id: "2",
                            name: "Reparatie & Garantie",
                            detail: `Hoe verzend ik mijn te retourneren producten? 
                                 Kan ik alle producten retourneren? 
                                 Ik wil graag een product retourneren, kan dit? `,
                        },
                        {
                            id: "3",
                            name: "Bezorging & Afhalen",
                            detail: `Hoe verzend ik mijn te retourneren producten? 
                                 Kan ik alle producten retourneren? 
                                 Ik wil graag een product retourneren, kan dit? `,
                        },
                        {
                            id: "4",
                            name: "Betalen",
                            detail: `Hoe verzend ik mijn te retourneren producten? 
                                 Kan ik alle producten retourneren? 
                                 Ik wil graag een product retourneren, kan dit? `,
                        },
                    ],
                },
                {
                    id: "2",
                    name: "Ruilen & Retourneren",
                    serviceCategory: [
                        {
                            id: "1",
                            name: "Hoe verzend ik mijn te retourneren producten? ",
                            detail: `Producten die je wilt retourneren kunt je, samen met een aankoopbewijs en een zo volledig mogelijk ingevuld retourformulier , via PostNL, DHL of een`,
                        },
                        {
                            id: "2",
                            name: "Kan ik alle producten retourneren? ↵",
                            detail: `Hoe verzend ik mijn te retourneren producten? 
                                 Kan ik alle producten retourneren? 
                                 Ik wil graag een product retourneren, kan dit? `,
                        },
                        {
                            id: "3",
                            name: "Ik wil graag een product retourneren, kan dit? ",
                            detail: `Hoe verzend ik mijn te retourneren producten? 
                                 Kan ik alle producten retourneren? 
                                 Ik wil graag een product retourneren, kan dit? `,
                        },
                        {
                            id: "4",
                            name: "Betalen",
                            detail: `Hoe verzend ik mijn te retourneren producten? 
                                 Kan ik alle producten retourneren? 
                                 Ik wil graag een product retourneren, kan dit? `,
                        },
                    ],
                },
                {
                    id: "3",
                    name: "sdfgds & da",
                    serviceCategory: [
                        {
                            id: "1",
                            name: "fdsf verzend fsd mijn fds retourneren producten? ",
                            detail: `Producten die je wilt retourneren kunt je, samen met een aankoopbewijs en een zo volledig mogelijk ingevuld retourformulier , via PostNL, DHL of een`,
                        },
                        {
                            id: "2",
                            name: "Kan ik alle producten retourneren? ",
                            detail: `Hoe verzend ik mijn te retourneren producten? 
                                 Kan ik alle producten retourneren? 
                                 Ik wil graag een product retourneren, kan dit? `,
                        },
                        {
                            id: "3",
                            name: "Ik wil graag een product retourneren, kan dit? ",
                            detail: `Hoe verzend ik mijn te retourneren producten? 
                                 Kan ik alle producten retourneren? 
                                 Ik wil graag een product retourneren, kan dit? `,
                        },
                        {
                            id: "4",
                            name: "Betalen",
                            detail: `Hoe verzend ik mijn te retourneren producten? 
                                 Kan ik alle producten retourneren? 
                                 Ik wil graag een product retourneren, kan dit? `,
                        },
                    ],
                },
            ],
            serviceCategorydata: null,
        };
    },
    methods: {
        exploreService(serviceId) {
            const service = this.serviceData.find(
                (service) => service.id === serviceId
            );
            this.serviceCategorydata = service.serviceCategory;
        },
    },
    mounted() {
        this.serviceCategorydata = this.serviceData[0].serviceCategory;
    },
};
</script>

<style scoped>
.service-wrapper {
    display: flex;
    flex-direction: row;
    column-gap: 2rem;
}
.service-wrapper {
    padding-top: 2rem;
}
</style>
