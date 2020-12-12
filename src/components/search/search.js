export default {
  data() {
    return {
      search: ""
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    // get method to api
    getList() {
      this.getSearchApi()
        .then(res => {
          console.log("res", res);
        })
        .catch(err => {});
    }
  }
};
