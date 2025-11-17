import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Meditation } from '@/data-contacts.ts'
import { fetchMeditations } from '@/api/client.ts'

export const useMeditationStore = defineStore('meditation', () => {
  const meditations = ref<Meditation[]>([])

  async function getMeditations() {
    try {
      meditations.value = (await fetchMeditations()).data.meditations
    } catch (e: unknown) {
      console.log(e)
    } finally {
      //do something if needed
    }
  }

  return { meditations, getMeditations }
})
