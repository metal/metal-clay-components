'use strict';

import ClayBadge from '../ClayBadge';

let badge;

describe('ClayBadge', function() {
	afterEach(() => {
		if (badge) {
			badge.dispose();
		}
	});

	it('should generate the default markup', () => {
		badge = new ClayBadge({
			label: 0,
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a badge with label', () => {
		badge = new ClayBadge({
			label: 2300,
		});

		expect(badge).toMatchSnapshot();
	});

	it('should return abbreviations of the numbers', () => {
		badge = new ClayBadge({
			label: 1900,
		});

		expect(badge.label).toBe('1K');
	});

	it('should render a badge with prefix `K`', () => {
		badge = new ClayBadge({
			label: 1244,
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a badge with prefix `M`', () => {
		badge = new ClayBadge({
			label: 13244244,
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a badge with prefix `B`', () => {
		badge = new ClayBadge({
			label: 10232244244,
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a badge with prefix `T`', () => {
		badge = new ClayBadge({
			label: 2411232244244,
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a badge with id', () => {
		badge = new ClayBadge({
			label: 0,
			id: 'myBadge',
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a `default color` badge', () => {
		badge = new ClayBadge({
			label: 0,
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a `primary color` badge', () => {
		badge = new ClayBadge({
			label: 0,
			style: 'primary',
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a `secondary color` badge', () => {
		badge = new ClayBadge({
			label: 0,
			style: 'secondary',
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a `success color` badge', () => {
		badge = new ClayBadge({
			label: 0,
			style: 'success',
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a `info color` badge', () => {
		badge = new ClayBadge({
			label: 0,
			style: 'info',
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a `warning color` badge', () => {
		badge = new ClayBadge({
			label: 0,
			style: 'warning',
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a `danger color` badge', () => {
		badge = new ClayBadge({
			label: 0,
			style: 'danger',
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a `light color` badge', () => {
		badge = new ClayBadge({
			label: 0,
			style: 'light',
		});

		expect(badge).toMatchSnapshot();
	});

	it('should render a `dark color` badge', () => {
		badge = new ClayBadge({
			label: 0,
			style: 'dark',
		});

		expect(badge).toMatchSnapshot();
	});
});
