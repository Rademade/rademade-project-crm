import DepartmentsIndex from 'containers/projects/DepartmentsIndex'
import DepartmentNew    from 'containers/projects/DepartmentNew'
import DepartmentShow   from 'containers/projects/DepartmentShow'

export default {
	path: 'departments',
	component: DepartmentsIndex,
	childRoutes: [
		{
			path: '/departments/new',
			component: DepartmentNew
		},
		{
			path: '/departments/:id',
			component: DepartmentShow
		}
	]
}