const log = {
    data() {
        return {
          name: undefined,
          time: undefined,
        };
      },
      created() {
          if (!this.name){
              throw new Error('need name')
          }
        this.time = new Date();
        console.log(`${this.name} born`);
      },
      beforeDestroy() {
        let now = new Date();
    
        console.log(`${this.name} die`);
        console.log(`time = ${now - this.time}ms`);
      },
}

export default log