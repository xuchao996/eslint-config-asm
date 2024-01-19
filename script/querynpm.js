import ls from 'npm-list-author-packages';

const options = {
  username: 'react',
//   registry: 'registry.npmjs.org',
//   port: 443,
//   protocol: 'https'
};

ls(options, (error, list) => {
  if (error) {
    throw error;
  }
  console.log(list);
});