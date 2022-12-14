export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    incrementCount() {
      this.count += 1;
    },
  },
};

// We can mixin computer properties, lifecycle hooks and watchers as well
