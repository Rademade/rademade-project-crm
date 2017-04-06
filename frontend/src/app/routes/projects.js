import ProjectsIndex from 'containers/projects/index'
import ProjectNew    from 'containers/projects/new/index'
import { IndexRoute } from 'react-router'
import ProjectShow   from 'containers/projects/show/index'
import View          from 'components/View'
const PATH = '/projects';
export default {
	path: PATH,
	component: View,
  indexRoute: {
	  component: ProjectsIndex
	},
	childRoutes: [
		{
			path: PATH + '/new',
			component: ProjectNew
		},
		{
			path: PATH + '/:id',
			component: ProjectShow
		}
	]
}