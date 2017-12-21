<template>
  <div class="container">
    <div class="row">
      <nav class="navbar navbar-default">
        <a href="/" class="navbar-brand">Home</a>
      </nav>
    </div>
    <div class="row jumbotron">
      <h3>Select Product</h3>
      <div class="col-md-4">
        <list-box :items="this.store" :handle-item-select="handleItemSelect('store')" :active="this.active"></list-box>
      </div>
      <div class="col-md-2">
        <ul class="list-group">
          <li class="list-group-item">
            <button class="btn btn-default" @click="moveItem('selected')">
                    >>
                  </button>
          </li>
          <li class="list-group-item">
            <button class="btn btn-default" @click="moveItem('store')">
                    &#60; &#60;
                  </button>
          </li>
        </ul>
      </div>
      <div class="col-md-4">
        <list-box :items="this.selected" :handle-item-select="handleItemSelect('selected')" :active="this.active"></list-box>
      </div>
    </div>
  </div>
</template>

<script>
import ListBox from "./ListBox.vue";

export default {
  data() {
    return {
      store: [
        {
          name: "Car",
          id: 1
        },
        {
          name: "Bike",
          id: 2
        },
        {
          name: "Truck",
          id: 3
        },
        {
          name: "Bus",
          id: 4
        },
        {
          name: "Train",
          id: 5
        },
        {
          name: "Aeroplane",
          id: 6
        }
      ],
      selected: [],
      active: {
        item: {},
        section: null
      }
    };
  },
  methods: {
    handleItemSelect(section) {
      return item => {
        this.active.section = section;
        this.active.item = item;
      };
    },
    moveItem(section) {
      if (!this.active.section) return alert("Please select item to move");
      const selected = this[section];
      selected.push(this.active.item);
      const itemToRemoveFrom = section === "store" ? "selected" : "store";
      this[itemToRemoveFrom].splice(
        this[itemToRemoveFrom].findIndex(
          item => item.id === this.active.item.id
        ),
        1
      );
      this.active = {
        item: {},
        section: null
      };
    }
  },
  components: {
    ListBox
  }
};
</script>