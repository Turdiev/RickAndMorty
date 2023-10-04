<template>
  <TheHeader />
  <main>
    <TheTable
      :characters="characters"
    />
  </main>
</template>

<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheTable from "@/components/TheTable.vue";
import useApiResponse from "@/use/ApiResponse";
import { onMounted, onUnmounted, onBeforeMount, ref} from "vue";

const characters = ref([]);
const pageNumber = ref(1)

const fetchCharacters = async () => {
  const response = await useApiResponse({
    method: 'GET',
    url: 'character',
    params: {
      page: pageNumber.value
    }
  })

  characters.value = [...characters.value, ...response];
};

const handleScroll = () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  if (scrollY + windowHeight >= documentHeight - 200) {
    pageNumber.value++;
    fetchCharacters();
  }
};

onBeforeMount(() => {
  fetchCharacters();
})

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// Удалить обработчик прокрутки при демонтаже
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

</script>

<style>
</style>
