let nodes =  {};
let links =  {};
let categories =  {};

nodes = Array.from({ length: 7000 }).map((item, index) => {
  return ({
    id: String(index),
    name: `name${index}`,
    symbolSize: parseInt(Math.random() * 30),
    x: parseFloat((Math.random() * 100).toFixed(2)),
    y: parseFloat((Math.random() * 50).toFixed(2)),
    value: parseFloat((Math.random() * 20).toFixed(2)),
    category: parseInt(Math.random() * 10),
  })
})

export {
  nodes,
  links,
  categories,
}