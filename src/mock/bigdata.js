let mockNodes = [];
let mockLinks = [];
let mockCates = [];

mockNodes = Array.from({ length: 200 }).map((item, index) => {
  return ({
    id: String(index),
    name: `Name*${index}`,
    symbolSize: parseInt(Math.random() * 32),
    x: parseFloat((Math.random() * 100).toFixed(2)),
    y: parseFloat((Math.random() * 50).toFixed(2)),
    value: parseFloat((Math.random() * 20).toFixed(2)),
    category: parseInt(Math.random() * 10),
  })
})
mockLinks = Array.from({ length: 200 }).map((item, index) => {
  return ({
    source: parseInt(20 - index - Math.random() * 10),
    target: parseInt(index + Math.random() * 10),
  })
})

export {
  mockNodes,
  mockLinks,
  mockCates,
}