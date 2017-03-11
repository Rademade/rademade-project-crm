import Main        from 'containers/Main'
import ProjectList from 'containers/ProjectList'

const routes = {
  childRoutes: [{
    path: '/',
    component: Main,
    childRoutes: [
      { path: 'projects', component: ProjectList }
    ]

  }]
};

export default routes;
