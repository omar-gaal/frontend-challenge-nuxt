<script setup lang="ts">
import { useFakeStoreData } from '~/composables/usefakestoreData';
import BaseCarousel from './base/BaseCarousel.vue';

const { storeData } = useFakeStoreData()

</script>

<template>
 
   
    <div v-if="storeData">

        <BaseCarousel/>
    </div>
    
</template>