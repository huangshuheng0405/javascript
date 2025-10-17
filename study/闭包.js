function add() {
  let count = 0
  return function () {
    console.log(++count);
  }
}

let fn = add()

fn()
fn()
fn()
fn()


