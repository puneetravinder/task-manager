<script setup>
import { useTaskStore } from "../../stores/tasksStore";

const tasksStore = useTaskStore()
tasksStore.navTitle = 'E-commerce Product List'
</script>

<template>
    <div class="container mb-5">
        <h1>E-commerce Product List</h1>
    </div>
</template>