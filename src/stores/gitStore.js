import { defineStore } from 'pinia'
import axios from "axios";

export const useGitStore = defineStore('gitStore', {
    state: () => {
        return {
            usersData: [],
            userDetails: [],
            userRepos: [],
            baseUrl: 'https://api.github.com/users'
        }
    },
    actions: {
        async getUsers(username) {
            const baseUrl = username ? `${this.baseUrl}/${user}` : `${this.baseUrl}`
            await axios.get(`${baseUrl}`).then(res => {
                this.usersData = res.data
            })
        },
        async getUserDetails(username) {
            await axios.get(`${this.baseUrl}/${username}`).then(res => {
                this.userDetails = res.data
            })
        },
        async getUserRepos(username) {
            await axios.get(`${this.baseUrl}/${username}/repos`).then(res => {
                this.userRepos = res.data
            })
        }
    }
})
