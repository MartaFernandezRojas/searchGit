//create service
import axios from "axios";

export default {
  data() {
    return {};
  },
  methods: {
    ajaxGet() {
      var getRequest = axios.get(
        "https://api.github.com/search/repositories?q=framework%2Blanguage%3Ajavascript&page=1&per_page=100&sort=stars&order=desc"
      );
      return getRequest;
    }
  }
};
