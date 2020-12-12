export default {
  data() {
    return {
      search_input: "",
      word_search: "java",
      resultsSearch: [],
      loading:false,
    };
  },
  mounted() {
   
  },
  methods: {
    // search
    searchValue() {
      var self = this;
      this.loading=true;
      // api request
      this.getSearchApi(this.search_input)
        .then((res) => {
          self.resultsSearch = (res.data.items).splice(0,10);
          self.loading=false;
        })
        .catch((err) => {
          self.loading=false;
        });
    },
  
  },
};
