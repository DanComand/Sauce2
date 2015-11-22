if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'introducing telescope',
    author: 'Sacha Greif',
    url: 'http://sachagreif.com/introducing-telescope'
  });

  Posts.insert({
    title: 'meteor',
    author: 'tom coleman',
    url: 'http://meteor.com'
  });

  Posts.insert({
    title: 'meteor book',
    author: 'tom COLEMAN',
    url: 'http://themeteorbook.com'
  });
}