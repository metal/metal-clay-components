'use strict';

import {Config} from 'metal-state';

import Chart from './Chart';

/**
 * Line Chart component.
 */
class LineChart extends Chart {
}

LineChart.STATE = {
	/**
	 * The variety of chart that will be rendered.
	 * @instance
	 * @memberof LineChart
	 * @type {?string|undefined}
	 * @default line
	 */
	type: Config.oneOf([
		'area',
		'area-spline',
		'area-step',
		'bar',
		'line',
		'scatter',
		'spline',
		'step',
	]).value('line')
};

export {LineChart};
export default LineChart;
