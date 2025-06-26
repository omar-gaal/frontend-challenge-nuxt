<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useFakeStoreData } from '~/composables/usefakestoreData';

const { storeData } = useFakeStoreData()



const imageUrls = ref<string[]>([])
const currentImage = ref('')
const imageIndex = ref(0);

onMounted (() => {
    watch (
        () => storeData.value,
        (newData) => {
            if(newData && newData.length) {
                imageUrls.value = newData.map((item: {image: string; }) => item.image).slice(0,3)
                currentImage.value = imageUrls.value[0]
                setInterval(() => {
                    imageIndex.value = (imageIndex.value + 1) % imageUrls.value.length
                    currentImage.value = imageUrls.value[imageIndex.value]
                }, 3000)
            }
        }, {immediate: true}
    )
})




</script>

<template>
   
    <div v-if="storeData">
        
        <img class="m-auto w-80" :src="currentImage" alt=""> 
        <label class="flex justify-center gap-4 mt-4">
            <input type="radio" name="option" class="hidden peer">
            <div class="w-4 h-4 border-2 rounded-full border-sky-500 peer-checked:bg-sky-500"></div>

            <input type="radio" name="option" class="hidden peer">
            <div class="w-4 h-4 border-2 rounded-full border-sky-500 peer-checked:bg-sky-500"></div>

            <input type="radio" name="option" class="hidden peer">
            <div class="w-4 h-4 border-2 rounded-full border-sky-500 peer-checked:bg-sky-500"></div>
        </label>

    </div>
    
</template>