<script setup>
import { useTaskStore } from "../../stores/tasksStore";

const tasksStore = useTaskStore()
tasksStore.navTitle = 'Movie Search'
</script>

<template>
    <div class="container mb-5">
        <h1>Movie Search App</h1>
    </div>
</template>