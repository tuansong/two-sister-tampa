<script setup lang="ts">
import Email from '@/assets/smtp/smtp.js'

const initFocusState = ref({
    name: false,
    phone: false,
    inquiry: false
});

const formData = reactive({
    name: "",
    phone: "",
    inquiry: `Cake:
Special Requirement:
Delivery Date:
    `
});

const responseMessage = ref("");

const validateName = computed(() =>
    !formData.name ? "Please enter name" : ""
);

const validateInquiry = computed(() =>
    !formData.inquiry ? "Please enter inquiry" : ""
);

const validatePhone = computed(() =>
    !formData.phone ? "Please enter phone number" : ""
);

const notReadyToSubmit = computed(() => {
    return Object.values(formData).some(v => !v)
})
const message = computed(() => {
    return responseMessage.value == "OK"
        ? "Thank you for submit, we will contact you soon"
        : responseMessage
});

const onFocus = (type) => {
    initFocusState.value[type] = true;
};

const validateEmailAddress = (email) => {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
}

const submitForm = (e) => {
    e.preventDefault();

    Email.send({
        SecureToken: "5ef8b875-e00d-4887-ab0d-fd2b7a8fe767",
        To: "trantuansong22@gmail.com",
        From: "trantuansong22@gmail.com",
        Subject: `[New Client] - ${formData.name} ${formData.phone}`,
        Body: `
    <table border="1" cellpadding="5" cellspacing="0">
        <tr>
            <th>name</th>
            <th>phone</th>
            <th>Inquiry</th>
        </tr>
        <tr>
            <td>${formData.name}</td>
            <td>${formData.phone}</td>
            <td>${formData.inquiry}</td>
        </tr>
    </table>
    `,
    }).then((message) => (responseMessage.value = message));
};
</script>
<template>
    <section>
        <div class="container mx-auto px-4 py-12 relative">
            <div class="-mx-4 flex flex-wrap items-center">
                <div data-aos="fade-right" class="p-4 w-full lg:w-2/5">
                    <NuxtImg alt="us" src="/linh.jpg" />
                </div>
                <div data-aos="fade-left" class="lg:w-6/12 mx-auto p-4 w-full">
                    <h6 class="font-bold mb-2 text-primary-600 dark:text-primary-200 uppercase">
                        Order Here
                    </h6>
                    <h3 class="capitalize mb-6">Let Us Know What You Need~</h3>
                    <div class="mb-12 lg:mb-0">
                        <form class="w-full max-w-lg">
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-2/5 px-3 mb-6 md:mb-0">
                                    <label
                                        class="form-label block tracking-wide text-primary-600 dark:text-primary-200 text-xs font-bold mb-2"
                                        for="grid-first-name">
                                        Your Name*
                                    </label>
                                    <input id="grid-first-name" v-model="formData.name"
                                        class="form-input bg-transparent border-0 border-b-2 border-gray-300 appearance-none block w-full bg-transparent py-3 mb-3 leading-tight border-none focus:outline-none text-neutral-900 dark:text-neutral-50 focus:outline-none"
                                        type="text" placeholder="Enter your first name" @focus="onFocus('name')">
                                    <p v-if="initFocusState.name" class="text-red-500 text-xs italic">
                                        {{ validateName }}
                                    </p>
                                </div>
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label
                                        class="form-label block tracking-wide text-primary-600 dark:text-primary-200 text-xs font-bold mb-2"
                                        for="grid-state">
                                        Phone number*
                                    </label>
                                    <input id="grid-city" v-model="formData.phone" name="phone"
                                        class="form-input bg-transparent border-0 border-b-2 border-gray-300 appearance-none block w-full bg-transparent py-3 mb-3 leading-tight border-none focus:outline-none text-neutral-900 dark:text-neutral-50 focus:outline-none"
                                        type="tel" placeholder="Enter your cellphone" @focus="onFocus('phone')">
                                    <p v-if="initFocusState.phone" class="text-red-500 text-xs italic">
                                        {{ validatePhone }}
                                    </p>
                                </div>
                            </div>

                            <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full px-3 mb-6 md:mb-6">
                                    <label
                                        class="form-label block tracking-wide text-primary-600 dark:text-primary-200 text-xs font-bold mb-2"
                                        for="grid-state">
                                        Enquiry*
                                    </label>
                                    <textarea v-model="formData.inquiry"
                                        class="form-input form-inquiry border-0 border-b-2 border-gray-300 appearance-none block w-full bg-transparent py-3 mb-3 leading-tight border-none focus:outline-none text-neutral-900 dark:text-neutral-50"
                                        type="text" @focus="onFocus('inquiry')" />
                                    <p v-if="initFocusState.inquiry" class="text-red-500 text-xs italic">
                                        {{ validateInquiry }}
                                    </p>
                                </div>
                            </div>
                            <p class="form-info mb-3 italic">
                                This information that you have provided will only be used for
                                this particular communication and will not be used for any other
                                purpose.
                            </p>
                        </form>
                        <BaseButton size="xl" @click="submitForm"> Submit your Enquiry → </BaseButton>
                        <p v-if="responseMessage" class="form-info mb-3">{{ message }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.form-input {
    border-bottom: 2px solid hsla(0, 5%, 55%, 0.11);
}

.form-inquiry {
    overflow: hidden;
    height: 120px;
}
</style>
