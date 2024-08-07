
export default {
  methods: {
    setNewQuery(newQuery) {
      const query = Object.assign(
        {},
        this.$route.query,
        newQuery);


      this.$router.push({
        path: this.$route.path,
        query,
      });
    },
    setNewQueryWithClearQuery(newQuery, queryDelete) {
      if (!queryDelete) return;
      let query =  Object.assign({} , this.$route.query);


      if (Array.isArray(queryDelete)) {
        queryDelete.forEach(key => {
          delete query[key];
        })
      } else {
        delete query[queryDelete];
      }

      query = Object.assign(query, newQuery);

      this.$router.push({
        path: this.$route.path,
        query,
      });
    },
    clearQuery(queryDelete) {
      if (!queryDelete) return;
      const query =  Object.assign({} , this.$route.query);


      if (Array.isArray(queryDelete)) {
        queryDelete.forEach(key => {
          delete query[key];
        })
      } else {
        delete query[queryDelete];
      }

      this.$router.push({
        path: this.$route.path,
        query,
      });
    },
    getFilterQuery(query, paramsFilter, queryParams = {}) {
      const filterQuery = {};
      Object.keys(queryParams).forEach((key) => {
          const param = queryParams[key].param;
          const queryKey = queryParams[key].query;

          if (query[queryKey] !== undefined) {
            filterQuery[param] = query[queryKey];
            return;
          }

          if (paramsFilter && paramsFilter[param] !== undefined) {
            filterQuery[param] = paramsFilter[param];
            return;
          }

          if (queryParams.defaultValue) {
            filterQuery[param] = queryParams.defaultValue;
          }
      });

      return filterQuery;
    },
  }
}
