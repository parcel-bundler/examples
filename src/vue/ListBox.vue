<template>
    <ul class="list-group">
        <li 
        :class="{ active: item.id === active.item.id}"
        class="list-group-item" @click="handleItemSelect(item)" v-for="item in items" :key="item.id"> {{ item.name}}</li>
        <li v-if="!items.length" class="list-group-item">No Records</li>
    </ul>
</template>

<script>
export default {
  props: {
    handleItemSelect: {
      type: Function,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    active: {
      type: Object,
      required: true
    }
  }
};
</script>
