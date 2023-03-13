// Modelo renderWithRouter que eu usava com react-router-dom 5 e history.push

// import React from 'react';
// import { Router } from 'react-router-dom';
// import { render } from '@testing-library/react';
// import { createMemoryHistory } from 'history';

// const renderWithRouter = (component) => {
//   const customHistory = createMemoryHistory();
//   const returnRender = {
//     ...render(
//       <Router history={ customHistory }>
//         { component }
//       </Router>,
//     ),
//   };

//   return { history: customHistory, ...returnRender };
// };

// export default renderWithRouter;

// Coruja esta sugerindo usar este Modelo para versão 6 que vai funcionar com navigate, que só tem que atualizar user-event para versão 14.4.3 ou superior de preferência:
// https://testing-library.com/docs/example-react-router/

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return {
    router: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

export default renderWithRouter;
