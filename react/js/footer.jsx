/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React */
var app = window.app || {};

(function () {
	'use strict';

	app.TodoFooter = React.createClass({
		render: function () {
			var t = this.props.t;
			var activeTodoWord = t('footer.itemsTodo' ,{ count: this.props.count });
			var clearButton = null;

			if (this.props.completedCount > 0) {
				clearButton = (
					<button
						className="clear-completed"
						onClick={this.props.onClearCompleted}>
						{t('footer.clearCompleted')}
					</button>
				);
			}

			var nowShowing = this.props.nowShowing;
			return (
				<footer className="footer">
					<span className="todo-count">
						<strong>{this.props.count}</strong> {activeTodoWord}
					</span>
					<ul className="filters">
						<li>
							<a
								href="#/"
								className={classNames({selected: nowShowing === app.ALL_TODOS})}>
									{t('footer.filter.all')}
							</a>
						</li>
						{' '}
						<li>
							<a
								href="#/active"
								className={classNames({selected: nowShowing === app.ACTIVE_TODOS})}>
									{t('footer.filter.active')}
							</a>
						</li>
						{' '}
						<li>
							<a
								href="#/completed"
								className={classNames({selected: nowShowing === app.COMPLETED_TODOS})}>
									{t('footer.filter.completed')}
							</a>
						</li>
					</ul>
					{clearButton}
				</footer>
			);
		}
	});
})();
