import "../scss/layout.scss"
import {Macro} from "../types"

interface MacroPageLayoutProps {
	macros: Macro[]
}
const MacroPageLayout: React.FC<MacroPageLayoutProps> = ({macros}) => {
	return (
		<div className="macro-page-layout">
			<div className="today-container">
				<h1>Today</h1>
			</div>
			<div className="yesterday-container">
				<h1>Yeterday</h1>
			</div>
			<div className="more-container"></div>
		</div>
	)
}

export default MacroPageLayout
