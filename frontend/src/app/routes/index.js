import Main        from 'containers/Main'

import projects from 'routes/projects'
// import departments from 'routes/departments'
// import developers from 'routes/developers'

const routes = {
  childRoutes: [{
    path: '/',
    component: Main,
    childRoutes: [
      projects
			// departments,
			// developers
		]
  }]
};

export default routes;
