const obj = {
  title: "my square",
  square: (val) => {
    return (val * val) + " " + obj.title;
  }
}

console.log(obj.square(5));