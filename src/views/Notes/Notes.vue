<script setup>
import { useTaskStore } from "../../stores/tasksStore";

const tasksStore = useTaskStore()
tasksStore.navTitle = 'Note Taking App'
</script>

<template>
    <div class="container mb-5">
        <h1>Note Taking App</h1>
    </div>
</template>