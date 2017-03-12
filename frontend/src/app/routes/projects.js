import ProjectsIndex from 'containers/projects/index'
import ProjectNew    from 'containers/projects/new/index'
import ProjectShow   from 'containers/projects/show/index'

export default {
	path: 'projects',
	component: ProjectsIndex,
	childRoutes: [
		{
			path: '/projects/new',
			component: ProjectNew
		},
		{
			path: '/projects/:id',
			component: ProjectShow
		}
	]
}