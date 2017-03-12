import DevelopersIndex from 'containers/projects/DevelopersIndex'
import DeveloperNew    from 'containers/projects/DeveloperNew'
import DeveloperShow   from 'containers/projects/DeveloperShow'

export default {
	path: 'developers',
	component: DevelopersIndex,
	childRoutes: [
		{
			path: '/developers/new',
			component: DeveloperNew
		},
		{
			path: '/developers/:id',
			component: DeveloperShow
		}
	]
}