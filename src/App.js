import Main from './pages/Main'
import GridContainer from './components/GridContainer'
import GridItem from './components/GridItem'
import './App.css'

function App() {
	return (
		<div>
			<Main />
			<GridContainer>
				<GridItem small="1 / span 12" large="1 / span 12">
					<h1>SAdfasdf</h1>
					<p>	
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mauris sapien, pretium eu neque efficitur, blandit scelerisque est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc gravida eu dolor a tempor. Praesent ultricies ipsum ut egestas fermentum. Nulla laoreet ipsum vel dui eleifend lacinia. Praesent accumsan sed ipsum quis commodo. Sed hendrerit vehicula erat, non tempor lectus molestie quis. Mauris in gravida massa. In sodales dui et est sollicitudin, non blandit leo gravida. Phasellus sit amet tempor tortor. Aliquam vel metus ipsum.
					</p>
					<p>	
						Nunc posuere sapien tellus, quis lobortis ante aliquet sit amet. Nam sed felis blandit, ultricies nisl sed, fermentum erat. Pellentesque molestie molestie urna, at viverra urna auctor eu. Suspendisse justo neque, sagittis et faucibus eget, feugiat nec sapien. Proin non elit metus. Mauris convallis, leo laoreet euismod condimentum, est ante placerat turpis, et rutrum orci eros commodo ligula. Praesent tincidunt ipsum vitae diam accumsan, vel viverra lectus sollicitudin. Sed ultrices commodo felis nec condimentum. Aliquam dui urna, sollicitudin id venenatis sed, pretium eu odio. Curabitur lobortis purus purus, id pulvinar neque rhoncus sit amet. Nam vel velit at nisl fermentum gravida. Praesent aliquet mollis massa vel condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna felis, laoreet ornare ullamcorper nec, venenatis sed sapien. Cras hendrerit mi sit amet sapien luctus, vel malesuada est mollis.
					</p>
					<p>	
						Sed consectetur diam enim, bibendum condimentum leo tristique a. Vivamus ligula neque, consequat non porta vel, tempus vitae quam. Nam commodo nulla vitae libero fringilla pulvinar. Nullam eleifend sodales neque, eu imperdiet justo dapibus at. Etiam erat magna, blandit et dolor nec, porta euismod erat. Donec porttitor, nibh a viverra tincidunt, nisi justo lobortis felis, sit amet mollis diam lectus eget est. Nullam ultricies at diam ac consectetur. Ut eget nulla id magna scelerisque ornare ut quis mi. Morbi efficitur, enim in varius molestie, ipsum urna lacinia metus, in interdum metus lectus eu odio. Mauris molestie quam eget enim tincidunt, sed accumsan velit fringilla. Nam a quam vitae sapien malesuada sagittis. Morbi blandit lectus vitae porta molestie.					</p>
					<p>	
						Nullam sagittis ante ac semper consequat. Vivamus diam lectus, elementum nec velit vel, posuere rutrum tellus. Proin iaculis leo sit amet nulla cursus interdum. Duis non tristique diam. Donec molestie felis libero, sed condimentum nisi bibendum ultricies. Curabitur posuere diam et risus dignissim, in fermentum justo lobortis. Pellentesque non mattis risus.
					</p>
				</GridItem>
			</GridContainer>
		</div>
	);
}

export default App;