function whoCallMe2(caller) {
    console.log('second Caller is', caller);
}
const obj = {
  id: '42',
  whoCalledMe() {
    console.log('Caller is', this);
    whoCallMe2(this);
  }
};

module.exports = obj ;