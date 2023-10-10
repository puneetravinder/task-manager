<template>
    <nav class="navbar navbar-dark bg-primary navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand">{{ taskStore.navTitle }}</a>
            <div v-if="route.path !== '/'" >
                <button class="btn btn-primary me-2" @click="$router.back()">Back</button>
                <RouterLink class="btn btn-primary" to="/">Home</RouterLink>
            </div>
            <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"
                >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    <a class="nav-link" href="#">Features</a>
                    <a class="nav-link" href="#">Pricing</a>
                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                </div>
            </div> -->
        </div>
    </nav>
</template>

<script setup>
import { useTaskStore } from "../../stores/tasksStore";
import { useRoute } from "vue-router";

const taskStore = useTaskStore()
const route = useRoute()
</script>

<style>
.navbar-item {
    flex-grow: 0 !important;
    margin-right: 20px;
}

.navbar-brand {
    font-size: 25px;
}
</style>