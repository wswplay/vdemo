 const publicMixin = {
  methods: {
    goHome() {
      const { path } = this.$route;
      const indexRoute = ['/', '/hello'];
      if(!indexRoute.includes(path)) this.$router.push({ path: '/' });
    }
  }
}

export default publicMixin