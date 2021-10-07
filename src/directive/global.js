const directiveList = [
  {
    name: 'elFocus',
    handler: {
      inserted(el) {
        el.children[0].focus();
      }
    }
  }
]

export default directiveList;