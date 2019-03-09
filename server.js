import app from './app';

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(`app running on http://localhost:${app.get('port')}/api-docs/`);
});
