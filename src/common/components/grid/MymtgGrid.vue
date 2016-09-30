<template>
  <table class="table table-bordered">
  <thead>
    <thead>
      <tr>
        <th v-for="key in columns"
          @click="sortBy(key)"
          :class="{actived: sortKey == key}">
          {{key | capitalize}}
          <span class="arrow"
            :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr  v-for="entry in data" :class="isRowSelected(entry) ? 'selected' : ''" @click="selectRow(entry)">
        <td v-for="key in columns">
          {{entry[key]}}
        </td>
      </tr>
    </tbody>
  </table>
  <pre>{{ $data | json }}</pre>
  <!-- <pagination @change="changePage" :model="paginationModel" ></pagination> -->
</template>

<script type="text/javascript">
import pagination from 'src/common/components/list/pagination/Pagination'
export default {
  props: {
    data: Array,
    columns: Array
  },
  components: {
    pagination
  },
  data: function () {
    var sortOrders = {}
    this.columns.forEach(function (key) {
      sortOrders[key] = 1
    })
    return {
      sortKey: '',
      sortOrders: sortOrders,
      selectedRow: null
    }
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    },
    selectRow: function (entry) {
      this.selectedRow = entry
      this.$emit('selectedrow', entry)
    },
    isRowSelected: function (entry) {
      return this.selectedRow === entry
    }
  },
  created: function () {
  }
}
</script>


<style type="text/css" scoped>
th {
  background-color: #439CDF;
  color: #fff;
  cursor: pointer;
}
th.actived {
  background-color: #308BCA;
}

th.actived .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}

tr {
  cursor: pointer;
}

tr:hover {
  background-color: #FCFFCD
}

.selected {
  background-color: #FFFD7C
}
</style>