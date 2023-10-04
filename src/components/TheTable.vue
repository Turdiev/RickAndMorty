<template>
  <div class="characters-table">
    <div
      v-if="isShowBtn"
      class="characters-table__reset-btn"
    >
      <button
        @click="resetSort()"
      >
        Сбросить
      </button>
    </div>
    <table>
      <thead>
      <tr>
        <th
          v-for="head in tableHead"
          :key="head.value"
          :class="{'_no-sort': !head.sort}"
          @click="head.sort ? sortByHead(head.value) : ''"
        >
          {{ head.name }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="character in sortedCharacters" :key="character.id">
        <td class="characters-table__image"><img :src="character.image" alt=""></td>
        <td>{{ character.name }}</td>
        <td>{{ character.gender }}</td>
        <td>{{ character.origin.name }}</td>
        <td>{{ character.species }}</td>
        <td>{{ character.status }}</td>
        <td>{{ character.location.name }}</td>
        <td>{{ useFormatDate(character.created) }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import {ref, watchEffect} from 'vue';
import { useSort } from "@/use/sort";
import { useFormatDate } from "@/use/formatDate";

const tableHead = [
  {
    value: 'img',
    name: ''
  },
  {
    value: 'name',
    name: 'Имя',
    sort: true
  },
  {
    value: 'gender',
    name: 'Пол',
    sort: true
  },
  {
    value: 'origin',
    name: 'Происхождение',
    sort: true
  },
  {
    value: 'species',
    name: 'Вид'
  },
  {
    value: 'status',
    name: 'Статус'
  },
  {
    value: 'location',
    name: 'Местонахождение'
  },
  {
    value: 'created',
    name:'Созданный'
  }
]

const props = defineProps({
  characters: {
    type: Array
  }
})

const sortKey = ref(null);
const sortedCharacters = ref([]);
const isShowBtn = ref(false);

watchEffect(() => {
  if (props.characters) {
    sortedCharacters.value = [...props.characters]
  }
})

const sortByHead = (key) => {
  sortedCharacters.value = useSort(key, sortedCharacters, sortKey);
  sortKey.value = key;
  isShowBtn.value = true;
};

const resetSort = () => {
  sortedCharacters.value = [...props.characters]
  sortKey.value = null;
  isShowBtn.value = false;
}
</script>

<style lang="scss" scoped>
.characters-table {
  width: 100%;

  &__reset-btn {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    & button {
      width: 120px;
      height: 24px;
      background: transparent;
      margin: 0 10px 10px 0;
      cursor: pointer;

      &:hover {
        background-color: #f2f2f2;
      }
    }
  }

  &__image {
    width: 80px;
    height: 80px;

    & img {
      width: 100%;
      height: 100%;
    }
  }
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}

th {
  background-color: #f2f2f2;
  cursor: pointer;
}

th:hover {
  background-color: #ddd;
}

._no-sort {
  cursor: default;

  &:hover {
    background-color: #f2f2f2;
  }
}
</style>