<script setup>
import { reactive, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useTaskStore } from "../../stores/tasksStore";
import { useGitStore } from "../../stores/gitStore";

const tasksStore = useTaskStore()
const gitStore = useGitStore()
tasksStore.navTitle = 'Github Profile Viewer'
const router = useRouter()
const usersData = reactive({
    users: []
})
const userDetails = ref(null)

onMounted(() => {
    getGitUsersProfile()
})

const getGitUsersProfile = (userStr) => {
    gitStore.getUsers(userStr).then(res => {
        usersData.users = gitStore.usersData
    })
}

const onCardClick = (user) => {
    router.push({ name: 'git-user-details', params: { id: user.login } })
}

const getUserData = (username) => {
    return gitStore.getUserDetails(username).then(res => {
        userDetails.value = gitStore.userDetails
        return userDetails.value.name
    })
}

const onSubmit = () => {
    getWeather(searchText.value)
}

</script>

<template>
    <div class="row d-flex justify-content-center align-items-center">
        <div class="col-md-7">
            <div class="search">
                <form @submit.prevent="onSubmit">
                    <font-awesome-icon icon="magnifying-glass" class="fa fa-search" />
                    <input v-model="searchText" type="text" class="form-control" placeholder="Search user">
                    <button type="submit" class="btn btn-primary">Search</button>
                </form>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4" v-for="user in usersData.users">
            <div class="container" @click="onCardClick(user)" role="button">
                <div class="card p-2 mb-4">
                    <div class="d-flex align-items-center">
                        <div class="image me-3">
                            <img :src="user.avatar_url" class="rounded" width="155">
                        </div>
                        <div class="ml-3 w-100">
                            <h4 class="mb-0 mt-0">{{ getUserData(user.login) }}</h4>
                            <!-- <span>Senior Journalist</span> -->
                            <div class="p-2 mt-2 bg-primary d-flex justify-content-between text-light rounded stats">
                                <div class="d-flex flex-column">
                                    <span class="articles">Followers</span>
                                    <span class="number1">{{ userDetails?.followers }}</span>
                                </div>
                                <div class="d-flex flex-column">
                                    <span class="followers">Following</span>
                                    <span class="number2">{{ userDetails?.following }}</span>
                                </div>
                                <div class="d-flex flex-column">
                                    <span class="rating">Repos</span>
                                    <span class="number3">{{ userDetails?.public_repos }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.stats {
    background: #f2f5f8 !important;
    color: #000 !important;
}

.articles {
    font-size: 10px;
}

.number1 {
    font-weight: 500;
}

.followers {
    font-size: 10px;
}

.number2 {
    font-weight: 500;
}

.rating {
    font-size: 10px;
}

.number3 {
    font-weight: 500;
}
</style>