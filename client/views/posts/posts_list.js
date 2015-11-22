var postsData = [
  {
    title: 'introducing telescope',
    author: 'sacha greif',
    url: 'http://sachagreif.com/introducing-telescope'
  },  

  {
    title: 'meteor',
    author: 'tom coleman',
    url: 'http://meteor.com'
  },  

  {
    title: 'the meteor book',
    author: 'tom coleman',
    url: 'http://themeteorbook.com'
  },
];
Template.postsList.helpers({
  posts: postsData
});